const express = require('express');
const path = require('path');
const cors = require('cors');
const session = require('express-session');
const filemanager = require('./service-files/filemanager')
const loginauth = require('./service-files/loginmanager')
const ejs = require('ejs');
const { request, response } = require('express');

// create an instance of express
const app = express()
 
const PORT = 5000 

//To get access to the name value pairs send in the message Body of POST Request.
 app.use(express.urlencoded({extended:true}))
 app.use(express.json())
 app.use(cors());
app.use(session({secret: 'login-id', resave: false, saveUninitialized: false, })); //creating session and session perams 

app.set('view engine', 'ejs'); //setting ejs as a rendering engine
app.set('views', __dirname + '/views');


//Middleware Serving Static Pages from client directory
app.use(express.static(path.join(__dirname, "../client"), {extensions: ["html", 'htm']})
);

app.post('/signup', (request, response) => {
    //logic to handle signup requests and redirect to the login page
  filemanager.writefiledata('../data/user-data.json', request.body) //write to this file, this obj to json obj
  response.sendFile(path.join(__dirname, "../client/login.html"));//redirect

})

app.post('/login', (request, response) => {
  //logic to handle login filechecking and authentication then redirect to the dashboard
    const userID = loginauth.authentication(request.body);
    if(userID == undefined){
      response.sendFile(path.join(__dirname, "../client/login.html"));
    }
    else{
      //save session user id 
      request.session.userID = userID; //add user object to the session object
      request.session.save( (err) => {
        
      })
      //here.. send redirect to /dashboard and load in logic for using the session object 
       response.redirect('/dashboard'); 
    
  }


})

app.get('/dashboard', (request, response) => {
  if(request.session.userID == undefined){
    response.redirect('/login'); 
    

  }
  else{
    let sessionobject = request.session;
    response.render('dashboard.ejs', {sessionobject});
  }
})


// Returns 404 Page from the client directory.
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "../client/404.html"));
});



// Tell express app to listen for incomming request on a specific PORT
app.listen(PORT, () => {
  console.log(`server started on http://localhost:5000`);
});


require('dotenv').config()
const express = require('express');
const path = require('path');
const cors = require('cors');
 

// create an instance of express
const app = express()
 
const PORT =  process.env.PORT || 5000 

//To get access to the name value pairs send in the message Body of POST Request.
 app.use(express.urlencoded({extended:true}))
 app.use(express.json())
 app.use(cors());

//Middleware Serving Static Pages from client directory
app.use(express.static(path.join(__dirname, "../client"), {extensions: ["html", 'htm']})
);

//ADD HERE NEW PAGE ROUTING WITH  app.post('./ROUTE',(REQUEST,RESPONSE)=>{...res.sendFile(path.join(__dirname, "../client/dashboard.html"))}) 


// Returns 404 Page from the client directory.
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "../client/404.html"));
});



// Tell express app to listen for incomming request on a specific PORT
app.listen(PORT, () => {
  console.log(`server started on http://localhost:5000`);
});

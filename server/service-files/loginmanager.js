//login logic handling
// IN - user data
//out - user.ID 

const filemanager = require('./filemanager');



exports.authentication = (credentials) => {
    const {username, password} = {...credentials};
    const users = filemanager.getfiledata('../data/user-data.json')

    //test to find match. return the ID 
    const UserID = users.find((user) =>{
        if(user.username == username && user.password == password){
            //console.log('FOUND USER');
            return user;

        }
        else{
            //console.log('NO USER');
        }


    })

    return UserID;
 
}





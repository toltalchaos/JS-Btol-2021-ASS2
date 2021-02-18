//members to create and serve user data

const filesystem = require('fs');
const pathway = require('path');
const uuid = require('uuid')


 exports.getfiledata = (desiredfilepath)=> {
    let fileContents = JSON.parse(filesystem.readFileSync(pathway.join(__dirname, desiredfilepath))) //grab data file and parse to json object
    return fileContents;
}

 const getfile = (desiredfilepath)=> {
    let fileContents = JSON.parse(filesystem.readFileSync(pathway.join(__dirname, desiredfilepath))) //grab data file and parse to json object
    return fileContents;
}

exports.writefiledata = (desiredfilepath, data) =>{
    let fileContents = getfile(desiredfilepath) //grab json object
    let userdata = {...data};
    //add uuid here  
    userdata.ID = uuid.v4();
    //remove confirm password field
     delete userdata.confpassword
    fileContents.push(userdata) //add new data
    fileContents = JSON.stringify(fileContents) //parse to single string
    filesystem.writeFileSync(pathway.join(__dirname, desiredfilepath), fileContents) //write over file
    
}

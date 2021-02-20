### app is live at - https://btol-js-assignment2.herokuapp.com/

# Braydon Tol - ASS02

## application description
this application is a general layout designed to demonstrate a signup - login - and redirect routing using a back end API the browser interfaces with using url methods and actions.

## how to use
this application has been designed for the user to first begin on the landing page, click sign up,and fill in the required information.

at this point the user will be redirected to the login page and will login using the credentials they submitted on the previous page. 

once the login information has come back as accurate the user will be redirected to the dashboard.

## how to install

once files are downloaded - assuming the user has node installed.
select the directory containing the package.json file and use...

    npm install
    npm run server

this should open a local host server to interface with the application.

## depencancies and links to doccumentation 

    "cors": "^2.8.5",
    "dotenv": "^8.2.0",
    "ejs": "^3.1.6",
    "express": "^4.17.1",
    "express-session": "^1.17.1",
    "uuid": "^8.3.2"


https://www.npmjs.com/

### known bugs
- the users.html page will bug out if code is run on locla host. replace the commented out portion for the getdata in users.js for development
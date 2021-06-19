# JWT-Login
This project contains client and server application. 
Server - The server is a REST API which has login service to generates JWT token. It also has static mocked user database. 
         Login service accepts username and password and issues a JWT token which contains user as payload.
Client - This is a react application which has user profile and login page. User Profile page needs authentication 
         and hence redirects to login page incase when no authentication tokent is found at client end. 
         Login page provides user interface for providing user credentials and calls the Login service to validate the user 
         and get authentication service. This authentication token is then stored at clent end and can be retreived on demand.
         
         
# Instructions to Run
Server -
 1. Open terminal at server folder
 2. run npm install command. $ npm i
 3. verify all the dependencies are installed.
 3. Start the server by running. $ npm run start
 4. This will start the server at localhost:3000
 
 Client - 
 1. Open terminal at client folder
 2. run npm install command. $ npm i
 3. verify all the dependencies are installed.
 3. Start the cllent by running. $ npm run start
 4. This will start the client at localhost:4000
 
 Running client will open login page. To test, enter below user credentials and click on Login button.
 Username/email: john.keneddy@email.com.au
 Password: Password
 
 Login on successful authentication will take the user to User Profile page. 
 
 User profile page display's welcome message with logged in user title, first and last name.
 User profile page also has a Logout button. Clicking logout button logs user out and redirects to login page.
 
 some more user credentails
 1. Username/email: sandra.mist@email.com.au, Password: Password.
 2. Username/email: rita.james@email.com.au, Password: Password.

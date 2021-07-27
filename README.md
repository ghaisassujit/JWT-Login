# JWT-Login
This project implements Login using JWT and contains client & server application. 
1. Server - The server is a REST API which has login service to generates JWT token. It also has static mocked user database. 
         Login service accepts username and password and issues a JWT token which contains userId as payload. Also has users endpoint which can be used to fetch user details.
         
2. Client - This is a react application which has user profile and login page. User Profile page is a private route and needs authentication 
         .Hence accessing it redirects to login page incase when no authentication token is found at client end. 
         Login page provides user interface for providing user credentials and calls the Login of auth manager service to validate the user 
         and get authentication token. This authentication token is then stored and maintained by auth manager service, along with userId extracted from the token. 
         When User Profile page is loaded it gives call to server api (passing the token using request interceptors and userId from auth manager) to get user details 
         which then show a welcome message on User Profile page.
         
         
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
 User Profile fetches user details by calling users api(server) and display's welcome message with logged in user title, first and last name.
 User profile page also has a Logout button. Clicking logout button logs user out and redirects to login page.
 
 

# Assumptions made during implementation
1. Token refesh is not needed. Can be implemented if need be.
2. Just a poc project on Login with JWT; hence, no test coverage. Have added jest dependancy and tests can be added later.

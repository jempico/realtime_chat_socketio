A realtime chat build with ExpressJS, NodeJS, Websockets, SocketIO and MongoDB.

## Installation:
1. Install the program (type 'npm install' in your terminal).

2. Add environment variables: edit or create and `.env` file in the root directory with the following data:

     ```
     PORT=1000
    DB_USER = tester
    DB_PASSWORD = AWnHq3IDZaeDL8DP
     ``` 
          
## Run:
  
1. Run the program (type 'npm start' in your terminal).

2. Head over to http://localhost:1000/login and let the chat begin!

3. To simulate a real conversation you can login with different Google accounts on different browsers.

## Things I've learned
- [x] Authenticate users with Google Token (google-auth-library).
- [x] Server Side Rendering with EJS template engine to inject dynamic content into the html.
- [x] Using Socket.io to create web sockets
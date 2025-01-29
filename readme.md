<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/jempico/realtime_chat_socketio">
    <img src="public/images/socket-io.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">A realtime chat</h3>

  <p align="center">
    A chat where multiple users can join and create their own chats!
    <br />
    <br />
   </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#things-ive-learned">Things I've Learned</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

As part of my <b>NodeJS</b> learning journey , I've built a realtime chat with <a href="https://expressjs.com/">ExpressJS</a>, <a href="https://socket.io/">Socket.IO</a> and <a href="https://www.mongodb.com/">MongoDB</a>.

Here are the main features of the app:

- <b>Google Token Authentication</b>: users can login with their Google Account.
- <b>Multi-user</b>: Different users can login and chat with each other. To try it out in a single machine, just login with different Google Accounts on different browsers.
- <b>Chatroom creation</b>: users can either select a chatroom from a list of create their own chatrooms from scratch.

![Screenshot 2021-05-16 at 02 50 13](https://user-images.githubusercontent.com/25463174/118382091-1725d300-b5f2-11eb-90a0-f7aa8559b267.png)

![Screenshot 2021-05-16 at 02 53 51](https://user-images.githubusercontent.com/25463174/118382084-f9586e00-b5f1-11eb-91be-396d2510036c.png)

<p align="right">(<a href="#top">back to top</a>)</p>

## Built With

This is the tech stack I've worked with:

- [Node.js](https://nodejs.dev/)
- [Socket.IO](https://socket.io/)
- [MongoDB](https://www.mongodb.com/)
- [MongoDB Atlas](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [OAuth 2.0](https://developers.google.com/identity/protocols/oauth2)
- [EJS](https://ejs.co/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Installation

To get a local copy up and running follow these simple steps.

1. Clone the repo
   ```sh
   git clone https://github.com/jempico/realtime_chat_socketio
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Add environment variables: edit or create and `.env` file in the root directory with the following data:
   ```
    PORT= 3000
    DB_USER = tester
    DB_PASSWORD = AWnHq3IDZaeDL8DP
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

## Things I've learned

- [x] Authenticate users with Google Token (google-auth-library).
- [x] Using Socket.io to create web sockets.
- [x] Using MongoDB and Mongoose for schema validation.
- [x] Set up a MongoDB Atlas cluster.
- [x] Server Side Rendering with EJS template engine to inject dynamic content into the html.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Jemimah Pico - [Portfolio](https://jempico.com) - [Linkedin](http://linkedin.com/in/jempico) - jpfilarca@gmail.com

Project Link: [https://github.com/jempico/realtime_chat_socketio](https://github.com/jempico/realtime_chat_socketio)

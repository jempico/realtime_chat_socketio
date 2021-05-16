const User = require('../../models/User')
const Room = require('../../models/Room')
const url = require('url');

//Google Auth
const {OAuth2Client, UserRefreshClient} = require('google-auth-library');
const CLIENT_ID = '259227819971-os99959mh1qmqer3md2743qb5vbrhhas.apps.googleusercontent.com';
const client = new OAuth2Client(CLIENT_ID);



class indexController {

    async logIn(req, res){
        try {
            res.status(200).render('pages/login')
        } catch(err) {
            console.error(err);
            res.status(404).render('error/404')}
    }
    async dashboard(req, res){
        try {
            let user = req.user;
            res.status(200).render('pages/dashboard', {user})
        } catch(err) {
            console.error(err);
            res.status(404).render('error/404')}
    }
    async logout(req, res){
        try {
            res.clearCookie('session-token');
            res.redirect('/login')
        } catch(err) {
            console.error(err);
            res.status(404).render('error/404')}
    }
    async verifyLogin(req, res){
        try {
                //Grabbing token after loggedin
                let token = req.body.token;
                async function verify() {
                    const ticket = await client.verifyIdToken({
                        idToken: token,
                        audience: CLIENT_ID, 
                    });
                    const payload = ticket.getPayload();

                    const newUserDTO = {
                        googleId: payload['sub'],
                        displayName: payload['name'],
                        firstName: payload['given_name'],
                        lastName: payload['family_name'],
                        image: payload['picture']
                    }
                    let user = await User.findOne({googleId: payload['sub']})
                    if (!user) {
                        user = await User.create(newUserDTO);
                        console.log('User added to MongoDB')
                    }
                    
                }
                verify()
                .then(()=>{
                    res.cookie('session-token', token);
                    res.send('success');
                })
                .catch(console.error);
        } catch(err) {
            console.error(err);
            res.status(404).render('error/404')}
    }   
    
    async joinChat(req, res){
        try {
            let user = req.user;
            let rooms = await Room.find({}).lean()
            res.status(200).render('pages/index', {user, rooms})
        } catch(err) {
            console.error(err);
            res.status(404).render('error/404')}
    }
    async chat(req, res){
        //Both /newRoom and /index routes point to /chat with same req.body
        try {
            const queryObject = url.parse(req.url,true).query; //>Grabbing form data from URL since it's a GET method
            let roomName = queryObject.room;
            let existingRoom = await Room.find({name : roomName}).lean()
            if (existingRoom.length > 0 ) {
                res.status(200).render('pages/chat')
            }
            else {
                let newRoom = await Room.create({name: roomName})
                res.status(200).render('pages/chat')

            }
        } catch(err) {
            console.error(err);
            res.status(404).render('error/404')}
    }
   async newRoom(req, res){
        try {
            let user = req.user;
            res.status(200).render('pages/newRoom', {user})
        } catch(err) {
            console.error(err);
            res.status(404).render('error/404')}
    }
    async rooms(req, res){
        try {
            let user = req.user;
            let rooms = await Room.find({}).lean()
            res.status(200).render('pages/rooms', {user, rooms})
        } catch(err) {
            console.error(err);
            res.status(404).render('error/404')}
    }
}

module.exports = new indexController;

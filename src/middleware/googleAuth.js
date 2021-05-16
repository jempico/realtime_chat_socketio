//Google Auth
const {OAuth2Client} = require('google-auth-library');
const CLIENT_ID = '259227819971-os99959mh1qmqer3md2743qb5vbrhhas.apps.googleusercontent.com';
const client = new OAuth2Client(CLIENT_ID);

class googleAuthMiddleware {
    checkAuth(req, res, next){
        let token = req.cookies['session-token'];
        let user = {};
        async function verify() {
            const ticket = await client.verifyIdToken({
                idToken: token,
                audience: CLIENT_ID,  
            });
            const payload = ticket.getPayload();
            user.name = payload.name;
            user.email = payload.email;
            user.picture = payload.picture;
            console.log(payload)

          }
          verify()
          .then(()=>{
              console.log('TOKEN AUTH IS' + token);
              req.user = user;
              console.log(user)
              next();
          })
          .catch(err=>{
              res.redirect('/login')
          })
    }
    checkGuest(req, res, next){
        let token = req.cookies['session-token'];
        if (token) {
            res.redirect('/dashboard')
        } else {
            return next()
        }

    }
}


module.exports = new googleAuthMiddleware;
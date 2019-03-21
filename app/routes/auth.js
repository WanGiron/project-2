var authController = require('../controllers/authcontroller.js');

module.exports = function(passport, app, daycare_data) {
 
    app.get("/signup", authController.signup);
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/',
 
        failureRedirect: '/api'
    }));
    

    app.get("/parentSignin", isLoggedIn, authController.parentSignin);
    app.get("/adminSignin", isLoggedIn, authController.adminSignin);
 

    app.post("/parentSignin",  passport.authenticate('local-signin', { failureRedirect: '/' }),
    function(req, res){
        // console.log(Object.keys(req));
        console.log(req.user.username);
        var childName = req.user.username;
        res.redirect("/api/client-site/"+childName);
    }
    );
    app.post("/adminSignin", passport.authenticate('local-signin', {
        successRedirect: '/api/administrator',

        failureRedirect: '/'
    }

    ));




    app.get('/logout', authController.logout);

    function isLoggedIn(req, res, next) {
 
        if (req.isAuthenticated())
         
            return next();
             
        res.redirect('/');
     
    }

}
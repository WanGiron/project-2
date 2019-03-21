var exports = module.exports = {}
 var path = require("path");
 var daycare_data = require("../data_base/daycare_data.js");

 
exports.signup = (req, res)=>{
 
    res.sendFile(path.join(__dirname, "../public/home.html"));
 
}


exports.adminSignin = (req, res) => {

}

exports.parentSignin = (req, res) =>{
    res.redirect("/api/client-site/:");
}

exports.logout = function(req, res) {
 
    req.session.destroy(function(err) {
 
        res.redirect('/');
 
    });
 
}
    
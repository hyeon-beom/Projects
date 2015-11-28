exports.insert = function (req, res) {

    res.render('insert');
};

exports.insertok = function (req, res) {
    var users = require('../models/users.js');
    users.insert(req.body, function (result) { 
        res.redirect('select');
    });
};


exports.select = function (req, res) {
    var users = require('../models/users.js');
    users.getUsers(function (result) {
        res.render('select', result);
    });
        
    
    
    
};
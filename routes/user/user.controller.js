(function() {
    'use strict';

    var User = require('./user.model');

    //grab all players
    module.exports.getAll = function(req, res) { 
        User.find({}, function (err, post) {
            if (err) {
                console.error(err);
                return res.status(500).send(err);
            }
            res.json(post);
        });
    };
    
    
    
})();
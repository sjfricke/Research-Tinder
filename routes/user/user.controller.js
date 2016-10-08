(function() {
    'use strict';

    var User = require('./user.model');

    //grab all players
    module.exports.getStudies = function(req, res) { 
        User.find({"local.email" : req.params.email}, function (err, post) {
            if (err) {
                console.error(err);
                return res.status(500).send(err);
            }
            res.json(post[0].local.studies); //returns array of studies _ids
        });
    };
    
    
    
})();
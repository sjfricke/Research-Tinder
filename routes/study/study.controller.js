(function() {
    'use strict';

    var Study = require('./study.model');

    //grab all players
    module.exports.getAll = function(req, res) { 
        Study.find({}, function (err, post) {
            if (err) {
                console.error(err);
                return res.status(500).send(err);
            }
            res.json(post);
        });
    };
    
    
    
})();
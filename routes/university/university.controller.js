
(function() {
    'use strict';

    var University = require('./university.model');

    //grab all players
    module.exports.getAll = function(req, res) { 
        University.find({}, function (err, post) {
            if (err) {
                console.error(err);
                return res.status(500).send(err);
            }
            res.json(post);
        });
    };
    
    module.exports.getID = function(req, res) { 
        University.find({ID : req.params.ID}, function (err, post) {
            if (err) {
                console.error(err);
                return res.status(500).send(err);
            }
            res.json(post);
        });
    };
    
    module.exports.getState = function(req, res) { 
        University.find({State: req.params.State}, function (err, post) {
            if (err) {
                console.error(err);
                return res.status(500).send(err);
            }
            res.json(post);
        });
    };
    
    module.exports.getName = function(req, res) { 
        University.find({Name: req.params.Name}, function (err, post) {
            if (err) {
                console.error(err);
                return res.status(500).send(err);
            }
            res.json(post);
        });
    };
    
    
    
})();
(function() {
    'use strict';

    var Participant = require('./participant.model');

    //grab all players
    module.exports.getAll = function(req, res) { 
        Participant.find({}, function (err, post) {
            if (err) {
                console.error(err);
                return res.status(500).send(err);
            }
            res.json(post);
        });
    };
    
    //gets player by passed param device number
    module.exports.getByDevice = function(req, res) { 
        Participant.find({"device" : req.params.device}, function (err, post) {
            if (err) {
                console.error(err);
                return res.status(500).send(err);
            }
            res.json(post);
        });
    };
    
    //sets passed device param online 
    module.exports.setOnline = function(req, res) { 
        
        Participant.findOneAndUpdate({"device" : req.params.device}, {
            $set: {
                "online": true
            }
        }, function(err, doc){
            if (err) {
                return res.send(500, { error: err });
            }            
            return res.send("succesfully saved"); 
        });
    };
    
    //sets passed device param offline
    module.exports.setOffline = function(req, res) {  
        
        Participant.findOneAndUpdate({"device" : req.params.device}, {
            $set: {
                "online": false
            }
        }, function(err, doc){
            if (err) {
                return res.send(500, { error: err });
            }            
            return res.send("succesfully saved"); 
        });
    };
    
    //sets passed device param to postion in body
    module.exports.setPostion = function(req, res) {  
        
        Participant.findOneAndUpdate({"device" : req.params.device}, {
            $set: {
                "x": req.body.x, "z" : req.body.z
            }
        }, function(err, doc){
            if (err) {
                return res.send(500, { error: err });
            }            
            return res.send("succesfully saved"); 
        });
    };
    
    //sets passed device param to mode in body
    module.exports.setMode = function(req, res) {
    
        Participant.findOneAndUpdate({"device" : req.params.device}, {
            $set: {
                "mode": req.body.mode
            }
        }, function(err, doc){
            if (err) {
                return res.send(500, { error: err });
            }            
            return res.send("succesfully saved"); 
        });
    };
        
        
    
    
    
})();
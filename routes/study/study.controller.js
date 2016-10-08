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
    
    module.exports.getID = function(req, res) { 
        Study.findOne({_id : req.params.ID}, function (err, post) {
            if (err) {
                console.error(err);
                return res.status(500).send(err);
            }            
            res.json(post);
        });
    };
    
    module.exports.getUniversityID = function(req, res) { 
        Study.find({ "university" : req.params.ID}, function (err, post) {
            if (err) {
                console.error(err);
                return res.status(500).send(err);
            }            
            res.json(post);
        });
    };
    
    module.exports.getMinPaid = function(req, res) { 
        Study.find({ $gt: req.params.value }, function (err, post) {
            if (err) {
                console.error(err);
                return res.status(500).send(err);
            }
            res.json(post);
        });
    };
    
    module.exports.getAge = function(req, res) { 
        Study.find({ $gt: req.body.minAge, $lt: req.body.maxAge }, function (err, post) {
            if (err) {
                console.error(err);
                return res.status(500).send(err);
            }
            res.json(post);
        });
    };
    
    module.exports.getCustom = function(req, res) { 
        Study.find(req.body, function (err, post) {
            if (err) {
                console.error(err);
                return res.status(500).send(err);
            }
            res.json(post);
        });
    };
    
    module.exports.newStudy = function(req, res) { 
        var study = new Study(req.body);
        study.save(function(err, post) {
          if (err) {
                console.error(err);
                return res.status(500).send(err);
          }
          res.json(post);
        });
    };
    
    //edit exsisting one
     module.exports.updateStudy = function(req, res) {
        var studyID = req.params.studyID;
        var body = req.body;
        // Need to do this so mongo doesn't think we're trying to edit the _id
        delete body._id;
        Study.findOneAndUpdate({_id: studyID}, req.body, function(err, post) {
          if (err) {
                console.error(err);
                return res.status(500).send(err);
          }  
          res.json(post);
        });
     };
     
     //delete a post
     module.exports.deleteStudy = function(req, res) {
         var studyID = req.params.studyID;
         Study.findOneAndRemove({_id: studyID}, function(err, removedPost) {
          if (err) {
            console.error(err);
            return res.status(500).send(err);
          }
          res.json(removedPost);
        });
     };

})();
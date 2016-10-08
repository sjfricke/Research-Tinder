(function() {
  'use strict';

    var express = require('express');
    var controller = require('./study.controller');    

    var router = express.Router();

    //Gets Data
    router.get('/', controller.getAll);
    router.get('/byID/:ID', controller.getID);
    router.get('/byUniversityID/:ID', controller.getUniversityID);
    router.get('/minPaid/:value', controller.getMinPaid);
    router.post('/betweenAge', controller.getAge);
    router.post('/custom', controller.getCustom);

    //Inserts Data
    router.post('/newStudy', controller.newStudy);
    router.post('/updateStudy', controller.updateStudy);
    router.post('/deleteStudy', controller.deleteStudy);

    module.exports = router;

})();
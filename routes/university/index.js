(function() {
  'use strict';

  var express = require('express');
  var controller = require('./university.controller')    
    
  var router = express.Router();

  router.get('/', controller.getAll);
  router.get('/byID/:ID', controller.getID);
  router.get('/byName/:Name', controller.getName);
  router.get('/byState/:State', controller.getState);
//  router.get('/device/:device', controller.getByDevice);
//  router.get('/online/:device', controller.setOnline);
//  router.get('/offline/:device', controller.setOffline);
//  router.post('/position/:device', controller.setPostion);
//  router.post('/mode/:device', controller.setMode);

  module.exports = router;

})();
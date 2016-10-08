(function() {
  'use strict';

  var express = require('express');
  var controller = require('./university.controller');       
    
  var router = express.Router();

  router.get('/', controller.getAll);
  router.get('/byID/:ID', controller.getID);
  router.get('/byName/:Name', controller.getName);
  router.get('/byState/:State', controller.getState);

  module.exports = router;

})();
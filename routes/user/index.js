(function() {
  'use strict';

  var express = require('express');
  var controller = require('./user.controller');    
    
  var router = express.Router();

  router.get('/:email', controller.getStudies);

  module.exports = router;

})();
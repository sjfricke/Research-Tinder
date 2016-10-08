(function() {
  'use strict';

  var express = require('express');
  var router = express.Router();

  router.use('/user', require('./user'));  
  router.use('/study', require('./study'));  
  router.use('/participant', require('./participant'));  
  router.use('/university', require('./university'));  

  module.exports = router;

})();


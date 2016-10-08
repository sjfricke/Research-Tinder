(function() {
    'use strict';

    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;

    var UniversitySchema = new Schema({
        ID: Number,
        State: String,
        Name: String
    });

module.exports = mongoose.model('University', UniversitySchema);

})();
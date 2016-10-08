(function() {
    'use strict';

    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;

    var StudySchema = new Schema({
        university: Number,
        minAge: Number,
        maxAge: Number,
        gender: String,
        compesation: Number,
        length: Number,
        numberOfVisit: Number,
        startDate: Date,
        endDate: Date,
        detail: String,
        phone: String,
        email: String
    });

module.exports = mongoose.model('Study', StudySchema);

})();
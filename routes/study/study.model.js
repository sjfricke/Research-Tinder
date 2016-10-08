(function() {
    'use strict';

    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;

    var StudySchema = new Schema({
        location: String,
        minAge: Number,
        maxAge: Number,
        compesation: Number,
        length: Number,
        numberOfVisit: Number,
        detailInfo: {},       
    });

module.exports = mongoose.model('Study', StudySchema);

})();
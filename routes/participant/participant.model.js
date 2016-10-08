(function() {
    'use strict';

    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;

    var ParticipantSchema = new Schema({
        userName: String,
        id: Number,
        age: Number,
        gender: String,
        location: String,
        detailInfo: {},       
    });

module.exports = mongoose.model('Participant', ParticipantSchema);

})();
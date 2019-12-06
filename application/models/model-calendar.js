const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const calendarSchema = new Schema({
    day: Date,
    express_am: Number,
    express_pm: Number,
    payout_am: Number,
    payout_pm: Number,
    baggers: [{type: Schema.Types.ObjectId, ref: 'bagger'}] 
}, {collection: 'calendar'});

const calendar = mongoose.model('calendar', calendarSchema);

module.exports = calendar;
const mongoose = require('mongoose');
const Basketball = mongoose.model(
    'Basketball',
    new mongoose.Schema({
        activeType: {
            type: String,
        },
        startDate: {
            type: String,
        },
        endDate: {
            type: String,
        },
        title: {
            type: String,
        },
        place: {
            type: String,
        },
        population: {
            type: Number,
        },
        individualCost: {
            type: Number,
        },
        teamCost: {
            type: Number,
        },
        roundNumber: {
            type: String,
        },
        ballfriendLevel: {
            type: String,
        },
        rule: {
            type: String,
        },
        content: {
            type: String,
        },
    })
);

exports.Basketball = Basketball;

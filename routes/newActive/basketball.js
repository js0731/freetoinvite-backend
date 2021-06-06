const express = require('express');
const router = express.Router();

const { Basketball } = require('../../modules/newActive/basketball');

router.post('/', (req, res) => {
    const {
        activeType,
        startDate,
        endDate,
        title,
        population,
        content,
        place,
        individualCost,
        teamCost,
        roundNumber,
        ballfriendLevel,
        rule,
    } = req.body;

    const basketball = new Basketball({
        activeType,
        startDate,
        endDate,
        title,
        population,
        content,
        place,
        individualCost,
        teamCost,
        roundNumber,
        ballfriendLevel,
        rule,
    });
    basketball.save();
});

module.exports = router;

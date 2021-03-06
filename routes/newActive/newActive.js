const express = require('express');
const router = express.Router();

const boardGame = require('./boardGame');
const mahjong = require('./mahjong');
const movie = require('./movie');
const basketball = require('./basketball');
const running = require('./running');
const fighting = require('./fighting');
const badminton = require('./badminton');
const drink = require('./drink');
const streetDance = require('./streetdance');

router.use('/boardgame', boardGame);
router.use('/movie', movie);
router.use('/mahjong', mahjong);
router.use('/basketball', basketball);
router.use('/running', running);
router.use('/fighting', fighting);
router.use('/badminton', badminton);
router.use('/drink', drink);
router.use('/streetdance', streetDance);

module.exports = router;

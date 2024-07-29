
const { Router } = require('express');
const router = Router();
const gptController = require('../controllers/gptController');

router.post('/query', gptController.queryGPT);

module.exports = router;
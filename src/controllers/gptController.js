const gptService = require('../services/gptService');

let gptController = {};

gptController.queryGPT = async (req, res) => {
    let { messages } = req.body;
    if (!messages) {
        return res.status(400).json({ error: 'Messages is required' });
    }
    console.log('messages type', typeof messages);
    if (typeof messages === 'string') {
        try {
            console.log('string messages', messages);
            messages = JSON.parse(messages);
        } catch (error) {
            console.log('error', error);
            return res.status(400).json({ error: error});
        }
    }

    try {
        console.log('messages type 2', typeof messages);

        console.log('Sending Messages to GPT API', messages);
        const response = await gptService.sendPrompt(messages);
        res.json(response);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get response from GPT API' });
    }
};

module.exports = gptController;
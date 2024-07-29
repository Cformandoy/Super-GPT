
const OpenAI = require('openai');
const config = require('../config/config');

let gptService = {};

const openai = new OpenAI({ apiKey: config.apiKey });

gptService.sendPrompt = async (messages) => {
    try {
        const completion = await openai.chat.completions.create({
            messages: messages,
            model: "gpt-4",
        });
        return completion.choices[0].message.content.replace(/\n/g, '');
    } catch (error) {
        throw new Error('Error sending messages to GPT API');
    }
};

module.exports = gptService;
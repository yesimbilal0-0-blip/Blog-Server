const { GoogleGenerativeAI } = require('@google/generative-ai');
const asyncHandler = require('express-async-handler');
const { head } = require('../routes/blogRoutes');
const Blog = require('../models/blogModel');
const Plan = require('../models/planModel');

const prompt = asyncHandler(async (req, res) => {
    try {
        const { prompt } = req.body;
        const AI = new GoogleGenerativeAI(`${process.env.GEMINI_API_KEY}`);
        const model = AI.getGenerativeModel({ model: "gemini-1.5-flash-001-tuning" });

        const plan = await Plan.findOne({ user: req.user.username });
        if(!plan) {
            return res.status(400).json({ message: 'No active plan found' });
        }

        if(plan.count <= 0) {
            return res.status(400).json({ message: 'No credits left' });
        }

        const result = await model.generateContent(prompt);

        await Plan.update({ count: plan.count-1 }, { where: {username: req.user.username} });

        res.status(200).json( { answer: result.response.candidates[0].content.parts[0].text } );
    } catch (error) {
        console.error('Error generating content:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = {
    prompt
};

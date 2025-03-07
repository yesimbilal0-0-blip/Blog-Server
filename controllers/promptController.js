const { GoogleGenerativeAI } = require('@google/generative-ai');
const asyncHandler = require('express-async-handler');
const { head } = require('../routes/blogRoutes');
const Blog = require('../models/blogModel');
const Plan = require('../models/planModel');

const prompt = asyncHandler(async (req, res) => {
    try {
        const { prompt } = req.body; //Get the Prompt from the request body

        //Model Initialization
        const AI = new GoogleGenerativeAI(`${process.env.GEMINI_API_KEY}`);
        const model = AI.getGenerativeModel({ model: "gemini-1.5-flash-001-tuning" });

        //Checking if the user has an active plan
        const plan = await Plan.findOne({ user: req.user.username });
        if(!plan) {
            return res.status(400).json({ message: 'No active plan found' });
        }

        //Checking if the user has any credits left
        if(plan.count <= 0) {
            return res.status(400).json({ message: 'No credits left' });
        }

        //Generating Content requested in the Prompt
        const result = await model.generateContent(prompt);

        //Decrementing 1 from the prompt count
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

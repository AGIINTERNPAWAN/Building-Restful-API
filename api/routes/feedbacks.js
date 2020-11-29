const express = require('express');
const router = express.Router();
const Feedback = require('../model/feedback');

router.get('/', async(req,res) =>{
    try{
        const feedbacks = await Feedback.find();
        res.status(200).json(feedbacks)
    } catch(e){
        res.send('Error'+ e);

    }
});
module.exports = router;

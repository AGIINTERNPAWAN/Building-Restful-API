const express = require('express');
const router = express.Router();
const Feedback = require('../model/feedback');

// router.get('/', async(req,res) =>{
//     try{
//         const feedbacks = await Feedback.find();
//         res.status(200).json(feedbacks)
//     } catch(e){
//         res.send('Error'+ e);
//     }
// });

exports.create = (req,res) =>{
    const feedback = new Feedback({
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        description: req.body.description
    });
    // try {
    //     const f1 = await feedback.save();
    //     res.status(200).json(f1)
    // }catch(e){
    //     res.send('Error'+ e);
    // }
    feedback.save()
            .then(data => {
                res.send(data);
                }).catch(err => {
                res.status(500).send({
                message: err.message || "Error occured while creating the carpet Data"
                });
            });
}
        exports.findAll = (req, res) => {
            Feedback.find()
            .then(data => {
                res.send(data);
            }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Data."
            });
            });
        };
// module.exports = router;

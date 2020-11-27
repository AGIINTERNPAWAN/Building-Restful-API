const express = require('express');
const router = express.Router();

router.get('/', (req,res,next) => {
    res.status(200).json({
        "user": "pawan",
        "emai": "pawan@agiinfotech.com",
        "description":"Test Content" 
    })
})
module.exports = router
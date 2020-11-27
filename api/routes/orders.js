const express = require( 'express');

const router = express.Router();

router.get('/', (req,res,next)=>{
    res.status(200).json({
        message: "Total Orders"
    })
})

router.post('/', (req,res,next)=>{
    res.status(200).json({
        message: "Made Order"
    })
})
router.patch('/:orderID', (req,res,next)=>{
    res.status(200).json({
        message: "Order updated",
        orderID: req.params.orderID,
    })
})

router.delete('/:orderID', (req,res,next)=>{
    res.status(200).json({
        message: "Order deleted ",
        orderID: req.params.orderID,
    })
})

module.exports = router;
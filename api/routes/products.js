const express = require('express');
const router = express.Router();

router.get('/', (req,res,next) => {
    res.status(200).json({
        message: 'this is get method in products',
    })
})
router.post('/', (req,res,next) => {
    res.status(200).json({
        message: 'this is post method in products',
    })
})

router.get('/:productID', (req,res,next) => {
    const id = req.params.productID;
    if (id === 'jacket'){
        res.status(200).json({
            id: id,
            "name": "Jacket",
            "price": "$150",
        })
    }
    else {
        res.status(200).json({
            message: "No Items Available"
        })
        
        }
    res.status(200).json({
        message: 'this is post method in products',
    });
});
router.patch('/:productID', (req,res,next)=>{
    res.status(200).json({
        message: "You updated the product",
    });
});

router.delete('/:productID', (req,res,next)=>{
    res.status(200).json({
        message: "You deleted the product",
    });
});

module.exports = router;
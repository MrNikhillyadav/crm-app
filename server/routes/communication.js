const express = require('express')
const router = express.Router()


router.get('/',(req,res) =>{
        
        res.json({
                message : 'all recieved messages',
        })
})
router.post('/',(req,res) =>{
        
        res.json({
                message : 'message sent',
        })
})

router.get('/:id',(req,res) =>{
        
        res.json({
            message : ' message with id',
        })
})

router.put('/:id/status',(req,res) =>{
        
        res.json({
                message : 'updated delivery status message with ID',
        })
})



module.exports = router
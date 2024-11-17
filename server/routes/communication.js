const express = require('express')
const router = express.Router()


router.get('/',(req,res) =>{
        
        res.json({
                message : 'all communication logs',
        })
})

router.get('/:id',(req,res) =>{
        
        res.json({
            message : ' detail of communication log with ID',
        })
})

router.put('/:id/status',(req,res) =>{
        
        res.json({
                message : 'updated delivery status communication log with ID',
        })
})



module.exports = router
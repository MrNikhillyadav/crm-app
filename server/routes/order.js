const express = require('express')
const router = express.Router()
const { OrderModel} = require('../db/order')

router.post('/',(req,res) =>{
        
        res.json({
                message : 'order added',
        })
})

router.get('/',(req,res) =>{
        
        res.json({
                message : 'all orders',
        })
})

router.get('/:id',(req,res) =>{
        
        res.json({
                message : ' order with ID',
        })
})

router.put('/:id',(req,res) =>{
        
        res.json({
                message : 'updated order with ID',
        })
})

router.delete('/:id',(req,res) =>{
        
        res.json({
                message : 'deleted order with ID',
        })
})

module.exports = router
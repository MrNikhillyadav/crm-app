const express = require('express')
const router = express.Router()
const { OrderModel} = require('../db/order')

router.post('/:id',async(req,res) =>{
        const {orderAmount,orderDate} = req.body
        const customerId = req.params.id
        console.log('customerId: ', customerId);
        try{    
                const customerDetail = await CustomerModel.findById(customerId)
                console.log('customerDetail: ', customerDetail);

                const order = await OrderModel.create({
                        customerId,
                        orderAmount,
                        orderDate,
                      
                })      
        }
        catch(e){

                res.json({
                        error : e
                })
        }


        res.json({
                message : "order created"
                
        })

})

router.get('/', async(req,res) =>{
        try{    
                
                const allOrders = await OrderModel.find({ })
                console.log('allOrders: ', allOrders);
                
                const customerId = allOrders.customerId
                console.log('customerId: ', customerId);

                        if(customerId){
                                const customerDetail = await CustomerModel.findById(customerId)
                                console.log('customerDetail: ', customerDetail);
                        }

                res.json({
                        message : allOrders,
                        customerId : allOrders.customerId
                        // name : name
        
                })

        }catch(e){
                res.json({
                        error : 'error'
                        })
        }
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
const express = require('express')
const router = express.Router()
const { OrderModel} = require('../db/order')
const {UserModel} = require('../db/user')

router.post('/:id',async(req,res) =>{
        const {orderAmount,orderDate} = req.body
        const customerId = req.params.id
        console.log('customerId: ', customerId);

        try{    
                const customerDetail = await UserModel.findById(customerId)
                console.log('customerDetail: ', customerDetail);
                if (!customerDetail) {
                        return res.status(404).json({ error: 'Customer not found' });
                      }

                const order = await OrderModel.create({
                        customerId,
                        orderAmount,
                        orderDate,
                      
                })    
                
                res.json({
                        message: 'Order created',
                        order,
                      });
        }
        catch (e) {

                res.status(500).json({
                        error: e.message,
                })
        }



})

router.get('/', async (req, res) => {

        try {

          const allOrders = await OrderModel.find({})
            .populate('customerId', 'name email') // Populate with `name` and `email` from Users collection
            .exec();
      
          res.json({
            message: allOrders,
          });

        } catch (e) {

                res.status(500).json({
                error: 'Error fetching orders',
                });
        }
      });

// Fetch a specific order with customer details
router.get('/:id', async (req, res) => {
        const id = req.params.id;
      
        try {
                const order = await OrderModel.findById(id)
                .populate('customerId', 'name email') // Populate with `name` and `email` from Users collection
                .exec();
        
                if (!order) {
                return res.status(404).json({ error: 'Order not found' });
                }
        
                res.json({
                message: order,
                });

        }
         catch (e) {

                res.status(500).json({
                error: 'Error fetching order',
                });
        }
      });

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
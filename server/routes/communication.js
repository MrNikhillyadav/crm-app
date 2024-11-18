const express = require('express');
const router = express.Router();
const { CommunicationLogModel } = require('../db/communication');
const { UserModel } = require('../db/user');


router.post('/:id', async (req, res) => {
  const  {message } = req.body;
  const customerId = req.params.id

        try {
        
                const customer = await UserModel.findById(customerId);
                if (!customer) {
                return res.status(404).json({ error: 'Customer not found' });
                }


                const newMessage = await CommunicationLogModel.create({
                         customerId, message 
                });

                res.status(201).json({
                         message: 'Message created successfully', 
                         data: newMessage 
                });
        }
        catch (err) {

                res.status(500).json({
                         error: 'Error creating message',
                          details: err.message 
                });
        }
});


router.get('/', async (req, res) => {

        try {

                const messages = await CommunicationLogModel.find({})
                .populate('customerId', 'name email') 
                .sort({ sentAt: -1 }); 

                res.json({ message: 'Fetched messages successfully', data: messages });
        }
         catch (err) {

                res.status(500).json({ 
                        error: 'Error fetching messages', 
                        details: err.message 
                });

        }
});

router.get('/:id', async (req, res) => {
        const { id } = req.params;

        try {
                const message = await CommunicationLogModel.findById(id).
                populate('customerId', 'name email')
                .exec();

                if (!message) {

                        return res.status(404).json({
                                error: 'Message not found'
                 });
        }

                res.json({
                         message: 'Fetched message successfully', 
                         data: message
                 });
        } 
        catch (err) {

                res.status(500).json({ 
                        
                        error: 'Error fetching message',
                         details: err.message 
                });
        }
});

module.exports = router;

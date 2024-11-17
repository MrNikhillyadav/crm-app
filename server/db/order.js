const mongoose = require('mongoose');
const {ObjectId} = mongoose.Types

const orderSchema = new mongoose.Schema({
  customerId: {
    type: ObjectId,
    ref: 'Users',
    required: true
  },
  orderAmount: {
    type: Number,
    required: true
  },
  orderDate: {
    type: Date,
    default: Date.now 
  },
  
});

const OrderModel =  mongoose.model('Order', orderSchema);

module.exports = {
      OrderModel
}
const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types

const communicationsLogSchema = new mongoose.Schema({
  customerId: {
    type: ObjectId,
    ref: 'Customer', 
    required: true
  },
  message: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['SENT', 'FAILED'], 
    default: 'SENT' 
  },
  sentAt: {
    type: Date,
    default: Date.now 
  }
});

const CommunicationLogModel =  mongoose.model('CommunicationsLog', communicationsLogSchema);

module.exports = {
  CommunicationLogModel
}
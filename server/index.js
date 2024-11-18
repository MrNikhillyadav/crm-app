require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const userRouter = require('./routes/user')
const adminRouter = require('./routes/admin')
const orderRouter = require('./routes/order')
const communicationRouter = require('./routes/communication')
const authMiddleware = require('./middlewares/authMiddleware')



const app = express()
app.use(cors())
app.use(express.json())

console.log(process.env.MONGO_URL)

mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log('connected to Db'))

app.get('/',(req,res)=>{
          res.send('hello world')
})

app.use('/user/',userRouter)
app.use('/order', orderRouter)
app.use('/communication', communicationRouter)

app.listen(process.env.PORT,()=>{
            console.log(`listening at port ${process.env.PORT} `)
})
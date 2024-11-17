const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const userRouter = require('./routes/user')
const adminRouter = require('./routes/admin')
const orderRouter = require('./routes/order')
const communicationRouter = require('./routes/communication')
const authMiddleware = require('./middlewares/authMiddleware')

const PORT =  5000
const app = express()
app.use(cors())
app.use(express.json())


mongoose.connect('mongodb://localhost:27017/Xeno-CRM')
.then(()=> console.log('connected to Db'))


app.use('/admin/', adminRouter)

app.use('/user/',authMiddleware,userRouter)
app.use('/order',authMiddleware, orderRouter)
app.use('/communication',authMiddleware, communicationRouter)

app.listen(PORT,()=>{
            console.log(`listening at port ${PORT} `)
})
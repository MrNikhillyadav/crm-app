const express = require('express')
const router = express.Router()
const { AdminModel} = require('../db/admin')
const {z} = require('zod')
const authMiddleware = require('../middlewares/authMiddleware')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
require('dotenv').config();


router.get('/', authMiddleware, async(req,res) =>{
    const adminId = req.userId
    console.log('adminId: ', adminId);
    try{
        const admin = await AdminModel.findOne({
            _id : adminId
        })

        res.json({
            message : admin
        })
    }catch(e){
        res.status(500).json({  
            message : "error"
            })
    }

    
})


router.post('/signup',async(req,res) =>{
    const userBody = z.object({
        username: z.string().min(4).max(20),
        email : z.string().email(),
        password : z.string().min(4).max(8),
    })


    const parsedDataWithSuccess = userBody.safeParse(req.body);

    if(!parsedDataWithSuccess.success){
        
        res.json({
            message : "Invalid format",
            error : parsedDataWithSuccess.error
        })

        return
    }
    console.log(req.body)

      const {username,email,password} = req.body;
  
      try{
                const hashedPassword=  await bcrypt.hash(password,5)

                const user = await AdminModel.create({
                username : username,
                email : email,
                password : hashedPassword
                })
                
                res.json({
                message : "sign up successfully",
                username : username,
                email : email,
                password : user.password
                })
        }
        catch(e){

                message : "error"
        }

})

router.post('/login',async(req,res) =>{
      const{email,password} = req.body;

            const user = await AdminModel.findOne({
                email : email,
            })

            const passwordMatch = await bcrypt.compare(password,user.password)

            if(passwordMatch){
                const token = await jwt.sign({
                   userId: user._id.toString()
                },process.env.ADMIN_SECRET)


                res.json({
                    message : "login successfully",
                    token : token
                })

            }else{
                res.json({ message : "invalid email or password"})
            }

})





module.exports = router
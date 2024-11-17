const express = require('express')
const router = express.Router()
const { UserModel} = require('../db/user')


router.post('/', async(req,res) =>{
        const {name,email,totalSpending,visits,lastVisit} = req.body

        try{
                const user = await UserModel.create({
                        name,
                        email,
                        totalSpending,
                        visits,
                        lastVisit
                })      
        }
        catch(e){

                res.json({
                        error : 'error'
                })
        }


        res.json({
                message : "customer created"
        })

       
   
})

router.get('/', async(req,res) =>{

        try{
                const allUsers = await UserModel.find({ })

                res.json({
                        message : allUsers,
        
                })

        }catch(e){
                res.json({
                        error : 'error'
                        })
        }
     
      
   
})


router.get('/:id',async (req,res) =>{
        const id = req.params.id

        try{
                const allUsers = await UserModel.findOne({
                        _id : id
                 })

                res.json({
                        message : allUsers,
        
                })

        }catch(e){
                res.json({
                        error : 'error'
                        })
        }
   
})

router.put('/:id',async(req,res) =>{
        
        const id = req.params.id

        try{
                const updatedUser = await UserModel.findOneAndUpdate({
                        _id : id
                 },{
                        email : req.body.email
                 })

                res.json({
                        message : updatedUser,
        
                })

        }catch(e){
                res.json({
                        error : 'error'
                        })
        }

   
})

router.delete('/:id',async(req,res) =>{
        const id = req.params.id

        try{
                const deletedUser = await UserModel.findOneAndDelete({
                        _id : id
                 },{
                        email : req.body.email
                 })

                res.json({
                        message : deletedUser,
        
                })

        }catch(e){
                res.json({
                        error : 'error'
                        })
        }
   
})



module.exports = router
require('dotenv').config()
const jwt = require('jsonwebtoken')

async function authMiddleware(req,res,next){
      const token = req.headers.token;

      const decodedDataPayload = await jwt.verify(token,process.env.ADMIN_SECRET )
      console.log('decodedDataPayload: ', decodedDataPayload);

      if(decodedDataPayload){
            req.userId = decodedDataPayload.userId
      }

      next()
    
}


module.exports = authMiddleware
const User = require('../models/user');
const jwt = require('jwt-simple');
const user = async (req, res, next) => {
      const {email, firstName, lastName, password} = req.body;
      const userCreate = await User.create({
         email,
         firstName,
         lastName,
         password,
      })
      
      res.status(201).json({
         success: true,
         data: userCreate
      })
   }

const login = async (req, res, next) => {
   const {email, password} = req.body;
   const user = await User.findOne({email});
   if(!user){
      return res.status(401).json({
         success: false,
         data: "Email or password invalid"
      })
   }
   if(user.password !== password){
      return res.status(401).json({
         success: false,
         data: "Email or password invalid"
      })
   }
   const payload = {

   }
   const token = jwt.encode(payload, '12345')
   return res.status(200).json({
      success: true,
      token,
      data: user
   })
}
const checkAuth = (req, res, next) => {
   if(req.headers && req.headers.authorization) {
     const token = req.headers.authorization.split(" ")[1];
     if(!token){
       return res.status(401).json({
         success: false,
         data: "Unauthorized. Token is invalid"
       });
     }
     const payload = jwt.decode(token, '12345');
     if(!payload){
       return res.status(401).json({
         success: false,
         data: "Unauthorized. Token is invalid"
       });
     }
     next();
   } else {
     return res.status(401).json({
       success: false,
       data: "Unauthorized. No Authorization header"
     });
   }
 };


module.exports = {user, login, checkAuth};

import User from '../model/userSchema.js';

export const userSignup=async(req,res)=>{
    try{
         const user = req.body;
         console.log('user is',user);
         const newUser = new User(user);
         await newUser.save();
         res.status(200).json(newUser);
         
    }catch(err){
        res.status(500).json({message:err.message});
    }

}
export const userLogin=async(req,res)=>{
    try{
         const username = req.body.username;
         const password = req.body.password;
         
         let user = await User.findOne({username:username,password:password})
         if(user)
            res.status(200).json({message:'login successful'})
         else
            res.status(401).json({message:'Invalid Login'})

    }catch(err){
          res.status(500).json({message:err.message});
    }  

}
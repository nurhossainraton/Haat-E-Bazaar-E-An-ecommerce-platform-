
import User from '../model/userSchema.js';
import bcrypt from 'bcrypt'


const hashPassword = async (password) => {
    const saltRounds = 10; // You can adjust the salt rounds for more/less security
    try {
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    } catch (error) {
        console.error('Error hashing password:', error);
        throw error;
    }
};

export const userSignup=async(req,res)=>{
    try{
         const user = req.body;
         console.log('user is',user);
         const password = user.password;
         console.log('password is' + password)
         const hashedPassword = await hashPassword(password);
         console.log(hashedPassword);

         user.password=hashedPassword;
         const newUser = new User(user);
         await newUser.save();
         res.status(200).json(newUser);
         
    }catch(err){
        res.status(500).json({message:err.message});
    }

}
export const userLogin = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Find the user by their username
        let user = await User.findOne({ username: username });
        
        if (user) {
            // Compare the provided password with the hashed password in the database
            const isPasswordValid = await bcrypt.compare(password, user.password);

            if (isPasswordValid) {
                // If the password is correct, send a success response
                res.status(200).json({ message: 'Login successful' });
            } else {
                // If the password is incorrect, send an unauthorized response
                res.status(401).json({ message: 'Invalid Login' });
            }
        } else {
            // If the user is not found, send an unauthorized response
            res.status(401).json({ message: 'Invalid Login' });
        }
    } catch (err) {
        // Handle any errors that occur during the login process
        res.status(500).json({ message: err.message });
    }
};
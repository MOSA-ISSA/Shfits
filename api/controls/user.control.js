const userModule = require("../modules/user.moduls");
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const secretKey = crypto.randomBytes(32).toString('hex');
// const secretKey = process.env.JWT_SECRET;


const creatNewUser = async (req, res) => {
    const {ID,mail,password,userName}=req.body
    try{

      const newUser = await userModule.create({
        ID,
        mail,
        password,
        userName,
      });

      const token = jwt.sign(
        { userID: newUser.ID, userName: newUser.userName },
        secretKey,
        // { expiresIn: '1h' }
      );

      res.status(200).json({
        message: 'User created successfully',
        user: {
          userID: newUser.ID,
          userName: newUser.userName,
          // Add any other user information you want to include in the response
        },
        token,
      });

    }
    catch(e){
      res.status(404).json({message:e.message})
    }
  }

  
const loginUser = async (req, res) => {
  const { mail, password } = req.body;

  try {
    // Validate user credentials (this is a simple example, you should hash and compare passwords securely)
    const user = await userModule.findOne({ mail, password });

    if (!user) {
      // If credentials are invalid, return an error
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate a JWT with user information
    const token = jwt.sign(
      { userID: user.ID, userName: user.userName },
      secretKey,
      // { expiresIn: '1h' }
    );

    // Respond with the JWT and user information
    res.status(200).json({
      message: 'Login successful',
      user: {
        userID: user.ID,
        userName: user.userName,
        // Add any other user information you want to include in the response
      },
      token,
    });
  } catch (e) {
    // Handle errors
    res.status(500).json({ message: e.message });
    console.error(e.message);
  }
};

  module.exports={
    creatNewUser,
    loginUser,
  }
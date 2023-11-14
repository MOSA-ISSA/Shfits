const userModule = require("../modules/user.moduls");

const creatNewUser = async (req, res) => {
    const {ID,mail,password,userName}=req.body
    try{
      userModule.create({
        ID,
        mail,
        password,
        userName,
      }).then((response) => {
        res.status(200).json({
          message: "done",
          ...req.body
        });
      }).catch(e=>{
        res.status(500).json({message:e.message})
        console.log(e.message);
      });
    }
    catch(e){
      res.status(404).json({message:e.message})
    }
  }

  module.exports={
    creatNewUser,
  }
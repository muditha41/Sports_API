const models = require("../models");
const bcryptjs = require("bcryptjs");
const jwt = require('jsonwebtoken');
const validator = require("fastest-validator");


require("dotenv").config();

function signUp(req,res){

    models.User.findOne({where:{email:req.body.email}}).then(result=>{
        if(result){
            res.status(409).json({
                message:"Email alreday exists!"
            });
        }else{
            bcryptjs.genSalt(10,function(err, salt){
                bcryptjs.hash(req.body.password, salt, function(err,hash){
        
                    const user ={
                        name: req.body.name,
                        email: req.body.email,
                        password: hash,
                        userType: req.body.userType,
                    }

                    //validation
                     const schema = {
                     name:{type:"string", Optional:false},
                     email:{type:"string", Optional:false},
                     password:{type:"string", Optional:false},
                                    }

                     const v = new validator();
                    const validationResponce = v.validate(user,schema);
                    if(validationResponce!==true){
                    return res.status(400).json({
                         message:"validation failed",
                         errors:validationResponce
                        });
                 }else{
                models.User.create(user).then(result=>{
                    res.status(201).json({
                        message:"Registraion Successfully"
                    })
            
                }).catch(error=>{
                    res.status(500).json({
                        message:"Somthing went wrong!"
                    })
                });
            }    
                });
            });
        }
    }).catch(error=>{
        res.status(500).json({
            message:"Somthing went wrong!"
        })
    });   
}

function login(req,res){

    models.User.findOne({where:{email:req.body.email}}).then(user=>{
        if(user===null){
            res.status(401).json({
                message:"invalid credentials!"
            })
        }else{
            bcryptjs.compare(req.body.password,user.password, function(error,result){
                if(result){
                    const token = jwt.sign({
                        email:user.email,
                        userId: user.id
                    }, process.env.JWT_SECRET,function(error,token){

                        res.status(200).json({
                            message:"Authentication Successfully",
                            token:token,
                        })
                    });
                }else{
                    res.status(401).json({
                        message:"invalid credentials!"
                    })
                }
            });
        }

    }).catch(error=>{
        res.status(500).json({
            message:"Somthing went wrong!"
        })
    });
}

function getAllUsers(req,res){

    models.User.findAll().then(result =>{
        res.status(200).json(result);
    }).catch(error=>{
      res.status(500).json({
      message:"somthing went wrong!"
    })
    });

}



module.exports = {
    signUp:signUp,
    login:login,
    getAllUsers:getAllUsers
}
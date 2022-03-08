const res = require("express/lib/response");
const models = require("../models");
const validator = require("fastest-validator");

function addNewPost(req,res){
    const post = {
        title: req.body.title,
        content:req.body.content,
        imageUrl:req.body.image_Url,
        teamId:req.body.team_Id,
        userId:1
    }

    //validation
    const schema = {
        title:{type:"string", Optional:false, max:"100"},
        content:{type:"string", Optional:false, max:"500"},
        teamId:{type:"number", Optional:false},
    }

    const v = new validator();
    const validationResponce = v.validate(post,schema);

    if(validationResponce!==true){
    return res.status(400).json({
        message:"validation failed",
        errors:validationResponce
    });
    }else{

        models.Team.findByPk(req.body.team_Id).then(result=>{
            if(result!==null){
                models.Post.create(post).then(result =>{
                    res.status(201).json({
                        message: "Post Created Successfully",
                        post:result
                    });
                    }).catch(err =>{
                        res.status(500).json({
                            message: "Something went wrong",
                            error:err
                        });
                });
            }else{
                res.status(400).json({
                    message: "Invalid Category",
                });
            }
        });
   
    }

}

function getPosts(req,res){

    models.Post.findAll().then(result =>{
        res.status(200).json(result);
    }).catch(error=>{
      res.status(500).json({
      message:"somthing went wrong!"
    })
    });

}

function getPostById(req,res){
    const id= req.params.id;

    models.Post.findByPk(id).then(result =>{
        if(result){
            res.status(200).json(result);
        }else{
            res.status(404).json({
                message:"record not found!"
        });
    }
    }).catch(error=>{
      res.status(500).json({
      message:"somthing went wrong!"
    })
    });

}

function updatePost(req,res){
    const id= req.params.id;

    const updatedPost ={
        title: req.body.title,
        content: req.body.content,
        imageUrl: req.body.image_Url,
        teamId: req.body.team_Id,
    }
    const userId = 1;

    //validation
    const schema = {
        title:{type:"string", Optional:false, max:"100"},
        content:{type:"string", Optional:false, max:"500"},
        teamId:{type:"number", Optional:false},
    }

    const v = new validator();
    const validationResponce = v.validate(updatedPost,schema);

    if(validationResponce!==true){
    return res.status(400).json({
        message:"validation failed",
        errors:validationResponce
    });
    }else{

        models.Post.update(updatedPost,{where:{id:id, userId:userId}}).then(result =>{
            res.status(200).json({
                message:"Post updated successfully",
                post:updatedPost
            });
           }).catch(error =>{
               res.status(500).json({
                   message:"somthing went wrong!",
                   error:error
               });
           });
    }


}

function deletePost(req,res){
    const id= req.params.id;
    const userId = 1;

    models.Post.destroy({where:{id:id, userId:userId}}).then(result =>{
        if(result){
            res.status(200).json({
                message:"Post deleted successfully"
            });
        }else{
            res.status(404).json({
                message:"record not found!"
        });
    }    
    }).catch(error =>{
        res.status(500).json({
            message:"somthing went wrong!",
            error:error
        })
    });
}


module.exports = {
    getPostById:getPostById,
    addNewPost:addNewPost,
    getPosts:getPosts,
    updatePost:updatePost,
    deletePost:deletePost

}

const models = require("../models");
const validator = require("fastest-validator");

function addNewPlayer(req,res){
    const player = {
        jersey_no: req.body.jersey_no,
        first_name:req.body.first_name,
        second_name:req.body.second_name,
        age:req.body.age,
        height:req.body.height,
        weight:req.body.weight,
        image:req.body.image,
        teamId:req.body.teamId
    }

    //validation
    const schema = {
        first_name:{type:"string", Optional:false},
        second_name:{type:"string", Optional:false},
    }

    const v = new validator();
    const validationResponce = v.validate(player,schema);

    if(validationResponce!==true){
    return res.status(400).json({
        message:"validation failed",
        errors:validationResponce
    });
    }else{
                models.Player.create(player).then(result =>{
                    res.status(201).json({
                        message: "Player Created Successfully",
                        player:result
                    });
                    }).catch(err =>{
                        res.status(500).json({
                            message: "Something went wrong",
                            error:err
                        });
                });
    }

}

function getPlayers(req,res){

    models.Player.findAll().then(result =>{
        res.status(200).json(result);
    }).catch(error=>{
      res.status(500).json({
      message:"somthing went wrong!"
    })
    });

}

function getPlayerById(req,res){
    const id= req.params.id;

    models.Player.findByPk(id).then(result =>{
        if(result){
            res.status(200).json(result);
        }else{
            res.status(404).json({
                message:"Player not found!"
        });
    }
    }).catch(error=>{
      res.status(500).json({
      message:"somthing went wrong!"
    })
    });

}

function updatePlayer(req,res){
    const id= req.params.id;

    const updatedPlayer ={
        jersey_no: req.body.jersey_no,
        first_name:req.body.first_name,
        second_name:req.body.second_name,
        age:req.body.age,
        height:req.body.height,
        weight:req.body.weight,
        image:req.body.image,
        teamId:req.body.teamId
    }

    //validation
    const schema = {
        first_name:{type:"string", Optional:false},
        second_name:{type:"string", Optional:false},
    }

    const v = new validator();
    const validationResponce = v.validate(updatedPlayer,schema);

    if(validationResponce!==true){
    return res.status(400).json({
        message:"validation failed",
        errors:validationResponce
    });
    }else{

        models.Player.update(updatedPlayer,{where:{id:id}}).then(result =>{
            res.status(200).json({
                message:"Player updated successfully",
                player:updatedPlayer
            });
           }).catch(error =>{
               res.status(500).json({
                   message:"somthing went wrong!",
                   error:error
               });
           });
    }


}

function deletePlayer(req,res){
    const id= req.params.id;

    models.Player.destroy({where:{id:id}}).then(result =>{
        if(result){
            res.status(200).json({
                message:"Player deleted successfully"
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
    addNewPlayer:addNewPlayer,
    getPlayers:getPlayers,
    getPlayerById:getPlayerById,
    updatePlayer:updatePlayer,
    deletePlayer:deletePlayer

}
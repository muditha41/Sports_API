
const models = require("../models");
const validator = require("fastest-validator");

function addNewTeam(req,res){
    const team = {
        full_name: req.body.full_name,
        short_name:req.body.short_name,
        color:req.body.color,
        logo:req.body.logo
    }

    //validation
    const schema = {
        full_name:{type:"string", Optional:false, max:"300"},
        short_name:{type:"string", Optional:false, max:"20"},
    }

    const v = new validator();
    const validationResponce = v.validate(team,schema);

    if(validationResponce!==true){
    return res.status(400).json({
        message:"validation failed",
        errors:validationResponce
    });
    }else{
                models.Team.create(team).then(result =>{
                    res.status(201).json({
                        message: "Team Created Successfully",
                        team:result
                    });
                    }).catch(err =>{
                        res.status(500).json({
                            message: "Something went wrong",
                            error:err
                        });
                });
    }

}

function getTeams(req,res){

    models.Team.findAll().then(result =>{
        res.status(200).json(result);
    }).catch(error=>{
      res.status(500).json({
      message:"somthing went wrong!"
    })
    });

}

function getTeamById(req,res){
    const id= req.params.id;

    models.Team.findByPk(id).then(result =>{
        if(result){
            res.status(200).json(result);
        }else{
            res.status(404).json({
                message:"Team not found!"
        });
    }
    }).catch(error=>{
      res.status(500).json({
      message:"somthing went wrong!"
    })
    });

}

function updateTeam(req,res){
    const id= req.params.id;

    const updatedTeam ={
        full_name: req.body.full_name,
        short_name:req.body.short_name,
        color:req.body.color,
        logo:req.body.logo
    }

    //validation
    const schema = {
        full_name:{type:"string", Optional:false, max:"300"},
        short_name:{type:"string", Optional:false, max:"20"},
    }

    const v = new validator();
    const validationResponce = v.validate(updatedTeam,schema);

    if(validationResponce!==true){
    return res.status(400).json({
        message:"validation failed",
        errors:validationResponce
    });
    }else{

        models.Team.update(updatedTeam,{where:{id:id}}).then(result =>{
            res.status(200).json({
                message:"Team updated successfully",
                team:updatedTeam
            });
           }).catch(error =>{
               res.status(500).json({
                   message:"somthing went wrong!",
                   error:error
               });
           });
    }


}

function deleteTeam(req,res){
    const id= req.params.id;

    models.Team.destroy({where:{id:id}}).then(result =>{
        if(result){
            res.status(200).json({
                message:"Team deleted successfully"
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
    addNewTeam:addNewTeam,
    getTeams:getTeams,
    getTeamById:getTeamById,
    updateTeam:updateTeam,
    deleteTeam:deleteTeam

}
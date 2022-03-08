
const models = require("../models");
const validator = require("fastest-validator");

function addNewTeamCard(req,res){
    const teamCard = {
     matchId: req.body.match_id,
    matchName: req.body.match_name,
    teamId: req.body.team_id,
    teamName: req.body.team_name,
    logo: req.body.logo,
    p1: req.body.p1,
    p2: req.body.p2,
    p3: req.body.p3,
    p4: req.body.p4,
    p5: req.body.p5,
    p6: req.body.p6,
    p7: req.body.p7,
    p8: req.body.p8,
    p9: req.body.p9,
    p10: req.body.p10,
    p11: req.body.p11,
    p12: req.body.p12,
    p13: req.body.p13,
    p14: req.body.p14,
    p15: req.body.p15,
    p16: req.body.p16,
    p17: req.body.p17,
    p18: req.body.p18,
    p19: req.body.p19,
    p20: req.body.p20,
    p21: req.body.p21,
    p22: req.body.p22,
    p23: req.body.p23,
    p24: req.body.p24,
    }

    //validation
    const schema = {
        matchId:{type:"number", Optional:false, max:"10"},
        matchName:{type:"string", Optional:false, max:"200"},
        teamId:{type:"number", Optional:false, max:"10"},
        teamName:{type:"string", Optional:false, max:"100"},
    }

    const v = new validator();
    const validationResponce = v.validate(teamCard,schema);

    if(validationResponce!==true){
    return res.status(400).json({
        message:"validation failed",
        errors:validationResponce
    });
    }else{
                models.TeamCard.create(teamCard).then(result =>{
                    res.status(201).json({
                        message: "TeamCard Created Successfully",
                        teamCard:result
                    });
                    }).catch(err =>{
                        res.status(500).json({
                            message: "Something went wrong",
                            error:err
                        });
                });
    }

}

function getTeamCards(req,res){

    models.TeamCard.findAll().then(result =>{
        res.status(200).json(result);
    }).catch(error=>{
      res.status(500).json({
      message:"somthing went wrong!"
    })
    });

}

function getTeamCardById(req,res){
    const id= req.params.id;

    models.TeamCard.findByPk(id).then(result =>{
        if(result){
            res.status(200).json(result);
        }else{
            res.status(404).json({
                message:"TeamCard not found!"
        });
    }
    }).catch(error=>{
      res.status(500).json({
      message:"somthing went wrong!"
    })
    });

}

function updateTeamCard(req,res){
    const id= req.params.id;

    const updatedTeamCard={
        matchId: req.body.match_id,
        matchName: req.body.match_name,
        teamId: req.body.team_id,
        teamName: req.body.team_name,
        logo: req.body.logo,
        p1: req.body.p1,
        p2: req.body.p2,
        p3: req.body.p3,
        p4: req.body.p4,
        p5: req.body.p5,
        p6: req.body.p6,
        p7: req.body.p7,
        p8: req.body.p8,
        p9: req.body.p9,
        p10: req.body.p10,
        p11: req.body.p11,
        p12: req.body.p12,
        p13: req.body.p13,
        p14: req.body.p14,
        p15: req.body.p15,
        p16: req.body.p16,
        p17: req.body.p17,
        p18: req.body.p18,
        p19: req.body.p19,
        p20: req.body.p20,
        p21: req.body.p21,
        p22: req.body.p22,
        p23: req.body.p23,
        p24: req.body.p24,
    }

    //validation
    const schema = {
        matchId:{type:"number", Optional:false, max:"10"},
        matchName:{type:"string", Optional:false, max:"200"},
        teamId:{type:"number", Optional:false, max:"10"},
        teamName:{type:"string", Optional:false, max:"100"},
    }

    const v = new validator();
    const validationResponce = v.validate(updatedTeamCard,schema);

    if(validationResponce!==true){
    return res.status(400).json({
        message:"validation failed",
        errors:validationResponce
    });
    }else{

        models.TeamCard.update(updatedTeamCard,{where:{id:id}}).then(result =>{
            res.status(200).json({
                message:"TeamCard updated successfully",
                teamCard:updatedTeamCard
            });
           }).catch(error =>{
               res.status(500).json({
                   message:"somthing went wrong!",
                   error:error
               });
           });
    }


}

function deleteTeamCard(req,res){
    const id= req.params.id;

    models.TeamCard.destroy({where:{id:id}}).then(result =>{
        if(result){
            res.status(200).json({
                message:"TeamCard deleted successfully"
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
    addNewTeamCard:addNewTeamCard,
    getTeamCards:getTeamCards,
    getTeamCardById:getTeamCardById,
    updateTeamCard:updateTeamCard,
    deleteTeamCard:deleteTeamCard

}
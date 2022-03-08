
const models = require("../models");
const validator = require("fastest-validator");

function addNewMatch(req,res){
    const match = {
    tournamentId: req.body.tournament_id,
    tournamentName: req.body.tournament_name,
    matchNo:req.body.match_no,
    tournametLogo:req.body.tournamet_logo,
    matchTitle:req.body.match_title,
    homeTeam:req.body.home_team,
    visitorTeam: req.body.visitor_team,
    date:req.body.date,
    time:req.body.time,
    venue:req.body.venue,
    homeTeamCardId:req.body.home_team_card_id,
    visitorTeamCardId:req.body.visitor_team_card_id,
    }

    //validation
    const schema = {
        tournamentName:{type:"string", Optional:false, max:"300"},
        matchTitle:{type:"string", Optional:false},
        homeTeam:{type:"string", Optional:false, max:"100"},
        visitorTeam:{type:"string", Optional:false, max:"100"},
    }

    const v = new validator();
    const validationResponce = v.validate(match,schema);

    if(validationResponce!==true){
    return res.status(400).json({
        message:"validation failed",
        errors:validationResponce
    });
    }else{
                models.Match.create(match).then(result =>{
                    res.status(201).json({
                        message: "Match Created Successfully",
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

function getMatches(req,res){

    models.Match.findAll().then(result =>{
        res.status(200).json(result);
    }).catch(error=>{
      res.status(500).json({
      message:"somthing went wrong!"
    })
    });

}

function getMatchById(req,res){
    const id= req.params.id;

    models.Match.findByPk(id).then(result =>{
        if(result){
            res.status(200).json(result);
        }else{
            res.status(404).json({
                message:"Match not found!"
        });
    }
    }).catch(error=>{
      res.status(500).json({
      message:"somthing went wrong!"
    })
    });

}

function updateMatch(req,res){
    const id= req.params.id;

    const updatedMatch ={
    tournamentId: req.body.tournament_id,
    tournamentName: req.body.tournament_name,
    matchNo:req.body.match_no,
    tournametLogo:req.body.tournamet_logo,
    matchTitle:req.body.match_title,
    homeTeam:req.body.home_team,
    visitorTeam: req.body.visitor_team,
    date:req.body.date,
    time:req.body.time,
    venue:req.body.venue,
    homeTeamCardId:req.body.home_team_card_id,
    visitorTeamCardId:req.body.visitor_team_card_id,
    }

    //validation
    const schema = {
        tournamentName:{type:"string", Optional:false, max:"300"},
        matchTitle:{type:"string", Optional:false},
        homeTeam:{type:"string", Optional:false, max:"100"},
        visitorTeam:{type:"string", Optional:false, max:"100"},
    }

    const v = new validator();
    const validationResponce = v.validate(updatedMatch,schema);

    if(validationResponce!==true){
    return res.status(400).json({
        message:"validation failed",
        errors:validationResponce
    });
    }else{

        models.Match.update(updatedMatch,{where:{id:id}}).then(result =>{
            res.status(200).json({
                message:"Match updated successfully",
                team:updatedMatch
            });
           }).catch(error =>{
               res.status(500).json({
                   message:"somthing went wrong!",
                   error:error
               });
           });
    }


}

function deleteMatch(req,res){
    const id= req.params.id;

    models.Match.destroy({where:{id:id}}).then(result =>{
        if(result){
            res.status(200).json({
                message:"Match deleted successfully"
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
    addNewMatch:addNewMatch,
    getMatches:getMatches,
    getMatchById:getMatchById,
    updateMatch:updateMatch,
    deleteMatch:deleteMatch

}
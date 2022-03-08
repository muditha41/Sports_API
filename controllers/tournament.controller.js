
const models = require("../models");
const validator = require("fastest-validator");

function addNewTournament(req,res){
    const tournament = {
     
    tournament_name: req.body.tournament_name,
    year:req.body.year,
    logo:req.body.logo
    }

    //validation
    const schema = {
        tournament_name:{type:"string", Optional:false, max:"500"},
        year:{type:"string", Optional:false, max:"10"},
    }

    const v = new validator();
    const validationResponce = v.validate(tournament,schema);

    if(validationResponce!==true){
    return res.status(400).json({
        message:"validation failed",
        errors:validationResponce
    });
    }else{
                models.Tournament.create(tournament).then(result =>{
                    res.status(201).json({
                        message: "Tournament Created Successfully",
                        tournament:result
                    });
                    }).catch(err =>{
                        res.status(500).json({
                            message: "Something went wrong",
                            error:err
                        });
                });
    }

}

function getTournaments(req,res){

    models.Tournament.findAll().then(result =>{
        res.status(200).json(result);
    }).catch(error=>{
      res.status(500).json({
      message:"somthing went wrong!"
    })
    });

}

function getTournamentById(req,res){
    const id= req.params.id;

    models.Tournament.findByPk(id).then(result =>{
        if(result){
            res.status(200).json(result);
        }else{
            res.status(404).json({
                message:"Tournament not found!"
        });
    }
    }).catch(error=>{
      res.status(500).json({
      message:"somthing went wrong!"
    })
    });

}

function updateTournament(req,res){
    const id= req.params.id;

    const updatedTournament ={
        tournament_name: req.body.tournament_name,
    year:req.body.year,
    logo:req.body.logo
    }

    //validation
    const schema = {
        full_name:{type:"string", Optional:false, max:"300"},
        short_name:{type:"string", Optional:false, max:"20"},
    }

    const v = new validator();
    const validationResponce = v.validate(updatedTournament,schema);

    if(validationResponce!==true){
    return res.status(400).json({
        message:"validation failed",
        errors:validationResponce
    });
    }else{

        models.Tournament.update(updatedTournament,{where:{id:id}}).then(result =>{
            res.status(200).json({
                message:"Tournament updated successfully",
                tournament:updatedTournament
            });
           }).catch(error =>{
               res.status(500).json({
                   message:"somthing went wrong!",
                   error:error
               });
           });
    }


}

function deleteTournament(req,res){
    const id= req.params.id;

    models.Tournament.destroy({where:{id:id}}).then(result =>{
        if(result){
            res.status(200).json({
                message:"Tournament deleted successfully"
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
    addNewTournament:addNewTournament,
    getTournaments:getTournaments,
    getTournamentById:getTournamentById,
    updateTournament:updateTournament,
    deleteTournament:deleteTournament

}
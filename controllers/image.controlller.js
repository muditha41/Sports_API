function upload(req,res){
    if(req.file.filename){
        res.status(201).json({
            message: "Image Upload Successfully",
            url: req.file.filename
        });

    }else{
        res.status(500).json({
            message: "File upload fail"
        });
    }

}

module.exports = {
    upload:upload
}
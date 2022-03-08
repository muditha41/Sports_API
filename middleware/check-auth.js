const jwt = require('jsonwebtoken');
require("dotenv").config();


function checkAuth(req,res,next){
try {
    const token = req.headers.authorization.split(" ")[1]; 
    const decodeToeken = jwt.verify(token,process.env.JWT_SECRET);
    req.userData = decodeToeken;
    next();
} catch (error) {
    return res.status(401).json({
        'message':"Invalid or expried token!",
        "error":error
    })
}
}

module.exports = {
    checkAuth:checkAuth
}
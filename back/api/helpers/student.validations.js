var jwt = require('jsonwebtoken');
var secretKey = process.env.SECRET_KEY;
module.exports = {
    validateStudent: async function (req, res, next) {
        await jwt.verify(req.headers['x-access-token'], secretKey, function(err, decoded) {
            if (err) {
                res.json({
                    status:"error",
                    message: err.message,
                    data: null
                });
            } else {
                req.body.logged={
                    studentid: decoded.id,
                    email: decoded.email,
                    role: decoded.role,
                    isGranted: decoded.isGranted
                }
                next();
            }
        });
    },
    
    isAdmin: async function (req,res,next){
        if (req.body.logged.role !== "ADMIN"){
            res.json({
                status: "error",
                message: "error you are not allowed you are not Administrator",
                payload: null
            });
        }else {
            next();
        }
    },
    
    isGranted: async function (req,res,next){
        if(req.body.logged.isGranted !== true) {
            res.json({
                status:"error",
                message: "error tou are not allowed you access not granted yet",
                payload: null
            });
        } else {
            next();
        }
    },
    
    isSupervisor: async function (req, res, next) {
        if (req.body.logged.role !== "SUPERVISOR") {
            res.json({
                status: "error",
                message: "error you are not allowed you are not Supervisor",
                payload: null
            });
        }else {
            next();
        }
    },
    
    roles:{
        admin: "ADMIN",
        guest: "GUEST",
        supervisor: "SUPRVISOR",
        user: "USER"
    }
}
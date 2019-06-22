var UserModel = require('./usermodel');
var mailService = require('./mailer.js');
exports.signup= function(req,res){
    if(req.body.email && req.body.password){
        var userdata = new UserModel(req.body);
        userdata.id=Date.now();
        userdata.save().then(function (newuser){
            console.log('new user',newuser);
            res.send({
                message:"Signup Success"
            })
            mailService.sendMail(req.body.email,"Welcome","Successful ! User Registered")
            .then(function(success){
                console.log('Mail sent ',success);
            },function(error){
                console.log('Mail sent error ', error);
            })
        },function(error){
            if(error.code==11000){
                res.send({
                    error:"User Alrady Registered"
                })
            }else{
                res.send({
                    error:"Some Error Occured in User Creation"
                })
            }
            console.log('error in sighup ',error);
        })


    }else{
        console.log('Insufficient Details')
        res.send({
            error:"Insufficient Details"
        })

    }
}

exports.login = function(req,res){
    if(req.body.email && req.body.password){
        UserModel.find({email:req.body.email,password:req.body.password})
        .then (function(user){
        console.log('User Found');
        if(user.length>0){
            var responseobj = {
                wallet:user[0].wallet,
                email:user[0].email,
                role:user[0].role,
                name:user[0].name
            }
            res.send(
                {
                    data:responseobj,
                    code:200
                }
                )
        }else{
            res.send({
                message:"invalid login",
                code:404
            })
        }
        },function(error){
            res.send({
                "message":"some error occured in login",
                code:500
            });
        })
    }else{
        res.send({
            error:"Invalid login",
            code:404
        })
    }
}

exports.deleteAccount = function(req,res){
    if(req.body.email){
        UserModel.remove({email:req.body.email})
        .then(function(success){
            res.send({
                message:"User deleted",
                code:200
            })
        },
        function(error){
            res.send({
            message:"email id not found",
            code:404
            })
        })
    }else{
        res.send({
            error:'please provide email',
            code:500
        })
    }
}

exports.changePassword = function(req,res){


}

exports.forgotPassword = function(req,res){
    if(req.body.email){
        UserModel.findOne({email:req.body.email})
        .then(
            function(user){
                mailService.sendMail(user.email,user.password,"Password Recovered");
            },
            function(error){
                res.send({
                    message:"User not found",
                    code:404
                })
            }
        )
    }
}
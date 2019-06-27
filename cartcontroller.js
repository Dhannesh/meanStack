var CartModel=require('./cartmodel')
exports.addToCart= function(req,res){
    console.log("request:",req.body.email);
    if(req.body.email && req.body.productid){
        console.log('req body',req);
        var cartdata = new CartModel(req.body)
        cartdata.save()
        .then(function(newcart){
            console.log("item added to cart", newcart)
            res.send({
                code:200,
                data:newcart
            })
        }, function(error){
            console.log("error in adding to cart", error)
            res.send({
                code:500,
                error:'Internal Server Error'
            })
        })
    }
    else{
        res.send({
            code:404,
            error:"Insufficient Details"
        })
    }
}

exports.removeItem=function(req,res){
    if(req.body.email && req.body.productid){
        CartModel.remove({email:req.body.email, productid:req.body.productid})
        .then(function(removed){
            console.log("item removed from db",removed)
            res.send({
                code:200
            })
        },
        function(error){
            console.log("error in remove from db",error)
            res.send({
             code:300

            })
        })

    }else{
        res.send({
            error:"insufficient details",
            code:400
        })
    }
}

exports.clearCart = function(req,res){
    if(req.body.email){
        CartModel.remove({email:req.body.email})
        .then(function(removed){
            res.send({
                code:200
            })
        },function (error){
            res.send({
                code:404,
                "error":error
            })
        })
    }
}

exports.cartItems=function(req,res)
{
    if(req.body.email){
    CartModel.find({email:req.body.email}).then(function(products){
        console.log("all items are",products)
        res.send({
            data:products,
            code:200
        })
    },
    function(error){
        console.log("error in getting items",error)
        res.send({
            error:"error in fetching items",
            code:300
        })
    })
}

 else{
   res.send({
       error:"please login first",
       code:400
   })
}
}
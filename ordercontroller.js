var OrderModel = require('./ordermodel');
email = null
exports.getOrderDetails= function(req,res){
    this.email =req.body.email;
    if(req.body.email){
        OrderModel.find({email:this.email}).then(function(orders){
            console.log("all details are",orders)
            res.send({
                data:orders,
                code:200
            })
        },
        function(error){
            console.log("error in getting order details",error)
            res.send({
                error:"error in fetching order details",
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

exports.createOrder = function(req,res){
    console.log('Body Received',req.body);
    if(req.body.email && req.body.firstname && req.body.totalprice && req.body.add1 && req.body.street && req.body.mobile && req.body.city && req.body.pincode && req.body.items.length>0){
        req.body.id=Date.now();
        var orderData = new OrderModel(req.body)
        orderData.save()
        .then(function(newOrder){
            console.log("Order Details updated", newOrder)
            res.send({
                code:200,
                data:newOrder
            })
        },function(error){
            console.log('error in placing order ',error);
            res.send({
                code:500,
                error: "Order not placed! try again"
            })

        })
    }else{
        console.log('Insufficient Data');
        res.send({
            code:500,
            error:"insufficeint Data"
        })
    }
}
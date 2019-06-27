var ProductModel = require('./productmodel')

exports.addProduct = function(req,res){
    prod = req.body;
    console.log("product=", prod);
    if(prod.productname && prod.productprice){
    prod.productid=Date.now();
    var productdata = new ProductModel(prod)
    productdata.save().then(function (newproduct){
        console.log('new prodcut added ', newproduct);
        res.send({
            data:newproduct,
            code:200
        })
    },function(error){
        console.log('error in adding product ', error);
        res.send({
            error:"error in adding product",
            code:404
        })
    })}else{
        console.log('insufficient data');
        res.send({
            error:"insufficient data",
            code:500
        })
    }
}

exports.allProducts = function(req,res){
    ProductModel.find({}).then (function(products){
        console.log('all products found ', products);
        res.send({
            data:products
        })
    }, function(error){
        res.send({
            error:"Error in finding Products"
        })
    })
}

exports.getProduct = function(req,res){
    console.log("product id",req.params.id);
    ProductModel.findOne({productid:req.params.id})
    .then(function(productFound){
        if(productFound){
            res.send({
                data:productFound,
                code:200
            })
        }else{
            res.send({
                message:"No product for this id",
                code:404
            })
        }
    },function(error){
        res.send({
            error:"Error in finding Product",
            code:500
        })
    })
}
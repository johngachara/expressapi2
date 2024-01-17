const data_path = require('../database/db');
const e = require("express");
const data = data_path.My_model;
const is_empty = (obj) => {
    return !obj || (Array.isArray(obj) && obj.length === 0) || (typeof obj === 'object' && Object.keys(obj).length === 0);
};
module.exports.Create = (req,res)=>{
    try{
        let requ = req.body;
        data.create(requ)
            .then(result=>{
                res.status(201);
                res.send(result);
            }).catch(error=>{
                res.status(500);
                res.send(error.message);
        })
    }catch (error){
        res.status(500).send(error.message)
    }
}
module.exports.Get_all = (req,res)=>{
    try{
        data.find()
            .then(result=>{
                if(is_empty(result)){
                    res.status(404).send('No Document Found');
                }else{
                    res.status(200).send(result);
                }
            }).catch(error=>{
                res.status(500).send(error.message);
        })
    }catch (error){
        res.status(500).send(error.message);
    }
}
module.exports.Get_one = (req,res)=>{
    try{
        data.findById(req.params.id)
            .then(result=>{
                if(is_empty(result)){
                    res.status(404).send('No Document Found');
                }else{
                    res.status(200).send(result);
                }
            }).catch(error=>{
            res.status(500).send(error.message);
        })
    }catch (error){
        res.status(500).send(error.message);
    }
}
module.exports.Update = (req,res)=>{
    try {
        let to_update = req.body;
        data.findByIdAndUpdate(req.params.id,to_update,{new:true})
            .then(result=>{
                if(is_empty(result)){
                    res.status(404).send("No Document Found");
                }else {
                    res.status(200).send(result);
                }
            }).catch(error=>{
            res.status(500).send(error.message);
        })
    }catch (error){
        res.status(500).send(error.message);
    }
}
module.exports.Delete = (req,res)=>{
    try{
        data.findByIdAndDelete(req.params.id)
            .then(result=>{
                if(is_empty(result)){
                    res.status(404).send("No Document Found");
                }else {
                    res.status(200).send(`${result.full_name} Deleted Successfully`);
                }
            }).catch(error=>{
            res.status(500).send(error.message);
        })

    }catch (error){
        res.status(500).send(error.message);
    }
}
module.exports.Delete_all = (req,res)=>{
    try{
        data.deleteMany({})
            .then(result=>{
                if(is_empty(result)){
                    res.status(404).send("No Document Found");
                }else {
                    res.status(200).send('All Records Deleted Successfully');
                }
            }).catch(error=>{
            res.status(500).send(error.message);
        })

    }catch (error){
        res.status(500).send(error.message);
    }
}
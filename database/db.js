const {mongoose} = require('mongoose');
const uri = "mongodb://localhost:27017/api";
module.exports.Connection = mongoose.connect(uri)
    .then(()=>{
        console.log('Connected Successfully');
    })
    .catch(error=>{
        console.log(error);
    })
const Schema = mongoose.Schema;
const My_schema = new Schema({
    full_name : {type:String},
    email_address : {type:String},
    national_id : {type:Number},
    year_of_birth : {type:Number},
    gender : {type:String},
    location : {type:String}
});
module.exports.My_model = mongoose.model("Trial",My_schema);

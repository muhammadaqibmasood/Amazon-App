var mongoose = require( 'mongoose' );
mongoose.Promise = global.Promise;



const productSchema =mongoose.Schema({image:{type:String},unit:{type:String},description:{type:String},name:{type:String},price:{type: Number},category:{type:String}})

const product= mongoose.model('product',productSchema );

module.exports = product
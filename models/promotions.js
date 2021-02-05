const mongoose = require('mongoose');

require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

const Schema = mongoose.Schema;

var PromotionsSchema  = new Schema({
    name:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    label:{
        type: String,
        default:"",
        required: true
    },
    price:{
        type: Currency,
        required: true,
        min: 0
    },
    description:{
        type: String,
        required: true
    },
    featured:{
        type: Boolean,
        default:false  
    },
})

var Promotions = mongoose.model('Promotions', PromotionsSchema );

module.exports = Promotions;
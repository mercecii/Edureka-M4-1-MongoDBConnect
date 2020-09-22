"use strict";


const mongoose = require('mongoose');
let Schema = mongoose.Schema;
let userSchema = new Schema({
    name:{type:String},
    city:{type:String},
    job :{type:String}
});


module.exports = mongoose.model('user',userSchema,'userlist')
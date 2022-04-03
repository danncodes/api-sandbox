const mongoose = require("mongoose")
const { Schema } = mongoose;

const companySchema = new Schema({
},{ timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt'  }} );

module.exports = mongoose.model('Companies', companySchema);
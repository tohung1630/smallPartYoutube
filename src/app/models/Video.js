const mongoose = require('mongoose')
const Schema = mongoose.Schema
const mongooseDelete = require('mongoose-delete')

const listvideos = new Schema({
  tenvideo: { type: String },
  tenkenh: { type: String },
  videoid: { type: String },
  ghichu: { type: String }
},{timestamps:true})


listvideos.plugin(mongooseDelete, { overrideMethods: 'all',deletedAt : true })



module.exports=mongoose.model('listvideos',listvideos)
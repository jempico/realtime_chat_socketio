const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoomSchema = Schema({
    name: { type: String, required: true, unique: true},
    //createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    createdAt: { type: Date, default: Date.now } 
}, {
  versionKey: false
});



module.exports= mongoose.model('Room',RoomSchema);

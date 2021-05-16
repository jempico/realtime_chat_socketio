const mongoose = require('mongoose');

const connectDB = async() =>{
    try {
        let db = await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@rest-api.wfrd7.mongodb.net/chatSocketCord?retryWrites=true&w=majority`,{ 
            useNewUrlParser: true , 
            useUnifiedTopology: true, 
            useFindAndModify: false,
            useCreateIndex: true })
        console.log(`Database connected to ${db.connection.host}`)
    } catch(err) {
        console.log(err)
    }
}

module.exports = {connectDB};

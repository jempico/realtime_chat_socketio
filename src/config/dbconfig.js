const mongoose = require('mongoose');

const connectDB = async() =>{
    try {
        let db = await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.wfrd7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,{ 
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

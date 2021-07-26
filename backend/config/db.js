import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        //database Name
        const databaseName='mern';
        const con = await mongoose.connect(`mongodb+srv://ironhack:admin@cluster0.1avs1.mongodb.net/${databaseName}?retryWrites=true&w=majority`, { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    });
        console.log(`Database connected : ${con.connection.host}`)
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
}

export default connectDB

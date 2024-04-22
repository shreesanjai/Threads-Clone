import mongoose  from 'mongoose';
let isConnected= false;

export const connectToDB = async() => {
    
    mongoose.set('strictQuery',true);

    if(!process.env.MONGO_URL) return console.log("MongoDB Not Connected");

    if(isConnected) return console.log("Already Connected");
    
    try {
        await mongoose.connect(process.env.MONGO_URL);
        isConnected= true;
        console.log('Database connected successfully');
        
    } catch (error) {
        console.log(error);
        
    }

};

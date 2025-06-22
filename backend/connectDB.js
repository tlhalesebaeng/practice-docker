import mongoose from 'mongoose';

// function to connect our app to the database
const connectDB = async () => {
    try {
        // get the database URI
        const DATABASE_URI = process.env.DATABASE_URI;

        // connect the app to the dabase using mongoose and the database uri
        const connection = await mongoose.connect(DATABASE_URI);

        // log to show that the app is connected successfully
        if (connection) {
            console.log('Database connection successful...');
        } else {
            console.log('Databse connection failed!');
        }
    } catch (error) {
        // log the error to the console
        console.error(error);
    }
};

// export the function so that we can use it in other files
export default connectDB;

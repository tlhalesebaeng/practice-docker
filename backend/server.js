import app from './app.js';
import connectDB from './connectDB.js';

// get the port number
const port = process.env.PORT;

// listen for requests on the port number
app.listen(port, () => {
    // log to show that the app has successfully started listening
    console.log(`Listening on port ${port}..`);

    // connect the app to mongodb
    connectDB();
});

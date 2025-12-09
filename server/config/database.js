const mongoose = require('mongoose');

const databaseConnection = async () => {
    try {
        const uri = process.env.MONGO_URI; // MUST match .env
        if (!uri) throw new Error("MONGO_URI not found in .env");

        const data = await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log(`Database connected successfully at host ${data.connection.host}`);
    } catch (error) {
        console.error("Database connection error:", error.message);
        process.exit(1);
    }
};

module.exports = databaseConnection;

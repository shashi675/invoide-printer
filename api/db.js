const mongoose = require("mongoose");

const URI = "mongodb://127.0.0.1:27017/invoicePrinter";

const connectDB = async () => {
    await mongoose.connect(URI).then(() => {
        console.log("DB connection successful");
    })
    .catch((err) => console.log("DB connection failed, error: ", err));
}

module.exports = connectDB;

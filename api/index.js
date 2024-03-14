const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connectDB = require("./db");
const authRoute = require("./routes/auth");
const cors = require('cors');

app.use(express.json());
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.use(cors({
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
  withCredentials: true
}));

// different routes for APIs
app.use("/api/auth", authRoute);


const PORT = 3001;
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`server running on port: ${PORT}`);
    })
})
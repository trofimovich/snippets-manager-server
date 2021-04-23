const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const PORT = 5000;

// setup express server
const app = express();

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

// set up routers
app.use("/snippet", require("./routers/snippetRouter"));

mongoose.connect(process.env.MDB_CONNECT_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, (err) => {
    if (err) {
        return console.error(err);
    } else {
        console.log("Connected to MongoDB");
    }
});

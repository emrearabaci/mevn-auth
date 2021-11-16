const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const dotenv = require('dotenv').config();
const session = require('express-session');
const passport = require('passport');
const bcrypt = require('bcrypt');
const mongoose = require("mongoose");
const {mongo} = require("mongoose");


const app = express();

// Middlewares Config
const corsOptions = {
    origin: 'http://localhost:8010'
}

app.use(helmet());
app.use(cors(corsOptions));

// Database connection
(async () => {
    try {
        const mongoose = require('mongoose');
        await mongoose.connect(process.env.DB_CONNECT)
            .then((/* res */) => {
                console.log(`Connection Successful! (DB STATUS:${mongoose.connection.readyState})`)
            })
            .catch((/* err */) => {
                console.log(`Not Connected! (DB STATUS:${mongoose.connection.readyState})`)
            })
    } catch (err) {
        console.log(err)
    }
})()

// ON FIRE
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server Running @${PORT}`)
});

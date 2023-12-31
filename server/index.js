const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require('dotenv');

dotenv.config();

app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true
}));

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})

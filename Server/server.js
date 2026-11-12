require("dotenv").config();
const express = require("express");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors(corsOptions));

app.use("/fs-playground/secret-santa", require("./routes/secreSantaRoute"));

app.listen(PORT, () => {
    console.log(`Listening to PORT ${PORT}`);
})
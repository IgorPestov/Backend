const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;
const db = require("./models");

const cors = require("cors");
const router = require("./routes/todo-routes")

app.use(cors());
app.use(bodyParser.json());
app.use( '/', router);


app.use((err, req, res, next) => {
    return res.status(err.status || 400).json({
        status: err.status || 400,
        message: err.message || "there was an error processing request"
    });
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
const express = require("express");
const cors = require("cors");
var app = express();

app.use(cors());

// ######## Router

const Router = require("./routes");

app.use("/", Router);

// #### server listen
app.listen(3001, () => console.log("Server running 3001"));

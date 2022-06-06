const express = require("express");

var app = express();
app.use(express.json());

// ######## Router

const Router = require("./routes");

app.use("/", Router);

// #### server listen
app.listen(3001, () => console.log("Server running 3001"));

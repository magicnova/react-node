const express = require("express");
const app = express();
const mongoose = require("mongoose");
const keys = require("./config/keys");
const PORT = process.env.PORT || 5000;

mongoose.connect(keys.mongoURI);

require("./services/passportService");
require("./routes/authRoute")(app);

app.listen(PORT);

const express = require("express");
const app = express();
const cookieSession = require("cookie-session");
const passport = require("passport");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const PORT = process.env.PORT || 5000;

require("./models/User");
require("./services/passportService");

mongoose.connect(keys.mongoURI);

app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey],
	}),
);

app.use(passport.initialize());
app.use(passport.session());
require("./routes/authRoute")(app);

app.listen(PORT);

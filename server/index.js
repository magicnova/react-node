const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

require("./services/passportService");
require("./routes/authRoute")(app);

app.listen(PORT);

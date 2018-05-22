// Dependencies.
const express = require('express');
const bodyParser = require('body-parser');

// Express configuration. 
const app = express();
const PORT = process.env.PORT || 8080;

const db = require("./models");
// Handles data parsing.
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

app.use(express.static("public"));

// Router.
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, () => console.log('Server started on port ' + PORT));

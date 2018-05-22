// Dependencies.
const express = require('express');
const bodyParser = require('body-parser');

// Express configuration. 
const app = express();
const PORT = process.env.PORT || 8080;

// Handles data parsing.
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


// Router.
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Listener.
app.listen(PORT, () => console.log('Server started on port ' + PORT));
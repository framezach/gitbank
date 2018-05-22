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

<<<<<<< HEAD
app.listen(PORT, () => console.log('Server started on port ' + PORT));
=======
app.listen(PORT, () => console.log('Server started on port ' + PORT));
>>>>>>> 36391fe8b1fc29ee0dfd9551d6510dca0b61369a

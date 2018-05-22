// Dependency.
var path = require("path");

// Routing.

module.exports = function(app) {
    app.get("/index", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    })
    app.get("/dashboard", function (req, res){
        res.sendFile(path.join(__dirname, "../public/dashboard.html"));
    })
    app.get("/tables", function (req, res){
        res.sendFile(path.join(__dirname, "../public/tables.html"));
    })
    // Default to home.
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    })
}
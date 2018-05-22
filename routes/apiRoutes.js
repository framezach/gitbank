// Load data
var userData = require("../data/userData");
var expenseData = require("../data/expenseData");

module.exports = function (app) {
    // API GET requests
    // Handle when user visits a page 
    app.get('/api', (req, res) => {
        res.json({
            message: 'Hello. Welcome to the API.'
        });
    });
    app.get("/api/userbase", function (req, res) {
        res.json(tableData);
    });
    app.get("/api/waitlist", function (req, res) {
        res.json(expenseData);
    });
    
    /*
    app.post('/api/posts', verifyToken /* Middleware function */ /*, (req, res) => {*/
 /*       jwt.verify(req.token, 'secretkey', (err, authData) => {
            if (err) {
                res.sendStatus(403);
            } else {
                res.json({
                    message: 'Post created.',
                    authData
                });
            }
        });

    });

    router.post('/signup', (req, res, next) => {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
            if (err) {
                return res.status(500).json({
                    error: err
                });
            } else {
                const user = new User({
                    email: req.body.email,
                    password: hash
                })
            }
        })
    })

    app.post('/api/login', (req, res) => {
        // callback function (asynch)
        // Usually you'd have a database full of users that you'd be getting a req. from
        // this is a mock user
        const user = {
            id: 1,
            username: 'brad',
            email: 'brad@gmail.com'
        }
        // This gets us our token back, which is everything we need to reach a 'protected route'
        jwt.sign({
            user
        }, 'secretkey', {
            expiresIn: '1h'
        }, (err, token) => {
            res.json({
                token
            });
        });
    })

    function verifyToken(req, res, next) {
        // Runs, then calls 'next' to proceed.
        // Get Auth header value, sends token in header as an authorization value.
        const bearerHeader = req.headers['authorization']; // Gets actual token.
        // Check if bearer is undefined
        if (typeof bearerHeader !== 'undefined') {
            // Split at the space
            const bearer = bearerHeader.split(' ');
            // Get token from array
            const bearerToken = bearer[1];
            // Set the token 
            req.token = bearerToken;
            // Next
            next();
        } else {
            // Sends a Forbidden message if the bearer is undefined.
            res.sendStatus(403);
        }
    }*/
} 
const express = require('express')
const app = express()
const port = 3000

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

// app.get("/chocolate", function(req, res) {
//     res.send("Mm chocolate :O");
// });

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })

const { auth } = require('express-openid-connect');

const config = {
    authRequired: false,
    auth0Logout: true,
    secret: 'a very long, randomly-generated string stored in env',
    baseURL: 'http://127.0.0.1:5501',
    clientID: 'BJPIqF8mxThxnCv0bevxw97Dnf5SQVDG',
    issuerBaseURL: 'https://dev-vkj75m74.us.auth0.com'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});
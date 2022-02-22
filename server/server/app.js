const express = require('express')
const app = express()

const port = process.env.PORT || 8080

const { auth, requiresAuth } = require('express-openid-connect');

const config = {
    authRequired: false,
    auth0Logout: true,
    baseURL: 'http://localhost:8080',
    secret: '7I6Blfjv0AmHkoWH2tZxinxgT1NrcGBOc7P0R8PBCSrGq_LHQ4DXdhtaHZExrwnd',
    clientID: 'BJPIqF8mxThxnCv0bevxw97Dnf5SQVDG',
    issuerBaseURL: 'https://dev-vkj75m74.us.auth0.com',
};

// // auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

app.listen(port, '0.0.0.0', () => {
    console.log(`Now listening on port ${port}`)
})


// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out')
        // res.send('Stuff')
});


app.get('/profile', requiresAuth(), (req, res) => {
    res.send(JSON.stringify(req.oidc.user));
});

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

app.get("/chocolate", function(req, res) {
    res.send("Mm chocolate :O");
});

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })
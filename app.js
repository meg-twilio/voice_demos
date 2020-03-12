require('dotenv').config()

// --------------------- MODULES --------------------- //
const express = require('express');
const twilio = require('twilio');
const router = express.Router();
const app = express();

// Used to parse requests so you can use its info
const urlencoded = require('body-parser').urlencoded({ extended: false });


// --------------------- INSTANCED MODULES --------------------- //

const src = require("./src");
const MDOERATOR = '+19045371699';


// --------------------- GLOBAL VARIABLES --------------------- //

const PORT = process.env.PORT || 8080;
const client = new twilio(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN) 


// --------------------- MIDDLEWARE --------------------- //

app.use(urlencoded);// Thus lets express know to use static files
app.use('/', express.static('./'))

// --------------------- ROUTES --------------------- //

app.get('/', (request, response) => {
    response.send('<h1> Welcome to Twilio! </h1>')
});

// Call Resource Demos
app.post('/calls/cancel', src.calls.cancel)
app.post('/calls/new', src.calls.new)



// Conference Resource Demos
app.post('/conferences/new', src.conferences.new);




// --------------------- START SERVER --------------------- //
app.listen(PORT, function() {
	console.log(`Twilio Client app HTTP server running on Port ${PORT}`)
});

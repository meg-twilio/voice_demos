require('dotenv').config()

// --------------------- MODULES --------------------- //

const express = require('express');
const twilio = require('twilio');
const router = express.Router();
const app = express();

// Used to parse requests so you can use its info
const urlencoded = require('body-parser').urlencoded({ extended: false });


// --------------------- INSTANCED MODULES --------------------- //

const routes = require("./src/service.js");
const run = require("./src/serviceTwo.js");
const MDOERATOR = '+19045371699';
const VoiceResponse = require('twilio').twiml.VoiceResponse;


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


app.get('/conferences', routes.conference);


// app.get('/getPhoneNumbers', routes.get_phone_numbers)
// app.get('/getBuyPhoneNumbers', routes.buy_phone_numbers)
// app.get('/getCreateMgService', routes.create_mg_service)
// app.get('/getAddPhoneNumbersToMgService', routes.add_phone_number_to_mg_service)


// app.get('/testAvailableNumbers', run.get_phone_numbers)
// app.get('/testBuyPhoneNumbers', run.aquire_phone_numbers)
// app.get('/testCreateMgService', run.make_service)


// --------------------- START SERVER --------------------- //
app.listen(PORT, function() {
	console.log(`Twilio Client app HTTP server running on Port ${PORT}`)
});

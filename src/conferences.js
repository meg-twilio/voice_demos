const twilio = require('twilio')
// const client = new twilio(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN) 
const VoiceResponse = require('twilio').twiml.VoiceResponse;

// Moderator variable can be updated to your desired PSTN number
const MODERATOR = '+19045371699'

module.exports = {
    new: (request, response) => {
        const twiml = new VoiceResponse();

        const dial = twiml.dial();

        if (request.body.From == MODERATOR) {
            dial.conference('My conference', {
                startConferenceOnEnter: true,
                endConferenceOnExit: true,
                // Update with Desired URL for Callbacks
                statusCallback: 'http://httpbin.org/post',
                // Note: These are call progress events NOT call statuses
                statusCallbackEvent: ['initiated', 'ringing', 'answered', 'completed'],
                statusCallbackMethod: 'POST', 
            });
        } else {
            dial.conference('My conference', {
                startConferenceOnEnter: false,
            });
        };
        response.type('text/xml');
        response.send(twiml.toString());
        console.log(response.req.body);

    }
}


const twilio = require('twilio')
// const client = new twilio(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN) 
const VoiceResponse = require('twilio').twiml.VoiceResponse;
const client = new twilio(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN)


module.exports = {

    // Initiate a new call
    new: (request, response) => {
        client.calls.create({
            twiml: '<Response><Say>Ahoy there!</Say></Response>',
            // Update to your Cell Phone
            to: '+19045371699',
            // Update to your Twilio Number
            from: '+16673031327',
            fallbackUrl: 'http://httpbin.org/post',
            fallbackMethod: 'POST'
        })
        .then(call => console.log(call.sid))
        return response.json({ status: 200, message: `Successfully called ${request.to}` })

    }, 
    // Cancel a given call 
    cancel: (request, response) => {
        // Note: Will need to update the below CallSid to the given call you want to cancel
        client.calls('CA34a510070fbac900b09dafb05ccf1f55')  
        // Updating the status of the given Call to 'Completed' will effectively shut down the call 
            .update( { status: 'completed' })
            .then(call => {
                console.log(call.to, call.from),
                toCaller = call.from, 
                console.log(toCaller)
             })
             
    }
}

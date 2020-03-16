
const twilio = require('twilio')
// const client = new twilio(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN) 
const VoiceResponse = require('twilio').twiml.VoiceResponse;
const client = new twilio(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN)
const fetch = require('node-fetch');
const request = require('request');

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
        .then(call => console.log(call))

        return response.json({ status: 200, message: `Successfully called ${request.to}` })

    }, 
    // Cancel a given call 
    cancel: (request, response) => {
        // Note: Will need to update the below CallSid to the given call you want to cancel
        client.calls('CA0a72d391dcdb0d2715ce4d6c299ba031')  
        // Updating the status of the given Call to 'Completed' will effectively shut down the call 
            .update( { status: 'completed' })
            .then(call => {
                console.log(call.to, call.from)

             })
             
    }, 

    // Answering Machine Detection Testing - Scenario 2 
    amdTesting: (request, response) => {
        client.calls.create({
            machineDetection: 'DetectMessageEnd',
            twiml: `<Response><Say> Someone is trying to reach you! Lightphone will send you an MMS shortly with the voicemail. </Say></Response>`,
            to: '+19045371699',
            from: '+16673031327'
        })
        .then(call => console.log(call));

        // trigger a message to the Queue to record PSTN_1's voicemail for PSTN_2

        // gather voicemail from PSTN_1

        // Send mp3 of voicemail to PSTN_2 in MMS message w/ Lightphone Introduction 



        return response.json({ status: 200, message: `Successfully called ${request.to}` })
    }, 

    // Lookup API for carrier info from phone number (as parameter in url)
    getCarrier: (request, response) => {
        client.lookups.phoneNumbers(phoneNumber)
        .fetch({ type: ['carrier'] })
        .then(response => {
            console.log(`Carrier's name is ${response.carrier.name}`)
            return response.json();
        })
            .then(response => {
            let carrier = response.carrier.name;
            console.log(carrier)
            }) 

        let mostRecentPromise = Promise.resolve([]);

        allFunctions.forEach(fxn => {
            mostRecentPromise = mostRecentPromise.then(requestedFxnsSoFar => {
                return fetch(

                )
            })
        })

        // mostRecentPromise.then(


        // )
        //         client.lookups.phoneNumbers(phoneNumber)
        //             .fetch({ type: ['carrier'] })
        //             .then(response => {
        //                 console.log(`Carrier's name is ${response.carrier.name}`)
        //                 return response.json();
        //             })
        //             .then(response => {
        //                 let carrier = response.carrier.name;
        //                 console.log(carrier), 
        //                 chainedFunction.push(carrier);
        //                 return chainedFunction;
        //             });
            
        

        mostRecentPromise.then(allFunctions => {
            console.log(`The return values of all requests are passed as an array:`);
            console.log(allFunctions);
        }).catch(error => {
            console.error('A call failed: ');
            console.error(error.message);
        });
    }

    //     client.lookups.phoneNumbers(phoneNumber)
    //         .fetch({ type: ['carrier'] })
            
    //         .then(response => {
    //             let carrier = response.carrier.name;
    //             console.log(carrier)
    //         })
    //         return response.json({ status: 200, message: `The carrier for ${request.params.phoneNumber} is ${response.carrier.name}` })

}

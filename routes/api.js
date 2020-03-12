



app.post('/voice', (request, response) => {
	const twiml = new VoiceResponse();

	const dial = twiml.dial();

	if (request.body.From == MODERATOR) {
		dial.conference('My conference', {
			startConferenceOnEnter: true,
			endConferenceOnExit: true,
			statusCallback: 'https://1fc4f2d6.ngrok.io/statusCallbacks/new',
			statusCallbackEvent: ['queued', 'connecting', 'ringing', 'connected', 'complete', 'failed'],
			statusCallbackMethod: 'POST'
		});
		console.log(response.body)
	} else {
		dial.conference('My conference', {
			startConferenceOnEnter: false,
		});
		console.log(response.body)
	};
	console.log(response.body)
	response.type('text/xml');
	response.send(twiml.toString());
})
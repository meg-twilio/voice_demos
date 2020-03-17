<a href="https://www.twilio.com">
  <img src="https://static0.twilio.com/marketing/bundles/marketing/img/logos/wordmark-red.svg" alt="Twilio" width="250" />
</a>

# Demo for Twilio's Programmable Voice Product

Test out a Twilio's Programmable Voice Product using this Node.js Twilo Demo packet


## Local Development

This project is build using [Express](http://expressjs.com/) web framework and
depends on [MongoDB](https://www.mongodb.com).


1. First clone this repository and `cd` into it.

   ```bash
   git clone git@github.com:meg-twilio/voice_demos.git \
   cd voice_demos
   ```
2. Install project's dependencies.

   ```bash
   npm install
   ```

3. Start the development server.

   ```bash
   npm start
   ```

   Alternatively you might also consider using [nodemon](https://github.com/remy/nodemon) for this. It works just like
   the node command, but automatically restarts your application when you change any source code files.

   ```bash
   npm install -g nodemon \
   nodemon .
   ```

4. Check it out at [http://localhost:8080](http://localhost:8080).

5. Expose the application to the wider Internet using [ngrok](https://ngrok.com/).

   ```bash
   ngrok http 8080
   ```

6. Provision a number under the [Twilio's Manage Numbers](https://www.twilio.com/console/phone-numbers/incoming)
   page on your account. Set the voice URL for the number to http://[your-ngrok-subdomain].ngrok.io/meg_twilio/voice_demos


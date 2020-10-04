'use strict';
require('dotenv').config();
const express = require('express');
const app = express();
const AuthorizationV1 = require('ibm-watson/authorization/v1');
const { IamTokenManager } = require('ibm-watson/auth');

const cors = require('cors');

// Middlewares
app.use(cors());

// Authenticator must be set! Don't know how to solve?
// const SpeechToTextV1 = require('ibm-watson/speech-to-text/v1');
// const { IamAuthenticator } = require('ibm-watson/auth');

// const speechToText = new SpeechToTextV1({
//   authenticator: new IamAuthenticator({
//     apikey:  process.env.STT_API_KEY,
//   }),
//   url: "",
// });
console.log("F in the chat");
console.log("L"+process.env.STT_API_KEY);
/* speech to text token endpoint
var sttAuthService = new AuthorizationV1(
  Object.assign(
    {
        iam_apikey: process.env.STT_API_KEY,
    }
  )
);*/

const sttAuthenticator = new IamTokenManager({
  apikey: process.env.STT_API_KEY
});

// Routes
app.use('/api/speech-to-text/token', function(req, res) {
  return sttAuthenticator
    .requestToken()
    .then(({ result }) => {
      console.log(result.access_token)
      res.json({ accessToken: result.access_token, url: process.env.SPEECH_TO_TEXT_URL });
    })
    .catch(console.error);
});

/**
 * const ttsAuthenticator = new IamTokenManager({
  apikey: process.env.TEXT_TO_SPEECH_IAM_APIKEY
});
app.use('/api/text-to-speech/token', function(req, res) {
  return ttsAuthenticator
    .requestToken()
    .then(({ result }) => {
      res.json({ accessToken: result.access_token, url: process.env.TEXT_TO_SPEECH_URL });
    })
    .catch(console.error);
});*/

// Config
const port = process.env.PORT  || 8000;
app.listen(port, function() {
  console.log('IBM Watson token endpoint http://localhost:%s/api/speech-to-text/token', port);
});
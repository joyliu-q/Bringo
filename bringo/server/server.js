'use strict';
require('dotenv').config()
const express = require('express');
const app = express();
const AuthorizationV1 = require('ibm-watson/authorization/v1');
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

// speech to text token endpoint
var sttAuthService = new AuthorizationV1(
  Object.assign(
    {
        iam_apikey: process.env.STT_API_KEY,
    }
  )
);

// Routes
app.use('/api/speech-to-text/token', function(req, res) {
  sttAuthService.getToken(
    function(err, token) {
      if (err) {
        res.status(500).send('Error retrieving token');
        return;
      }
      res.send(token);
    }
  );
});

// Config
const port = process.env.PORT  || 8080;
app.listen(port, function() {
  console.log('IBM Watson token endpoint http://localhost:%s/api/speech-to-text/token', port);
});
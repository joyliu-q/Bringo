const express = require('express');
const mongoose = require('mongoose');
const {PORT, mongoUri} = require('./config');
const app = express();
const cors = require('cors');
const morgan =require('morgan');
const bodyParser = require('body-parser')

// allow us to make ajax
app.use(cors());

// log every request to the server in the console
app.use(morgan('tiny'));

// parse json
app.use(bodyParser.json());

// connection is not synchronous, we're using promises
mongoose
    .connect(mongoUri, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
    .then(() => console.log('MongoDB database Connected...'))
    .catch((err) => console.log(err))

app.get('/', (req,res)=>res.send('Hello world!'));

app.listen(PORT, ()=>console.log(`App listening at http://localhost:${PORT}`));
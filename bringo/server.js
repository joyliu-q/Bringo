const express = require('express');
const mongoose = require('mongoose');
const {PORT, mongoUri} = require('./config');
const app = express();


// connection is not synchronous, we're using promises
mongoose
    .connect(`mongodb+srv://user:nevergonnagiveyouup@cluster0.1ryjy.mongodb.net/user_info?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
    .then(() => console.log('MongoDB database Connected...'))
    .catch((err) => console.log(err))

app.get('/', (req,res)=>res.send('Hello world!'));

app.listen(PORT, ()=>console.log(`App listening at http://localhost:${PORT}`));
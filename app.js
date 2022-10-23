const express = require('express');
const morgan = require('morgan');
const cors = require("cors");
const app = express();
//This is CORS Ref:https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
var corsOptions = {
    origin: "http://localhost:8080"
};
app.use(cors(corsOptions));
// 1) MIDDLEWARES Morgan is used for debugging

app.use(morgan('tiny'));
// 2)MIDDLEWARE json is used for injecting the body attribute in the pipeline
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// 3) MIDDLE ROUTES loading
const loanRouter = require('./routes/loanRouter');
app.use('/api/v1/loans', loanRouter);
module.exports = app;
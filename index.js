// module.exports = function (cb) {
//   cb(null, 'Hello World');
// }

const express = require('express');
const webtask = require('webtask-tools');
const parser = require('body-parser');

const app = express();

app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());

require('./routes/reading')(app);

module.exports = webtask.fromExpress(app);

const express = require('express');
const app = express();
const path = require('path');

const port = process.env.IP || process.env.OPENSHIFT_NODEJS_PORT || 8080;

console.log('process.env');
console.log(process.env);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
})

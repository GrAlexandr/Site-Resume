const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const path = require('path');
const app = express();

const router = require('./router');

app.use(bodyParser.json({ type: 'application/json' }));
app.use('/', router);
app.use(express.static(`${__dirname}/../react-client/dist`));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(`${__dirname}/../react-client/dist/index.html`));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

// error handling
app.use((req, res, next) => {
	const err = new Error(`Not Found ${req.path}`);
	err.status = 404;
	next(err);
});

app.use((error, req, res, next) => {
	if (error) {
		console.log(error);
		return res.status(400).json({error});
	}
	next(error);
});

app.use((err, req, res, next) => {
	res.status(err.status || 500);
	res.render('error', {
		message: err.message,
		error: {}
	});
});
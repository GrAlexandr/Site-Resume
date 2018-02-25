const express = require('express');
const router = express.Router();

const Mailgun = require('mailgun').Mailgun;
const mg = new Mailgun('key-9ac5cfa81bd0d3bc2b49bb86c2b633c6');
const domain = 'sandboxd0bfe9ec69fc4caf97771e77ba8930dc.mailgun.org';

router.post('/contact', function (req, res) {
	const { name, email, message } = req.body;
	const mail = new Promise((resolve, reject) => {
		mg.sendText(email, 'grygorenko1982@gmail.com', name, message, domain, {}, error => {
			if (error) reject(error);
			else resolve('Success')
		});
	})
});

module.exports = router;
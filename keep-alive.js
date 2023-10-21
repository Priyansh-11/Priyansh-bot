const express = require('express');
const app = express();

const port = process.env.PORT || 8080

// const port = 8080

app.get('/', (req, res) => res.send('Remade By Priyansh!!'));

app.listen(port, () =>
	console.log(`Your app is listening a http://localhost:${port}`)
);
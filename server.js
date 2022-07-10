const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
	res.send('index');
});

app.get('/shop', (req, res) => {
	res.send('shop');
});

app.get('/cart', (req, res) => {
	res.send('cart');
});

app.listen(PORT, () => {
	console.log(`App is listening PORT ${PORT}.`);
});

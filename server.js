const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	res.render('index');
});

app.get('/shop', (req, res) => {
	res.render('shop');
});

app.get('/cart', (req, res) => {
	res.render('cart');
});

app.listen(PORT, () => {
	console.log(`App is listening PORT ${PORT}.`);
});

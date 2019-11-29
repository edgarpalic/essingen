const express = require('express');
const expbs = require('express-handlebars');
const app = express();

app.engine('handlebars', expbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(express.static("images"));
app.use(express.static("css"));
app.use(express.static("js"));

// Routing
app.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});

app.get('/other', (req, res) => {
    res.render('other', { title: 'Other' });
});

app.get('/restaurants', (req, res) => {
    res.render('restaurants', { title: 'Restaurants' });
});

app.get('/service', (req, res) => {
    res.render('service', { title: 'Service' });
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log('Server starting on ' + port);
});



const express = require('express');
const mysql = require('mysql');
const expbs = require('express-handlebars');
const app = express();

app.engine('handlebars', expbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(express.static("images"));
app.use(express.static("css"));
app.use(express.static("js"));

// Database
var con = mysql.createConnection({
    host: '178.16.211.2',
    user: 'essingen_user',
    password: 'sfdlfk85',
    database: 'essingen'
});

con.connect((err) => {
    /* 
    Tables in Essingen DB
    RowDataPacket { Tables_in_essingen: '__migrationhistory' },
    RowDataPacket { Tables_in_essingen: 'placecategories' },   
    RowDataPacket { Tables_in_essingen: 'places' } ]
    */
    if (err) throw err;

    // var query = "show tables in essingen"
    var query = "select * from placecategories"
    con.query(query, function (err, result, fields) {
        if (err) throw err;
        //console.log(result);
    });
    console.log('Connection established');
    con.end();
});

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



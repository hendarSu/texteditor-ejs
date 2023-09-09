const express = require("express");
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const port = 3000;

app.use(cors());
app.use(morgan('dev'));

app.use(express.static('public'));
app.use(express.static('bower_components'));
app.use(express.static('node_modules'));

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

// view engine setup
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/editor', (req, res) => {
    res.render('editor');
});


app.listen(port, () => {
    console.log(`Server listen on port ${port}!`);
});
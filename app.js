let express     = require('express');
let cors        = require('cors');
let path        = require('path');

const PORT = 5000;

let app = express();
app.use(cors());

//app.use('/static', express.static('public'));
app.use('/static', express.static(path.join(__dirname, '/public')));

app.get('/all', (req, res) => {
    res.sendFile(path.join(__dirname, 'allCountries.html'));
});

app.get('/eu', (req, res) => {
    res.sendFile(path.join(__dirname, 'euCountries.html'));
})

app.get('/search', (req, res) => {
    res.sendFile(path.join(__dirname, 'searchCountries.html'));
})

app.listen(5000, () => console.log(`Server started on port ${PORT}`));
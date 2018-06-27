let express     = require('express');
let cors        = require('cors');
let path        = require('path');

const PORT = 5000;

let app = express();
app.use(cors());

app.use('/static/js/components', express.static('components'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(5000, () => console.log(`Server started on port ${PORT}`));
import express from 'express';
import { join } from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console */

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', function(req, res) {
    res.sendFile(join(__dirname, '../dist/index.html'));
});

app.get('/users', function(req, res) {
    res.json([{
            "id": 25415276,
            "firstName": "Quinton",
            "lastName": "Moore",
            "email": "Jazlyn67@hotmail.com"
        },
        {
            "id": 8961012,
            "firstName": "Jean",
            "lastName": "McCullough",
            "email": "Darby_OConner@yahoo.com"
        },
        {
            "id": 44010415,
            "firstName": "Delaney",
            "lastName": "Boehm",
            "email": "Rebecca_Schaefer44@gmail.com"
        },
        {
            "id": 14917352,
            "firstName": "Nia",
            "lastName": "Pollich",
            "email": "Colten_Bednar@gmail.com"
        }
    ]);
});

app.listen(port, function(err) {
    if (err) {
        console.log(err);
    } else {
        open('http://localhost:' + port);
    }
});

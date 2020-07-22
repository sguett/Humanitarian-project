const exp = require('express');
const cors = require('cors');
const bp = require('body-parser');
const pws = require('p4ssw0rd');
const knex = require('knex');
// const url = require('url');
const fs = require('fs');

const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        port: '5432',
        user: 'postgres',
        password: 'postgres2626',
        database: 'volunteer'
    }
});

const app = exp();

app.use(exp.static(__dirname + '/public'));
app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());
app.use(cors());

app.get('/projects', (req, res) => {
    db('projects')
        .select('*')
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            console.log(err);
        })
})


app.post('/addProject', (req, res) => {
    const { name, resume, local, volunteers, funds, image } = req.body;
    // const image = url.parse(req.body.image, true)
    db('projects')
        .insert({
            name: name,
            description: resume,
            status: 'open',
            funds: funds,
            needs_volunteers: volunteers,
            localisation: local,
            image: image,
            creator_id: 2
        })
        .then(data => {
            // console.log(data);
            res.send(req.body)
        })
        .catch(err => {
            console.log(err);
        })

    // console.log(req.body);
    // res.send(req.body)
})

app.listen(3000);
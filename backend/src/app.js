//import { openDb } from './configdb.js';
import { create_table, insert, update, select, select_by_id } from './controller/produtos.js';

import express from 'express';
const app = express();
app.use(express.json());

create_table();

app.get('/', function(req, res){
    res.send('Olá, mundo');
})

app.get('/produtos', async function(req, res){
    let produtos = await select();
    res.json(produtos);
})

app.get('/produtos', async function(req, res){
    let produtos = await select_by_id(req.body.id);
    res.json(produtos);
})

app.post('/produtos', function(req, res){
    console.log(req.body);
    insert(req.body);
    res.json({
        statusCode: 200
    });
});

app.put('/produtos', function(req, res){
    if(req.body && !req.body.id){
        res.json({
            "statusCode": 404,
            "msg": "Informe um id"
        })
    } else {
        update(req.body);
        res.json({
            statusCode: 200
        });
    }
    
});

app.listen(3000, () => console.log('Servidor rodando'));

//Constantes
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const model=require('models');



let app=express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//Routes
app.post('/create',async(req,res)=>{
    let reqs = await model.User.create({
        'RA': req.body.RAuser,
        'password' : req.body.passwordUser,
        'placa': req.body.placaUser,
        'modelo': req.body.modeloUser,
        'createdAt': new Date(),
        'updatedAt': new Date()
    });
    if(reqs){
        res.send(JSON.stringify('O usuario foi cadstrado com sucesso'));
    }
});


//Start server
let port=process.env.PORT || 3000;
app.listen(port,(req,res)=>{
    console.log('Servidor rodando')
});
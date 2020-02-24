const express = require('express');
const bodyParser = require('body-parser');
const TaskRoutes = require('./routes/Task');
const mongoose = require('mongoose');
const config = require('./config/key.config');
//const cors = require('cors');


const app = express();


mongoose.connect(config.mongodbUri,{useNewUrlParser: true})
.then (()=> console.log('Conexão realizada com sucesso!!!'))
.catch((err) => console.log('Erro ao conectar'));


mongoose.set('useFindAndModify',false);

app.use(bodyParser.json());
//app.use(cors());

app.use('/api/tasks', TaskRoutes);

const port = process.env.PORT || 3001;

app.listen(port, function(){
    console.log("Conectado na porta "+ port)
});

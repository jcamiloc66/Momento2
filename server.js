const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
 
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.json({  
      'mensaje' : 'Bienvenido este proyecto es para presentar el examen momento 2 2019'
    })
});

app.get('/database', function (req, res) {
    res.json({  
        'mensaje' : 'Base de datos Conectada Correctamente'
      })
    
  });

  app.get('/saludo/:nombre', function (req, res) {
    res.json({
        'data' : `Hola ${req.params.nombre} Espero Estes Muy Bien`
    })

  });

app.get('/edad/:XY', function (req, res) {
    let datos = req.body;

    if(req.params.XY < 18){
        res.status(200).json({
            'data' : `Es Menor De Edad Y Tiene ${req.params.XY}`
        });
    }else{
        res.json({
            'data' : `Es Mayor De Edad Y Tiene: ${req.params.XY}`
        })
    }
});


mongoose.connect('mongodb://localhost:27017/tienda', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err, res) => {
    if(err) throw err;
    console.log("Conectado a la DB");
});

let port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor ONLINE en el puerto ${ port }`);
});
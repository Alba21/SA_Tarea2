// cargar el modulo de express
const express = require("express");
// y crea una instancia de la aplicación express
const app = express();
// cargar body parser para leer el body de los request
const bodyParser = require("body-parser");

//VARIABLES
var piloto1 = {id: 1, auto: 1};
var piloto2 = {id: 2, auto: 2};
var piloto3 = {id: 3, auto: 3};
var arreglo = [piloto1, piloto2, piloto3];

// recibir datos en formato json
app.use(bodyParser.json());

app.get("/pilotos", (req, res) =>{
    res.json(arreglo)
})

app.get('/', (req, res) =>{
    res.send("Ruta principal piloto");
})

app.post("/piloto", (req, res) =>{
    console.log(req.body)
    res.send("Ruta post piloto");
})


app.listen(4545, () => {
    console.log("Corriento servicio de piloto");
});


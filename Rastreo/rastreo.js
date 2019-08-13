// cargar el modulo de express
const express = require("express");
// y crea una instancia de la aplicación express
const app = express();
// cargar body parser para leer el body de los request
const bodyParser = require("body-parser");

// recibir datos en formato json
app.use(bodyParser.json());
app.get('/', (req, res) =>{
    res.send("Ruta principal rastreo");
})

app.post("/rastreo", (req, res) =>{
    console.log(req.body)
    res.send("Ruta post rastreo");
})

app.listen(4545, () => {
    console.log("Corriento servicio de rastreo");
});


// cargar el modulo de express
const express = require("express");
// y crea una instancia de la aplicación express
const app = express();
// cargar body parser para leer el body de los request
const bodyParser = require("body-parser");

// recibir datos en formato json
app.use(bodyParser.json());
 
app.get("/pedirViaje", (req,res) =>{
    //1. Enviar Ubicacion del cliente
    //2. Esperar confirmación de viaje
    //3. Mostrar Ubicación del Uber
    //4. Confirmar?
})
app.get('/', (req, res) =>{
    res.send("Ruta principal");
})

app.get('/pilotos/:id',(req,res) =>{
    res.send(req.params.id);
})

app.post("/usuario", (req, res) =>{
    console.log(req.body)
    res.send("Ruta post usuario");
})

app.listen(4545, () => {
    console.log("Corriento servicio de usuario");
});


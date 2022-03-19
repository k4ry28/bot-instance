const express = require('express');
const router = express.Router();
const controlador = require('./components/controlador');

router.post('/contextoInicial', async (req, res) => {
    // Devuelve info del bot (nombre, id alfanumerico, nombre y apellido del creador)
    let info = await controlador.infoProyecto();
    res.json(info);
});

router.post('/obtenerInfracciones/:userDNI', async (req, res) => {
    // Responder con json si tiene infracciones o no
    const dni = parseInt(req.params.userDNI);
    let busqueda = await controlador.buscarInfraccion(dni);

    if (typeof busqueda == 'object'){
        res.json({
            nombre: busqueda.nombre,
            dni: busqueda.dni,
            infracciones: `Posee ${busqueda.infracciones.length} infracciones`
        })
    }
    else res.json(busqueda);
    
});

router.post('/enviarMensaje', async (req, res) => {
    let mensaje = req.body;

    mensaje
});

module.exports = router;
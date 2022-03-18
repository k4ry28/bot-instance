const express = require('express');
const router = express.Router();

router.post('/contextoInicial', (req, res) => {
    // Devuelve info del bot (nombre, id alfanumerico, nombre y apellido del creador)
});

router.post('/obtenerInfracciones/:userDNI', (req, res) => {
    // Responder con json si tiene infracciones o no
    const dni = req.params.userDNI;
    
});
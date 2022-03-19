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

    if (typeof busqueda == 'object') {
        let infracciones = busqueda.infracciones.length;

        if (infracciones > 0) {
            res.json({
                nombre: busqueda.nombre,
                dni: busqueda.dni,
                infracciones: `Posee ${busqueda.infracciones.length} infracciones`
            })
        }
        else {
            res.json({
                nombre: busqueda.nombre,
                dni: busqueda.dni,
                infracciones: `Genial, no posee infracciones`
            })
        }

    }
    else res.json(busqueda);

});

router.post('/enviarMensaje', async (req, res) => {
    let mensaje = req.body;

    if(mensaje.test(/hola|buen dia|buenos dias|buenas tardes/gi)) {
        res.send('Hola! Quieres saber si tienes infracciones pendientes?')
    }
    else if(mensaje.test(/si/gi)) {
        res.send('Perfecto, si escribes tu numero de DNI podre buscarlo por ti');
    }
    else if(mensaje.test(/no/gi)) {
        res.send('Sera en otro momento, que tengas un lindo día!')
    }
    else if(mensaje.test(/[0-9]{7,8}/)) {
        let dni = mensaje.match(/[0-9]{7,8}/);
        
        res.send('Dame un segundo...');
    }
    

});

module.exports = router;
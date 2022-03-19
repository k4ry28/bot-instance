const express = require('express');
const router = express.Router();
const controlador = require('./components/controlador');

router.get('/', (req, res) => {
    res.render('index');
});

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
        let cantidad = busqueda.infracciones.length;

        if (cantidad > 1) {
            res.json({
                nombre: busqueda.nombre,
                dni: busqueda.dni,
                infracciones: `Posee ${cantidad} infracciones.`
            });
        }
        else if (cantidad == 1) {
            res.json({
                nombre: busqueda.nombre,
                dni: busqueda.dni,
                infracciones: `Posee ${cantidad} infracción.`
            });
        }
        else {
            res.json({
                nombre: busqueda.nombre,
                dni: busqueda.dni,
                infracciones: `No posee infracciones. Genial!!`
            });
        }

    }
    else res.json(busqueda);

});


module.exports = router;
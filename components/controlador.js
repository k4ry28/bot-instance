modelo_infraccion = require('./modeloInfraccion');

async function buscarInfraccion(dni) {
    let filtro = {};

    if (dni) {
        filtro = { persona: dni }

        let infracciones = await modelo_infraccion.find(filtro)
            .populate('persona')
            .exec((error, populated) => {
                if (error) {
                    console.log('No hay infracciones con ese DNI');
                    return false;
                }
                return populated;
            })
    }


}
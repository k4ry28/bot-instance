const modelo = require('./modelo');
const Persona = modelo.Persona;
const Info = modelo.Info;


async function buscarInfraccion(dni) {

    let persona = Persona.findOne({ dni: dni })
        .populate('infracciones')
        .then(persona => {
            if (persona != null) {
                //console.log(`Tiene ${persona.infracciones.length} infracciones`);
                return persona;
            }
            else {
                return `El numero ingresado no se encuentra registrado`;
            }
        })
        .catch(error => console.log(error))

    return persona;
}

async function infoProyecto() {
    let info = await Info.find()

    return info[0];
}

module.exports = {
    buscarInfraccion,
    infoProyecto
}
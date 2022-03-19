const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const personaSchema = new Schema({
    nombre: String,
    dni: {
        type: Number,
        maximum: 8,    
        minimum: 7      
    },
    infracciones: [{
        type: Schema.Types.ObjectId, 
        ref: 'Infraccion'
    }]
});

const infraccionSchema = new Schema({
    motivo: String,
    fecha: String,
    persona: {
        type: Schema.Types.ObjectId,
        ref: 'Persona'
    }
});

const infoSchema = new Schema({
    nombre: String,
    creador: String
})

const Persona = mongoose.model('Persona', personaSchema, 'persona');
const Infraccion = mongoose.model('Infraccion', infraccionSchema, 'infraccion');
const Info = mongoose.model('Info', infoSchema, 'info');

module.exports = {
    Persona,
    Infraccion,
    Info
}
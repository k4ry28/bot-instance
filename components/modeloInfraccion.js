const mongoose = require('mongoose');

Schema = mongoose.Schema;

const mySchema = new Schema({
    motivo: String,
    fecha: String,
    persona: {
        type: Schema.ObjectId,
        ref: 'Persona'
    }
});

const model = mongoose.model('Infraccion', mySchema, 'infraccion');

module.exports = model;
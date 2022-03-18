const mongoose = require('mongoose');

Schema = mongoose.Schema;

const mySchema = new Schema({
    dni: {
        type: Number,
        maximum: 8,    
        minimum: 7      
    }
});

const model = mongoose.model('Persona', mySchema, 'persona');

module.exports = model;
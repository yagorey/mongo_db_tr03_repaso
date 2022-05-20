const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const params = { timestamps: true, strict: false, strictPopulate: false }
const schema = {
    nombre     : { type: String, default: 'Gollum' },
    apodo      : { type: String, default: 'Gollum' },
    descripcion: { type: String, default: 'Gollum' },
    edad       : { type: Number, default: 0 },
    persona    : { type: Schema.Types.ObjectId, ref: 'persona' },
    trabajo    : { type: Schema.Types.ObjectId, ref: 'trabajo' },
    raza       : { type: Schema.Types.ObjectId, ref: 'raza' },
    habilidades: [
        { type: Schema.Types.ObjectId, ref: 'habilidad' }
    ],
    relaciones:[
        {
            personaje   : { type: Schema.Types.ObjectId, ref: 'personaje' },
            tipoRelacion: { type: Schema.Types.ObjectId, ref: 'tipo_relacion' },
        }
    ],
    caracteristicas_fisicas:{
        altura: { type: Number, default: 0 },
        peso: { type: Number, default: 0 },
        genero:{
            type: String,
            enum: ['masculino', 'femenino', 'otro'],
        }
    },
    caracteristicas_rol:{
        fuerza: { type: Number, default: 0 },
        destreza: { type: Number, default: 0 },
        constitucion: { type: Number, default: 0 },
        inteligencia: { type: Number, default: 0 },
        sabiduria: { type: Number, default: 0 },
        carisma: { type: Number, default: 0 }
    }

}
const Esquema = new Schema(schema, params);
const model = mongoose.model('personaje', Esquema);

module.exports = model
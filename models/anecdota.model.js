const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const params = { timestamps: true, strict: false, strictPopulate: false }
const schema = {
    titulo   : { type: String, default: 'Gollum' },
    descripcion: { type: String, default: 'Gollum' },
    cuando     : { type: Date, default: Date.now },
    persona:{ type: Schema.Types.ObjectId, ref: 'persona' },
    lugares:[
        { type: Schema.Types.ObjectId, ref: 'lugar' }
    ],
    anecdotas_relacionadas:[
        { type: Schema.Types.ObjectId, ref: 'anecdota' }
    ],
    personajes:[
        { type: Schema.Types.ObjectId, ref: 'personaje' }
    ]
}
const Esquema = new Schema(schema, params);
const model = mongoose.model('anecdota', Esquema);

module.exports = model
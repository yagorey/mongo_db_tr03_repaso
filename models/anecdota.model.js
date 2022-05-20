const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const params = { timestamps: true, strict: false, strictPopulate: false }
const schema = {
    titulo   : { type: String, default: 'Gollum' },
    descripcion: { type: String, default: 'Gollum' },
    cuando     : { type: Date, default: Date.now }
}
const Esquema = new Schema(schema, params);
const model = mongoose.model('anecdota', Esquema);

module.exports = model
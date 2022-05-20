const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const params = { timestamps: true, strict: false, strictPopulate: false }
const schema = {
    nombre     : { type: String, default: 'Gollum' },
    direccion  : { type: String, default: 'Hogwarts' },
    estaAbierto: { type: Boolean, default: true }
}
const Esquema = new Schema(schema, params);
const model = mongoose.model('locales', Esquema);

module.exports = model
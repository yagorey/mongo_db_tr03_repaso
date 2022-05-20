const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const params = { timestamps: true, strict: false, strictPopulate: false }
const schema = {
    nombre   : { type: String, default: 'Gollum' },
    apellidos: { type: String, default: 'Gollum' },
    apodo    : { type: String, default: 'Gollum' }
}
const Esquema = new Schema(schema, params);
const model = mongoose.model('persona', Esquema);

module.exports = model
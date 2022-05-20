const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const params = { timestamps: true, strict: false, strictPopulate: false }
const schema = {
    nombre     : { type: String, default: 'Gollum' }
}
const Esquema = new Schema(schema, params);
const model = mongoose.model('raza', Esquema);

module.exports = model
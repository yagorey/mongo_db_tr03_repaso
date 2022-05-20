const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const params = { timestamps: true, strict: false, strictPopulate: false }
const schema = {
    frase: { type: String, default: 'Gollum' },
    author:{ type: String, default: 'Alguien puede ser',
    trim:true, lowercase:true, required:true },
}
const Esquema = new Schema(schema, params);
const model = mongoose.model('frases', Esquema);

module.exports = model
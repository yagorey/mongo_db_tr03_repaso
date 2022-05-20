const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const params = { timestamps: true, strict: false, strictPopulate: false }
const schema = {
    nombre: { type: String, default: 'Gollum' },
    tipo:{
        type:String,
        trim:true,
        lowercase:true,
        default: "ron",
        enum: ['cerveza', 'cachaça','absenta', 'ron',
            'tequila', 'vodka', 'ginebra', 'whisky', 'bourbon']
    }
}
const Esquema = new Schema(schema, params);
const model = mongoose.model('bebida', Esquema);

module.exports = model
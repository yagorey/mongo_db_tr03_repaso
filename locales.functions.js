const mLocales = require('./models/locales.model')
const mNoche = require('./models/noches.model')
const mBebida = require('./models/bebida.model')

const get_locales = async (req, res) => {

    // EXAMEN BASE DE DATOS
    const locales = await mLocales.find({}).sort({'nombre': 1})

    // EXAMEN DE LENGUAJE DE MARCAS
    const data = {
        title:"UN TITULO MOLON",
        locales:locales
     }
    res.render('locales/list_locales', data);

}

exports.get_locales = get_locales
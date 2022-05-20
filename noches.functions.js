const mLocales = require('./models/locales.model')
const mNoche = require('./models/noches.model')
const mBebida = require('./models/bebida.model')

const get_noches = async (req, res) => {
    const { query, params, body } = req
    const order = query.order || params.order || 'createdAt'
    let orderBy = {}
    orderBy[order] = 1

    // ARRAY
    const noches = await mNoche.find({}).sort(orderBy)

    const data = {
        noches:noches
    }

    const comparador = (a, b)=>{
        const localesA = a.locales
        const localesB = b.locales
        return (localesA.length > localesB.length) ? -1 : 1
    }
    noches.sort(comparador)

    // EJ01 -> los datos de noches
    res.render('noches', data)
}

exports.get_noches = get_noches
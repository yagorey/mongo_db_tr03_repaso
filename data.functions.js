const mLocales = require('./models/locales.model')
const mNoche = require('./models/noches.model')
const mBebida = require('./models/bebida.model')

const crear_locales = async (req, res) => {

    const locales = [
        { nombre: 'grietas', direccion: 'Calle 01' },
        { nombre: 'mosquito', direccion: 'Calle 01' },
        { nombre: 'dul_coruna', direccion: 'Calle 01' },
        { nombre: 'sham_rock', direccion: 'Calle 01' },
        { nombre: 'studio_80', direccion: 'Calle 01' },
        { nombre: 'garibaldi', direccion: 'Calle 01' },
        { nombre: 'claro_boba', direccion: 'Calle 01' }
    ]
    for (let idx = 0; idx < locales.length; idx++) {
        const local = locales[idx]
        const local_nuevo = new mLocales(local)
        await local_nuevo.save()
    }

    res.send('ok')
}

const crear_noche = async (req, res) => {
    const {query, params, body} = req

    let noche = new mNoche()
    noche.title = 'Hola, Ibuprofeno'
    noche.tengoDolor = true
    noche.dia_semana = 'Domingo'
    noche.es_resaca = true

    const objetoBusqueda = {
        estaAbierto:true
    }
    let locales = await mLocales.find(objetoBusqueda)
    const ids = locales.map(bicho => {return bicho._id})

    noche.locales = ids

    const allBebidas = await mBebida.find()

    let cubatas = []
    let obj = {
        cantidad:10,
        tipo_bebida:allBebidas[0]._id
    }
    cubatas.push(obj)

    noche.cubatas = cubatas

    noche.save().then(data=> {
        console.log('Datos Guardados', data)
        res.status(200).json(data)
    }).catch(err => {
        console.error(err)

        res.status(500).json(err)
    })


}

const get_noches = async (req, res) => {
    const {query, params, body} = req

    const noches = await mNoche.find()
    res.status(200).json(noches)
}

const get_sabado_or_resaca = async (req, res) => {

    const queryOr = {
        $or:[
            {dia_semana:'Sabado'},
            {es_resaca:true}
        ]
    }

    const noches = await mNoche.find(queryOr)
        .sort({'createdAt': -1})
        .populate('locales cubatas.tipo_bebida')

}

const get_noches_malas = async (req, res) => {
    const queryOr = {
        $and:[
            {dia_semana:'Sabado'},
            {es_resaca:true},
            {tengoDolor:true}
        ]
    }

    const noches = await mNoche.find(queryOr)
        .sort({'createdAt': -1})
        .populate('locales cubatas.tipo_bebida')
}

const get_noches_en_grietas = async (req, res) => {
    const queryDb = {'locales.nombre':'grietas'}
    const noches = await mNoche.find(queryDb)
        .sort({'createdAt': -1})
        .populate('locales cubatas.tipo_bebida')

}

const get_one_noche = async (req, res) => {
    const {query, params, body} = req

    // Devuelve 1 noche con los datos de los locales y las cubatas
    const noche = await mNoche.findOne()
        .sort({'createdAt': -1})
        .populate('locales cubatas.tipo_bebida')

    // Devuelve 1 array de noches con los datos de los locales y las cubatas

    let queryDb = {
        $or:[
            {
                "quantity": {
                  $lt:20
                }
            }, {
                "price": 10
            },{
              "price":{
                $gt:35
              }
        }
        ]
    }


    const noches = await mNoche.find()
        .sort({'createdAt': -1})
        .populate('locales cubatas.tipo_bebida')

    return res.status(200).json(noche)
}

const update_one_noche = async (req, res) => {
    const {query, params, body} = req

    const noche = await mNoche.findOne()
    const _id = noche._id
    const obj = {
       title     : 'La cosa se Torció',
       dia_semana: 'Viernes'
    }

    // Actualizamos el objeto que corresponda con el _id y le cambiamos los datos según obj
    const updateData = await mNoche.updateOne({_id:_id}, {$set:obj})

    // Actualizamos el objeto noche
    noche.title = 'La cosa se Torció Mucho'
    await noche.save()


    // Guardarlo como un objeto nuevo
    delete noche._id // <- NO ENTRA, ES UN TRICK QUE OS DOY
    await noche.save()

    // Más consultas:
    // https://mongoosejs.com/docs/queries.html
}

const delete_one_noche = async (req, res) => {
    const {query, params, body} = req

    const noche = await mNoche.findOne()
    const _id = noche._id


    // Eliminamos el objeto que corresponda con el _id
    const data = await mNoche.deleteOne({_id:_id})

    // Borra el objeto noche
    await noche.remove()

    res.status(200).json(data)

}

exports.crear_locales = crear_locales
exports.crear_noche   = crear_noche
exports.get_noches    = get_noches
exports.get_one_noche = get_one_noche
exports.update_one_noche = update_one_noche
exports.delete_one_noche = delete_one_noche
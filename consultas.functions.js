const mPersonaje    = require('./models/personaje.model')
const anecdota      = require('./models/anecdota.model')
const capitulo      = require('./models/capitulo.model')
const habilidad     = require('./models/habilidad.model')
const lugar         = require('./models/lugar.model')
const persona       = require('./models/persona.model')
const raza          = require('./models/raza.model')
const trabajo       = require('./models/trabajo.model')
const tipo_relacion = require('./models/tipo_relacion.model')


// find()
const query_find = async (req, res) => {

    const dbQuery = {
        nombre: 'Jorge'
    }

    // Devuelve SIEMPRE un array
    const personajes = await persona.find(dbQuery)

    res.send(personajes)
}

// findOne()
const query_findOne = async (req, res) => {

        const dbQuery = {
            'caracteristicas_rol.fuerza': { $gte: 20 }
        }

        // Primer Objeto que cumpla la condición
        // Devuelve SIEMPRE un objeto
        const personaje = await mPersonaje.findOne(dbQuery)

        res.send(personaje)
}

// findById()
const query_findById = async (req, res) => {
    const dbQuery = {
        'caracteristicas_rol.fuerza': { $gte: 20 }
    }
    const personaje = await mPersonaje.findOne(dbQuery)

    // En personaje.raza está el ID de la raza
    const raza = await raza.findById(personaje.raza)
    const trabajo = await trabajo.findById(personaje.trabajo)


    res.send(personaje)
}

// populate()
const query_populate = async (req, res) => {
    const dbQuery = {
        'caracteristicas_rol.fuerza': { $gte: 20 }
    }
    const personaje = await mPersonaje.findOne(dbQuery).populate('raza trabajo')

    // Son los objetos, no el ID
    const raza = personaje.raza
    const trabajo = personaje.trabajo

}

// updateOne()
const query_updateOne = async (req, res) => {
    const dbQuery = {
        'caracteristicas_rol.fuerza': { $gte: 20 }
    }
    const personaje = await mPersonaje.findOne(dbQuery)

    const raza = await raza.findOne()
    const trabajo = await trabajo.findOne()

    const update = {
        nombre: 'Jorge',
        apellido: 'Gonzalez',
        edad: 30,
        raza: raza._id,
        trabajo: trabajo._id
    }

    // Solo actualiza el primer objeto que cumpla la condición
    const nPesonaje = await mPersonaje.updateOne(dbQuery, update)
}

// updateMany
const query_updateMany = async (req, res) => {
    const dbQuery = {
        'caracteristicas_rol.fuerza': { $gte: 20 }
    }
    const personaje = await mPersonaje.findOne(dbQuery)

    const raza = await raza.findOne()
    const trabajo = await trabajo.findOne()

    const update = {
        nombre: 'Jorge',
        apellido: 'Gonzalez',
        edad: 30,
        raza: raza._id,
        trabajo: trabajo._id
    }

    // Actualiza todos los objetos que cumplan la condición
    const nPesonaje = await mPersonaje.updateMany(dbQuery, update)
}


// findByIdAndUpdate()
const query_findByIdAndUpdate = async (req, res) => {
    const dbQuery = {
        'caracteristicas_rol.fuerza': { $gte: 20 }
    }
    const personaje = await mPersonaje.findOne(dbQuery)

    const raza = await raza.findById(personaje.raza)
    const trabajo = await trabajo.findById(personaje.trabajo)

    const newPersonaje = await mPersonaje.findByIdAndUpdate(personaje._id, {
        nombre: 'Jorge',
        trabajo: trabajo._id,
        raza: raza._id
    })

    res.send(newPersonaje)
}

// get the first 20 elements of personajes
const query_limit = async (req, res) => {
    const personajes = await mPersonaje.find().limit(20)

    for (let idx = 0; idx < personajes.length; idx++) {
        let personaje = personajes[idx];

        // get random string with 16chars
        let randomString = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        personaje.nombre = randomString;
        await personaje.save();

    }

    res.send(personajes)
}


// Ejemplo de save sobre personaje
const query_save = async (req, res) => {
    const personaje = new mPersonaje({
        nombre: 'Jorge',
        apellido: 'Gonzalez',
        edad: 30,
        raza: '5c9c9f9e9f4c4e0014d8b6a3',
        trabajo: '5c9c9f9e9f4c4e0014d8b6a3'
    })

    const nPersonaje = await personaje.save()

    res.send(nPersonaje)
}

// remove()
const query_remove = async (req, res) => {
    const dbQuery = {
        'caracteristicas_rol.fuerza': { $gte: 20 }
    }

    const personaje = await mPersonaje.findOne(dbQuery)

    const data = await personaje.remove()

    res.send(personaje)
}

// findAndRemove()
const query_findAndRemove = async (req, res) => {
    const dbQuery = {
        'caracteristicas_rol.fuerza': { $gte: 20 }
    }

    const data = await mPersonaje.findAndRemove(dbQuery)

    res.send(dbQuery)
}

// Nuevo Objeto desde Otro
const query_newFromOther = async (req, res) => {
    const dbQuery = {
        'caracteristicas_rol.fuerza': { $gte: 20 }
    }

    const personaje = await mPersonaje.findOne(dbQuery)

    const newPersonaje = await mPersonaje.create(personaje)

    res.send(newPersonaje)
}

// Nuevo Objeto desde Otro
const query_newFromOther_2 = async (req, res) => {
    const dbQuery = {
        'caracteristicas_rol.fuerza': { $gte: 20 }
    }

    let personaje = await mPersonaje.findOne(dbQuery)

    personaje.isNew=false
    delete personaje._id
    await personaje.save()

    res.send(newPersonaje)
}
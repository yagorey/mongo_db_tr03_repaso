const mPersonaje    = require('./models/personaje.model')
const anecdota      = require('./models/anecdota.model')
const capitulo      = require('./models/capitulo.model')
const habilidad     = require('./models/habilidad.model')
const lugar         = require('./models/lugar.model')
const persona       = require('./models/persona.model')
const raza          = require('./models/raza.model')
const trabajo       = require('./models/trabajo.model')
const tipo_relacion = require('./models/tipo_relacion.model')

// Greater Than => $gt
const op_gt = async (req, res) => {

        // Busca un personaje que tenga fuerza > 20
        const dbQuery = {
            'caracteristicas_rol.fuerza': { $gt: 20 }
        }
        const personajes = await mPersonaje.find(dbQuery)

        res.send(personajes)
}

// Lower Than => $lt
const op_lt = async (req, res) => {
    const dbQuery = {
        'caracteristicas_rol.fuerza': { $lt: 20 }
    }
    const personajes = await mPersonaje.find(dbQuery)

    res.send(personajes)
}


// Greater Than Equals => $gte
const op_gte = async (req, res) => {

    // Busca un personaje que tenga fuerza >= 20
    const dbQuery = {
        'caracteristicas_rol.fuerza': { $gte: 20 }
    }
    const personajes = await mPersonaje.find(dbQuery)

    res.send(personajes)
}

// Lower Than Equals => $lte
const op_lte = async (req, res) => {
    const dbQuery = {
        'caracteristicas_rol.fuerza': { $lte: 20 }
    }
    const personajes = await mPersonaje.find(dbQuery)

    res.send(personajes)
}

// AND => $and <- Sin El
const op_and = async (req, res) => {
    const dbQuery = {
        'caracteristicas_rol.fuerza': { $gte: 20 },
        'caracteristicas_rol.fuerza': { $lte: 20 }
    }
    const personajes = await mPersonaje.find(dbQuery)

    res.send(personajes)
}


// AND => $and <- Con El
const op_and_2 = async (req, res) => {
    const dbQuery = {
        $and: [
            {'caracteristicas_rol.fuerza':{ $gte: 15 }},
            {'caracteristicas_rol.fuerza':{ $lte: 40 }}
        ]
    }
    const personajes = await mPersonaje.find(dbQuery)

    res.send(personajes)
}

// OR => $or
const op_or = async (req, res) => {
    const dbQuery = {
        $or: [
            {'caracteristicas_rol.fuerza':{ $gte: 20 }},
            {'caracteristicas_rol.fuerza':{ $lte: 20 }}
        ]
    }
    const personajes = await mPersonaje.find(dbQuery)

    res.send(personajes)
}

// IN => $in
const op_in = async (req, res) => {
    const dbQuery = {
        'caracteristicas_rol.fuerza': { $in: [20, 30, 40] }
    }
    const personajes = await mPersonaje.find(dbQuery)

    res.send(personajes)
}

// Between => $gte, $lte
const op_between = async (req, res) => {
    const dbQuery = {
        'caracteristicas_rol.fuerza': { $gte: 20, $lte: 40 }
    }
    const personajes = await mPersonaje.find(dbQuery)

    res.send(personajes)
}

// Between => $between
const op_between_2 = async (req, res) => {
    const dbQuery = {
        'caracteristicas_rol.fuerza': { $between: [20, 40] }
    }
    const personajes = await mPersonaje.find(dbQuery)
    res.send(personajes)
}

// Not Equals => $ne
const op_ne = async (req, res) => {
    const dbQuery = {
        'caracteristicas_rol.fuerza': { $ne: 20 }
    }
    const personajes = await mPersonaje.find(dbQuery)

    res.send(personajes)
}

// Equals => $eq
const op_eq = async (req, res) => {
    const dbQuery = {
        'caracteristicas_rol.fuerza': { $eq: 20 }
    }
    const personajes = await mPersonaje.find(dbQuery)

    res.send(personajes)
}

// Equals => $eq <- Sin El
const op_eq_2 = async (req, res) => {
    const dbQuery = {
        'caracteristicas_rol.fuerza': 20
    }
    const personajes = await mPersonaje.find(dbQuery)

    res.send(personajes)
}

// Exists => $exists
const op_exists = async (req, res) => {
    const dbQuery = {
        'caracteristicas_rol.fuerza': { $exists: true }
    }
    const personajes = await mPersonaje.find(dbQuery)

    res.send(personajes)
}

// String que contenga el texto
const op_contains = async (req, res) => {
    const textABuscar = 'Pepito'
    const dbQuery = {
        'nombre':  { $regex: textABuscar, $options: 'i' }
    }
    const personajes = await mPersonaje.find(dbQuery)

    res.send(personajes)
}
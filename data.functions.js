const mPersonaje = require('./models/personaje.model')

const buscar_personajes = async (req, res) => {

    // Busca un personaje que tenga fuerza > 20
    // GREATHER THAN => GOKU TONTOCULO
    const dbQuery = {
        'caracteristicas_rol.fuerza': { $gt: 20 }
    }
    const personajes = await mPersonaje.find(dbQuery)

}

const crear_locales = async (req, res) => {

    let personaje = new mPersonaje()
    personaje.nombre = 'Gollum'
    personaje.apodo = 'Gollum'

    personaje.caracteristicas_fisicas = {
        altura: 1.80,
        peso: 80,
        genero: 'masculino'
    }

    let cRol = {
        fuerza: 10,
        destreza: 10,
        constitucion: 10,
        inteligencia: 10,
        sabiduria: 10,
    }
    personaje.caracteristicas_rol = cRol

    const fuerza = personaje.caracteristicas_rol.fuerza

    await personaje.save()


    res.send('ok')
}

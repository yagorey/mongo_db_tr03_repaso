const mPersonaje = require('./models/personaje.model')

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


## Modelo - JSON
{
    "id" : 1,
    "title" : "Hola, Ibuprofeno",
    "tengoDolor" : true,
    "dia_semana" : "Domingo",
    "es_resaca" : true,
    "locales":{
        "grietas":true,
        "mosquito":false,
        "dul_coruna":true,
        "sham_rock":true,
        "studio_80":true,
        "garibaldi":true,
        "claro_boba":true
    },
    "cubatas" : [
        {
            "ron" : 10
        },
        {
            "rtvg" : 1
        },
        {
            "ronroneo" : 5
        },
        {
            "cervezas" : 666
        }
    ],
    "monedas" : [
        1,
        2,
        5,
        10,
        20,
        50,
        100,
        200,
        500
    ]
}

### Buscar las entradas que dentro de cubatas tengo 10 rones
db.getCollection('afasfa').find({"cubatas":{"ron":10}})
db.getCollection('afasfa').find({"cubatas.ron":10})

### Buscar los que tengas monedas de 2€uros
db.getCollection('afasfa').find({"monedas":2})

### Buscar los que hayan ido al sham_rock
db.getCollection('afasfa').find({"locales.sham_rock":true})

### Buscar los que NO tengan el sex_Machine entre los locales
db.getCollection('afasfa').find({"locales.sex_machine":{ $exists:false}})

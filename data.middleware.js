
exports.llamada = (req, res, next) => {

    console.log('HAGO COSAS')

    for (let i = 0; i < 10; i++) {
        console.log(i)
    }

    // do a random 1-10
    let random = Math.floor(Math.random() * 10) + 1;
    if (random % 2 == 0) {
        res.send('CAGATE LORITO')
    }else{
        next()
    }

}
'use strict';

function escribeTras2Segundos(texto, instruccionsParaDespues) {
    setTimeout(function(){
        console.log(texto);
        instruccionsParaDespues()
}, 2000)
}


//escribeTras2Segundos('texto1', function(){
//  escribeTras2Segundos('texto2', function(){
//    console.log('fin')
//   })
//})


// fecha 22 - 10 - 2024

// creacion de bucle en serie:
// 1º
//for (let n= 1; n < 5; n++) {
//    escribeTras2Segundos('texto1', function() {
//        console.log('fin')
//    })
//}


/* sería un bucle infinito 
para controlarlo con n = n - 1 y si n == 0 , se termina el bucle con el return*/

function serie(n, fn, callback) {
    if (n == 0) {
        //termino el bucle
        callback();
        return
    }
    n = n - 1
    fn('Texto' + n, function() {
        serie(n, fn, callback)
    })
}

serie(5, escribeTras2Segundos, function(){
    console.log('fin')
})
/* sería un bucle infinito 
para controlarlo con n = n - 1 y si n == 0 , se termina el bucle con el return*/

'use strict';

function escribeTras2Segundos(texto, instruccionsParaDespues) {
    setTimeout(function(){
        console.log(texto);
        instruccionsParaDespues()
}, 2000)
}

escribeTras2Segundos('texto1', function(){
    escribeTras2Segundos('texto2', function(){
        console.log('fin')
    })
})
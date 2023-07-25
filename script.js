import { barcelona, roma, paris, londres } from './ciudades.js'

//Obtener los elementos del DOM
let enlaces = document.querySelectorAll('a')
let tituloElemento = document.getElementById('titulo')
let subtituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')
console.log(enlaces)

enlaces.forEach(function (enlace) {
    enlace.addEventListener('click', function () {
        enlaces.forEach(function (enlace) {
            enlace.classList.remove('active');
        });


        this.classList.add('active')

        let contenido = obtenerContenido(this.textContent)

        tituloElemento.innerHTML = contenido.titulo
        subtituloElemento.innerHTML = contenido.subtitulo
        parrafoElemento.innerHTML = contenido.parrafo
    });
});

function obtenerContenido(enlace) {
    let contenido = {
        'Barcelona': barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres
    };
    return contenido[enlace];
}
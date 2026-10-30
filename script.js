const boton = document.querySelector('.boton');
const lista = document.querySelector('ul');
const opciones = document.querySelectorAll('li');



boton.addEventListener('click', () => {
    lista.classList.toggle('abierto');
    document.querySelector('.flecha').classList.toggle('girada');

});


opciones.forEach(opcion => {
    opcion.addEventListener('click', () => {
        //cambiamos el texto  boton sumandole la  flechita
        boton.innerHTML = opcion.textContent + '<span class= "flecha">&#9660;</span>';

        //con esto le quitamos la opcion seleccionado a todas las opciones 
        opciones.forEach(item => item.classList.remove('seleccionado'));

        // le damos la clase selccionado a la unica que tiene el click
        opcion.classList.add('seleccionado');

        //con estp cerramos el menu
        lista.classList.remove('abierto');

    });
});
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigosSecretos = [];

function agregarAmigo() {
    let ElementoHTML = document.getElementById('amigo').value;
    
    //Ingresar al array
    if (ElementoHTML !== '') {
        amigosSecretos.push(ElementoHTML);
    } else {
        alert('por favor, ingresa un nombre');
    }

    limpiarCaja();
    console.log(amigosSecretos);
    return;
}

function limpiarCaja(){
    document.getElementById('amigo').value = '';
}


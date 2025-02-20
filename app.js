// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigosSecretos = [];
let ElementoHTML = '';

function agregarAmigo() {
    ElementoHTML = document.getElementById('amigo').value;
    
    //Ingresar al array
    if (ElementoHTML !== '') {
        amigosSecretos.push(ElementoHTML);
        
    } else {
        alert('por favor, ingresa un nombre');
    }

    limpiarCaja();
    recorreArray();
   
    console.log(amigosSecretos);
    return;
}

function limpiarCaja(){
    document.getElementById('amigo').value = '';
}

function recorreArray() {
    let ElementoListaAmigos = document.getElementById('listaAmigos');
    ElementoListaAmigos.innerHTML = "";

    for (let i = 0; i < amigosSecretos.length; i++) {
        let nuevoAmigo = document.createElement('li');
        nuevoAmigo.textContent = amigosSecretos[i];
        ElementoListaAmigos.appendChild(nuevoAmigo);
    }
}


// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigosSecretos = [];
let ElementoHTML = '';
let numeroSorteo = 0;

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
    return;
}

function generarSorteo() {
    numeroSorteo = Math.floor(Math.random() * 4);
    return numeroSorteo;
}

function sortearAmigo() {
    if (amigosSecretos.length !== 0) {
        let amigoGanador = amigosSecretos[numeroSorteo];
        let ElementoHTMLGanador = document.getElementById('resultado');
        ElementoHTMLGanador.innerHTML = amigoGanador;
    } else {
        alert('Se requiere agregar amigos a la lista');
    }
    return;
}

generarSorteo();

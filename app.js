// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres
/** @type {string[]} */
let amigo = [];

// Función para mostrar la lista de amigos en HTML
function mostrarListaAmigos() {
    // Obtener el elemento de la lista
    const lista = document.getElementById('listaAmigos');
    
    // Limpiar la lista existente
    lista.innerHTML = "";
    
    // Iterar sobre el arreglo
    for (let i = 0; i < amigo.length; i++) {
        // Crear un nuevo elemento de lista
        const elementoLista = document.createElement('li');
        elementoLista.textContent = amigo[i];
        
        // Agregar el elemento a la lista
        lista.appendChild(elementoLista);
    }
}

// Función para agregar amigos (llamada desde el HTML)
function agregarAmigo() {
    // Obtener el valor del input
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();
    
    // Validar que no esté vacío
    if (nombre !== '') {
        // Agregar el nombre al array
        amigo.push(nombre);
        
        // Limpiar el input
        input.value = '';
        
        // Mostrar la lista actualizada
        mostrarListaAmigos();
        
        // Mostrar mensaje de confirmación
        console.log('Amigo agregado:', nombre);
        console.log('Lista actual:', amigo);
    } else {
        alert('Por favor, inserte un nombre.');
    }
}

// Función para sortear los amigos
function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigo.length === 0) {
        alert('Por favor, agregue al menos un amigo antes de sortear.');
        return;
    }
    
    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigo.length);
    
    // Obtener el nombre sorteado
    const amigoSorteado = amigo[indiceAleatorio];
    
    // Mostrar el resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
    
    // Mostrar en consola para debugging
    console.log('Amigo sorteado:', amigoSorteado);
    console.log('Índice aleatorio:', indiceAleatorio);
}

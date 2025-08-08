// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres
/** @type {string[]} */
let amigo = [];

//Función para agregar amigos
document.getElementById('agregar').addEventListener('click', () => {
    // Obtener el valor del input
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();
    
    // Validar que no esté vacío
    if (nombre !== '') {
        // Agregar el nombre al array
        amigo.push(nombre);
        
        // Limpiar el input
        input.value = '';
        
        // Mostrar mensaje de confirmación
        console.log('Amigo agregado:', nombre);
        console.log('Lista actual:', amigo);
    } else {
        alert('Por favor, inserte un nombre.');
    }
});
import { Leon, Lobo, Oso, Serpiente, Aguila } from './clases/tipos.js'
import { multimedia } from './data.js'

let animalesSeleccionados = [];

const btnRegistrar = document.getElementById("btnRegistrar");
const animalDom = document.getElementById("animal");
const edadDom = document.getElementById("edad");
const comentaDom = document.getElementById("comentarios");
const previewDom = document.getElementById("preview");
const modalDom = document.getElementById("exampleModal");
const tablaAnimales = document.getElementById("Animales");

// Función para validar ingreso/seleccion de datos al formulario.
const validarFormulario = () => {
    const nombre = animalDom.value;
    const edad = edadDom.value;
    const comentarios = comentaDom.value;

    if (nombre == 'Seleccione un animal' || edad == 'Seleccione un rango de años' || comentarios == '') {
        alert('Por favor complete todos los campos del formulario')
        return false
    }
    return true
}


// Evento de cambio de la imagen del preview (al final del formulario).
animalDom.addEventListener("change", async (event) => {
    const animalSelected = event.target.value;
    const imagenSrc = (await multimedia(animalSelected)).imagen;
    previewDom.parentElement.classList.remove("p-5");
    previewDom.style.backgroundImage = `url(${imagenSrc})`
});

// Funcion que crea Instancia de animales, Card para mostrar en la tabla y Modal.
const crearAnimal = async (animal) => {
    const nombre = animalDom.value;
    const edad = edadDom.value;
    const comentarios = comentaDom.value;
    const imagen = (await multimedia(animal)).imagen;
    const sonido = (await multimedia(animal)).sonido;
    let nuevoAnimal;

    switch (animal) {
        case 'Leon':
            nuevoAnimal = new Leon(nombre, edad, imagen, comentarios, sonido)
            break
        case 'Lobo':
            nuevoAnimal = new Lobo(nombre, edad, imagen, comentarios, sonido)
            break
        case 'Oso':
            nuevoAnimal = new Oso(nombre, edad, imagen, comentarios, sonido)
            break
        case 'Serpiente':
            nuevoAnimal = new Serpiente(nombre, edad, imagen, comentarios, sonido)
            break
        case 'Aguila':
            nuevoAnimal = new Aguila(nombre, edad, imagen, comentarios, sonido)
            break
    }

    animalesSeleccionados.push(nuevoAnimal);
    const index = animalesSeleccionados.length - 1;
    const cardAnimal = crearAnimalCard(nuevoAnimal, index);
    const contenedor = document.createElement("div");
    contenedor.innerHTML = cardAnimal;
    tablaAnimales.appendChild(contenedor);
    //const modalAnimal = crearModal(nuevoAnimal, index);
    //const contenedorModal = document.createElement("div");
    //contenedorModal.innerHTML = modalAnimal;
    //modalDom.appendChild(contenedorModal);

}

// Función para limpiar el formulario.
const limpiarForm = (nombre, edad, comentarios) => {
    nombre.selectedIndex = 0;
    edad.selectedIndex = 0;
    comentarios.value = ""
    previewDom.style.backgroundImage = 'url("./assets/imgs/lion.svg")'
}

// Función de crea Card con imagen e icono de sonido,
const crearAnimalCard = (animal, index) => {
    return `<div id="${animal.nombre}${index}"class="card text-white bg-secondary m-3">
                <p class="animal-name">${animal.nombre}</p>
                <button type="button" data-bs-toggle="modal" data-bs-target="#${animal.nombre}-${index}">
                <img style="width: 10rem;" src="${animal.img}" class ="card-top"></button>
                <div class="card-body p-1">                    
                 <img onclick="playSound('${index}')" class="p-1" height="30rem" src="./assets/imgs/audio.svg"/>
                 <audio id="animalAudio${index}">
                    <source src="${animal.sonido}" type="audio/mpeg">
                </audio>
                </div>
            </div>`
};

// Función para activar sonido de un determinado animal.
const playSound = (animalId) => {
    let audioAnimal = document.getElementById('animalAudio' + animalId)
    audioAnimal.play()
}
// Activación del sonido.
window.playSound = playSound;


// Función para crear Modal con información de nombre, edad y comentarios de un determinado animal.
const crearModal = (animal, index) => {
    return `<div class="modal fade" id="${animal.nombre}-${index}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered w-25 role=document">
                    <div class="modal-content bg-dark text-white">
                        <div class="modal-header">
                           <h5 class="modal-title" id="exampleModalLabel">${animal.nombre}</h5>
                           <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                           <img src="${animal.img}" class="img-fluid">
                           <hr>
                           <h5>Edad</h5>
                           <p>${animal.edad}</p>
                           <hr>
                          <h5>Comentarios</h5>
                          <p>${animal.comentarios}</p> 
                        </div>
                        <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>`
}

// Evento que activa funciones al hacer click en boton para el registro de un animal.
btnRegistrar.addEventListener('click', (evento) => {
    evento.preventDefault();
    if (validarFormulario()) {
        crearAnimal(animalDom.value);
        limpiarForm(animalDom, edadDom, comentaDom);

    }
});




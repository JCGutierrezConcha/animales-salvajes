import { Leon, Lobo, Oso, Serpiente, Aguila } from './clases/tipos.js'
import { multimedia } from './data.js'

let animalesSeleccionados = [];

const btnRegistrar = document.getElementById("btnRegistrar");
const animalDom = document.getElementById("animal");
const edadDom = document.getElementById("edad");
const comentaDom = document.getElementById("comentarios");
const previewDom = document.getElementById("preview");
const tablaAnimales = document.getElementById("Animales");

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


// Evento de cambio en la selección del tipo de animal
animalDom.addEventListener("change", async (event) => {
    const animalSelected = event.target.value;
    const imagenSrc = (await multimedia(animalSelected)).imagen;
    previewDom.parentElement.classList.remove("p-5");
    previewDom.style.backgroundImage = `url(${imagenSrc})`
});

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
    console.log(animalesSeleccionados)
    const index = animalesSeleccionados.length - 1;
    console.log(index)
    const cardAnimal = crearAnimalCard(nuevoAnimal, index);
    const contenedor = document.createElement("div");
    contenedor.innerHTML = cardAnimal;
    tablaAnimales.appendChild(contenedor);

}

const limpiarForm = (nombre, edad, comentarios) => {
    nombre.selectedIndex = 0;
    edad.selectedIndex = 0;
    comentarios.value = ""
    previewDom.style.backgroundImage = 'url("./assets/imgs/lion.svg")'
}

const crearAnimalCard = (animal, index) => {
    return `<div id="${animal.nombre}${index}"class="card text-white bg-secondary m-3">
                <p class="animal-name">${animal.nombre}</p>
                <img style="width: 10rem;" src="${animal.img}" class ="card-top" data-bs-toggle="modal" data-bs-target="#${animal.nombre}-${index}"/>
                <div class="card-body p-1">                    
                 <img onclick="playSound('${index}')" class="p-1" height="30rem" src="./assets/imgs/audio.svg"/>
                 <audio id="animalAudio${index}">
                    <source src="${animal.sonido}" type="audio/mpeg">
                </audio>
                </div>
            </div>`
};

const playSound = (animalId) => {
    console.log(animalId)

    let audioAnimal = document.getElementById('animalAudio' + animalId)
    audioAnimal.play()
}

const crearModal = (animalId) => {
    const animal = animalesSeleccionados[animalId]

    return `<div class="modal fade" id="${animal.nombre}-${animalId}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered w-25 role=document">
        <div class="modal-content bg-dark text-white">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">${animal.nombre}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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


btnRegistrar.addEventListener('click', (evento) => {
    evento.preventDefault();
    if (validarFormulario()) {
        crearAnimal(animalDom.value);
        limpiarForm(animalDom, edadDom, comentaDom);

    }
});




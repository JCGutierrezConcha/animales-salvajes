// Definición de la clase Animal para representar objetos de animales.

export default class Animal {
    #nombre
    #edad
    #img
    #comentarios
    #sonido
    // Constructor de la clase Animal.
    constructor(nombre, edad, img, comentarios, sonido) {
        this.#nombre = nombre;
        this.#edad = edad;
        this.#img = img;
        this.#comentarios = comentarios;
        this.#sonido = sonido;
    }

    // Getters
    get nombre() {
        return this.#nombre;
    }

    get edad() {
        return this.#edad;
    }

    get img() {
        return this.#img;
    }

    get comentarios() {
        return this.#comentarios;
    }

    get sonido() {
        return this.#sonido;
    }

    // Setters
    set nombre(nuevoNombre) {
        this.#nombre = nuevoNombre;
    }

    set edad(nuevaEdad) {
        this.#edad = nuevaEdad;
    }

    set img(nuevaImg) {
        this.#img = nuevaImg;
    }

    set comentarios(nuevoComentario) {
        this.#comentarios = nuevoComentario;
    }

    set sonido(nuevoSonido) {
        this.#sonido = nuevoSonido;
    }

}

// Definición de las clasesde los distintos tipos de animales, que gheredan de la clase Animal.
import Animal from "./animal.js";

const audioPlayer = document.getElementById("player");


class Leon extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }

    Rugir() {
        audioPlayer.src = `${this.sonido}`;
        audioPlayer.play();
    }
}

class Lobo extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }

    Aullar() {
        audioPlayer.src = `${this.sonido}`;
        audioPlayer.play();
    }
}

class Oso extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }

    Grunir() {
        audioPlayer.src = `${this.sonido}`;
        audioPlayer.play();
    }
}

class Serpiente extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }

    Sisear() {
        audioPlayer.src = `${this.sonido}`;
        audioPlayer.play();
    }
}

class Aguila extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }

    Chillar() {
        audioPlayer.src = `${this.sonido}`;
        audioPlayer.play();
    }
}

export { Leon, Lobo, Oso, Serpiente, Aguila };
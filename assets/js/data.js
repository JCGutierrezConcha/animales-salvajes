
//IIFE
const animalesData = (() => {
    const URL = './animales.json';
    const getData = async () => {
        const respuesta = await fetch(URL);
        const data = await respuesta.json();
        return data.animales
    };
    return { getData };
})();

// Función para capturar imagen y sonido de un determinado animal.
export const multimedia = async (animal) => {
    const datos = await animalesData.getData();
    const registro = datos.find((item) => item.name == animal)
    return {
        imagen: `assets/imgs/${registro.imagen}`,
        sonido: `assets/sounds/${registro.sonido}`
    }
}



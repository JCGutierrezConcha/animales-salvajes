
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

export const multimedia = async (animal) => {
    const datos = await animalesData.getData();
    const registro = datos.find((item) => item.name == animal)
    return {
        imagen: `assets/imgs/${registro.imagen}`,
        sonido: `assets/sounds/${registro.sonido}`
    }
}



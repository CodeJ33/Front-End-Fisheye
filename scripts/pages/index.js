import photographerFactory from '../factories/photographerFactory.js';
import fetchJson from '../helpers/fetchPhotographers.js';

fetchJson();

/**
 * @async
 * @function displayData
 * @param {Array} photographers 
 */
async function displayData(photographers) {
    const photographersSection = document.querySelector('.photographer_section');

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
}
/**
 * @async
 * @function init
 * @description Initialise la page en récupérant les données des photographes et en les affichant avec la fonction displayData
 */
async function init() {
    const { photographers } = await fetchJson();
    displayData(photographers);
}


export default fetchJson;

init();




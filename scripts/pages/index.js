import photographerFactory from '../factories/photographerFactory.js';

/**
 * @async
 * @function getPhotographers
 * @return {Promise<Array>} Une promesse résolue avec un tableau des photographes
 * @description On utilise l'API Fetch pour récupérer les données depuis le fichier JSON
 */
async function getPhotographers() {
    return fetch('./data/photographers.json')
        .then(res => res.json())
        .then((data) => {
            let photographers = data;
            return photographers;
        });

}

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
    const { photographers } = await getPhotographers();
    displayData(photographers);
}


export default getPhotographers;

init();




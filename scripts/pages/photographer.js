import fetchJson from '../helpers/fetchPhotographers.js';
import mediaFactory from '../factories/mediaFactory.js';
import fetchMediaJson from '../helpers/fetchMedia.js';
import photographerFactory from '../factories/photographerFactory.js';

let params = (new URL(document.location)).searchParams;
const identityId = parseInt(params.get('id'));


fetchMediaJson();
fetchJson();
photographerFactory();

let nameP = '';
let selectArea;



const photographerProfile = async () => {


    const { photographers } = await fetchJson();

    let photographer = photographers.find(photographer => photographer.id === identityId);
    console.log(photographer);


    nameP = photographer.name;


    const mainInfo = document.getElementById('photoInfo');


    const name = document.createElement('h1');
    name.setAttribute('class', 'photographer__name');
    name.setAttribute('id', 'namePhotographer');
    name.textContent = photographer.name;
    mainInfo.append(name);


    const cities = document.createElement('p');
    cities.setAttribute('class', 'photographer__country');
    cities.textContent = photographer.city + ', ' + photographer.country;
    mainInfo.appendChild(cities);


    const line = document.createElement('p');
    line.textContent = photographer.tagline;
    line.setAttribute('class', 'photographer__line');
    mainInfo.appendChild(line);


    const img = document.createElement('img');
    img.src = './assets/photographers/' + photographer.portrait;
    img.setAttribute('alt', 'Picture of ' + photographer.name);
    img.setAttribute('class', 'photographer__img');
    img.setAttribute('id', 'photoProfil');
    document.getElementById('photoHead').appendChild(img);

    selectArea = document.createElement('select');
    selectArea.setAttribute('class', 'photographer__mediaFilter');
    selectArea.setAttribute('id', 'selectAreaFilter');
    selectArea.textContent = 'Triez par';
    document.getElementById('selectAreaLabel').appendChild(selectArea);


    const options = /*html*/`
        <option class="selectMedia__options" value="Popularité">Popularité</option>
        <option class="selectMedia__options" value="Date">Date</option>
        <option class="selectMedia__options" value="Titre">Titre</option>
    `;
    selectArea.innerHTML = options;


    const photographerInsert = document.createElement('aside');
    photographerInsert.setAttribute('class', 'photographerInsert');
    document.getElementById('photographerFooter').appendChild(photographerInsert);


    const photographerInsertDiv = document.createElement('div');
    photographerInsertDiv.setAttribute('id', 'photographerInsertCount');
    photographerInsertDiv.setAttribute('class', 'photographerInsertDiv');
    photographerInsert.appendChild(photographerInsertDiv);

    const photographerInsertCountText = document.createElement('p');
    photographerInsertCountText.setAttribute('class', 'counter');
    photographerInsertDiv.appendChild(photographerInsertCountText);

    const photographerInsertLikes = document.createElement('i');
    photographerInsertLikes.setAttribute('class', 'fa fa-heart fa-solid');
    photographerInsertDiv.appendChild(photographerInsertLikes);


    const photographerInsertPrice = document.createElement('p');
    photographerInsertPrice.setAttribute('class', 'price');
    photographerInsertPrice.textContent = photographer.price + '€/jour';
    photographerInsert.appendChild(photographerInsertPrice);



};


/**
 * @async
 * @function photographerMedia
 * @returns {Promise<Array>} Une promesse résolue avec un tableau de médias
 */
async function photographerMedia() {
    const media = await fetchJson();
    const medias = media.media.filter(mediaObj => mediaObj.photographerId == identityId);
    return medias;
}


/**
 *@async 
 * @function displayMedia
 * @param {Array} medias 
 * @returns {Promise<void>}
 */
async function displayMedia(medias) {
    const mediaSection = document.querySelector('.photographeMedia');
    for (const key in medias) {
        if (Object.prototype.hasOwnProperty.call(medias,key)) {
            const media = medias[key];
            const mediaModel = mediaFactory(media);
            const mediaDOM = mediaModel.getMediaCardDOM();
            mediaSection.appendChild(mediaDOM);
        }
    }
}


/**
 * @async
 * @function pageInit
 * @returns {Promise<void>}
 */
async function pageInit() {
    const medias = await photographerMedia();
    await displayMedia(medias);
}


pageInit();

export { photographerProfile, nameP, selectArea };

import fetchJson from "./helpers/fetchPhotographers.js";
import fetchMediaJson from "../helpers/fetchMedia.js";
import mediaFactory from "./factories/mediaFactory.js";


let params = (new URL(document.location)).searchParams;
const identityId = parseInt(params.get("id"));



fetchJson();

const photographerProfile = async () => {


    const { photographers } = await fetchJson();

    let photographer = photographers.find(photographer => photographer.id === identityId);
    console.log(photographer);


    const main = document.getElementById('photoInfo');



    const name = document.createElement('h1');
    name.textContent = photographer.name;
    main.append(name);

    const cities = document.createElement('p');
    const country = document.createElement('p');
    cities.textContent = photographer.city + ', ' + photographer.country;
    main.appendChild(cities);


    const line = document.createElement('p');
    line.textContent = photographer.tagline;
    main.appendChild(line);


    const img = document.createElement('img');
    img.src = './assets/photographers/' + photographer.portrait;
    img.setAttribute("alt", "Picture of " + photographer.name);
    img.setAttribute("class", "photographer__img");
    img.setAttribute("id", 'photoProfil');
    document.getElementById('photoHead').appendChild(img);


};



async function photographerMedia() {
    const { media } = await fetchJson();
    let medias = media.filter(media => media.photographerId === identityId);
    console.log(medias);
    return medias;

}




async function displayMedia(medias) {
    const mediaSection = document.getElementsByClassName(".photographeMedia");

    medias.forEach((media) => {
        const mediaModel = mediaFactory(media);
        const mediaDOM = mediaModel.getMediaCardDOM();
        mediaSection.appendChild(mediaDOM);


    });
};



async function pageInit() {
    const { medias } = await photographerMedia();
    displayMedia(medias);
}






photographerProfile();

photographerMedia();
displayMedia();
pageInit();
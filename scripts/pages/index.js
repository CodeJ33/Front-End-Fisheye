import photographerFactory from "../factories/photographer.js";


async function getPhotographers() {
    return fetch("./data/photographers.json")
        .then(res => res.json())
        .then((data) => {
            let photographers = data;
            return photographers;
        });

}


async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
}

async function init() {
    const { photographers } = await getPhotographers();
    displayData(photographers);
}

init();




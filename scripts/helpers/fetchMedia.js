/**
 * @async
 * @function fetchMediaJson
 * @description On utilise l'API Fetch pour récupérer les données depuis le fichier JSON
 * @returns {Promise<Array>} Une promesse résolue avec les medias
 */

async function fetchMediaJson() {
    return fetch('./data/photographers.json')
        .then(res => res.json())
        .then((media) => {
            let medias = media;
            return medias;
        });
}

export default fetchMediaJson;
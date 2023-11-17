/**
 * @async
 * @function fetchJson 
 * @description On utilise l'API Fetch pour récupérer les données depuis le fichier JSON
 * @returns {Promise<Array>} Une promesse résolue avec les informations
 */




async function fetchJson() {
    return fetch('./data/photographers.json')
        .then(res => res.json())
        .then((data) => {
            let informations = data;
            return informations;
        });
}

export default fetchJson;
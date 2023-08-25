async function fetchJson() {
    return fetch("./data/photographers.json")
        .then(res => res.json())
        .then((data) => {
            let informations = data;
            return informations;
        });
}

export default fetchJson;
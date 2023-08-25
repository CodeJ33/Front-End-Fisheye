async function fetchMediaJson() {
    return fetch("./data/photographers.json")
        .then(res => res.json())
        .then((media) => {
            let medias = media;
            console.log(medias["photographerId"]);

            return medias;
        });
}

export default fetchMediaJson;
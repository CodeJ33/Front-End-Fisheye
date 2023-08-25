
function mediaFactory(media) {
    const { id, photographerId, title, image, likes, date, price } = media;

    const idMedia = `${id}`;
    const photoIdentity = `${photographerId}`
    const mediaTitle = `${title}`;
    const imageFolder = `./assets/media/${photographerId}/${image}`;
    const likesCounter = `${likes}`;
    const dateMedia = `${date}`;
    const priceMedia = `${price}`;


    function getMediaCardDOM() {

        /**
         * Création de l'article media
         */
        const divMedia = document.createElement('div');
        divMedia.setAttribute("class", "mediaPhotographer");


        return (divMedia);
    }
    return { id, title, date, price, getMediaCardDOM }
}
export default mediaFactory;
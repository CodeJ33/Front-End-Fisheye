
/**
 * @function mediaFactory
 * @param {Object} data 
 * @param {number} data.id 
 * @param {number} data.photographerId 
 * @param {string} data.title 
 * @param {string} data.image 
 * @param {string} data.video .
 * @param {number} data.likes 
 * @param {string} data.date 
 * @param {number} data.price 
 * @returns {Object}
 */
function mediaFactory(data) {
    const { id, photographerId, title, image, video, likes, date, price } = data;



    const idMedia = `${id}`;
    const mediaTitle = `${title}`;
    const imageFolder = `./assets/media/${photographerId}/${image}`;
    const videoFolder = `./assets/media/${photographerId}/${video}`;
    const likesCounter = `${likes}`;
    const dateMedia = `${date}`;



    /**
     * @function getMediaCardDOM 
     * @description fonction pour créer le media que cela soit une image ou une video 
     * @returns {HTMLElement} 
     */
    function getMediaCardDOM() {

        /**
         * Création de l'article media
         */
        const articleCard = document.createElement('article');
        articleCard.setAttribute('class', 'articleMediaPhotographer');


        /**
         * Création d'un bouton pour qu'il soit cliquable
         */
        const buttonMedia = document.createElement('button');
        buttonMedia.setAttribute('class', 'buttonMediaPhotographer');
        articleCard.appendChild(buttonMedia);



        if (image) {

            const image = document.createElement('img');
            image.setAttribute('src', imageFolder);
            image.setAttribute('alt', `Picture of ${mediaTitle}`);
            image.setAttribute('class', 'photographer__picture');
            image.setAttribute('id', idMedia);
            image.setAttribute('date', dateMedia);
            buttonMedia.appendChild(image);
        }


        if (video) {

            const video = document.createElement('video');
            video.setAttribute('src', videoFolder);
            video.setAttribute('alt', `Picture of ${mediaTitle}`);
            video.setAttribute('class', 'photographer__video');
            video.setAttribute('id', idMedia);
            video.setAttribute('date', dateMedia);
            video.controls = false;
            buttonMedia.appendChild(video);
        }

        /**
         * Création de la div contenant le titre, le compteur et le coeur
         */

        const divInfoMedia = document.createElement('div');
        divInfoMedia.setAttribute('class', 'photographer__mediaInfo');
        articleCard.appendChild(divInfoMedia);


        /**
         * Création du titre h2 avec le titre de la photo 
         * Ajout d'une classe
         */

        const h2 = document.createElement('h2');
        h2.textContent = mediaTitle;
        h2.setAttribute('class', 'photographer__mediaTitle');
        divInfoMedia.appendChild(h2);

        /**
         * Création d'un div avec le compteur et le coeur
         */


        const divInfoHeart = document.createElement('div');
        divInfoHeart.setAttribute('class', 'photographer__countHeart');
        divInfoMedia.appendChild(divInfoHeart);

        /**
        * Création des likes numériques
        */
        const mediaLikescount = document.createElement('p');
        mediaLikescount.setAttribute('class', 'likescounter');
        mediaLikescount.textContent = likesCounter;
        divInfoHeart.appendChild(mediaLikescount);

        /**
         * Création du bouton contenant le i
         */

        const buttonHeart = document.createElement('button');
        buttonHeart.setAttribute('class', 'buttonHeart');
        divInfoHeart.appendChild(buttonHeart);


        /**
         * Création du i contenant le  coeur
         */

        const mediaLikeHeart = document.createElement('i');
        mediaLikeHeart.setAttribute('class', 'fa fa-heart');
        mediaLikeHeart.setAttribute('aria-label', 'likes');
        buttonHeart.appendChild(mediaLikeHeart);


        return (articleCard);
    }
    return { id, title, date, price, getMediaCardDOM };
}
export default mediaFactory;
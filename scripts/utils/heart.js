import { photographerProfile } from '../pages/photographer.js';

/**
 * @function totalLikePhotographer
 * @description Initialise la page puis affiche le nombre de likes total sur la page du photographe en additionnant les likes déjà présents
 * puis fais un update si il y a d'autres likes ou dislikes
 * 
 */
document.addEventListener('DOMContentLoaded', function () {
    photographerProfile().then(() => {
        const counterHearts = document.querySelector('.counter');
        let totalLikes = 0;
        const updateTotalLikes = () => {
            const totalHearts = document.querySelectorAll('.photographer__countHeart p');
            totalHearts.forEach((heart) => {
                const totalHeartsValue = parseInt(heart.textContent);
                totalLikes += totalHeartsValue;

            });

            counterHearts.textContent = totalLikes.toString();
        };


        updateTotalLikes();



        /**
         * @function counterLikes
         * @description Fonction pour les coeurs avec changement de couleur et incrémentation ou décrémentation du nombre de likes
         * lors du clic sur l'un d'eux 
        */


        document.body.addEventListener('click', function (event) {
            if (event.target.className === 'fa fa-heart fa-solid full') {
                event.target.className = 'fa fa-heart';
                const elementClique = event.target;
                const divParent = elementClique.parentNode.parentElement;
                const paragraphe = divParent.querySelector('p');
                let valeur = parseInt(paragraphe.textContent);
                valeur--;
                paragraphe.textContent = valeur.toString();
                totalLikes--;
                counterHearts.textContent = totalLikes.toString();
            } else if (event.target.className === 'fa fa-heart') {
                event.target.classList.add('fa-solid');
                event.target.classList.add('full');
                const elementClique = event.target;
                const divParent = elementClique.parentNode.parentElement;
                const paragraphe = divParent.querySelector('p');
                let valeur = parseInt(paragraphe.textContent);
                valeur++;
                paragraphe.textContent = valeur.toString();
                totalLikes++;
                counterHearts.textContent = totalLikes.toString();
            }
        });
    });
});



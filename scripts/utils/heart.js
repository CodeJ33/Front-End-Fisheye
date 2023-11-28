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
    
        /**
         * @function counterLikesKeyboard
         * @description Fonction pour les coeurs avec changement de couleur et incrémentation ou décrémentation du nombre de likes
         * lorsque la touche espace est enclenchée
        */
        document.body.addEventListener('keydown', function (event) {
            if (event.code === 'Space' && event.target.classList.contains('buttonHeart')) {
                const button = event.target;
                const heart = button.querySelector('.fa-heart');
                
                const divParent = button.parentNode.parentElement;
                const paragraphe = divParent.querySelector('p');
                let valeur = parseInt(paragraphe.textContent);
                /* Si le coeur est déjà plein le rendre vide et décrémenter le nombre de likes */
                if (heart.classList.contains('fa-solid') && heart.classList.contains('full')) {
                    heart.classList.remove('fa-solid', 'full');
                    valeur--;
                    totalLikes--;
                /* Sinon le remplir et ajouter un like à l'image et au total de likes  */
                } else {     
                    heart.classList.add('fa-solid', 'full');
                    valeur++;
                    totalLikes++;
                }
        
                paragraphe.textContent = valeur.toString();
                counterHearts.textContent = totalLikes.toString();
            }
        });
    });

});



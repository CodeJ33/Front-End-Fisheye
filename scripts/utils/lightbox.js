
/**
 * @description Initialise les élements de la lightbox lors du chargement de la page  
 * et  gère le tri des médias dans la lightbox avec sortLightboxCards
 */

document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');
    const articleMediaPhotographer = document.querySelector('.photographeMedia');
    const divLightbox = document.getElementById('lightbox_modal');
    const closeButton = document.querySelector('#closeLightbox');
    const contentContainer = document.querySelector('.lightbox-content');
    const prevButton = document.querySelector('.lightbox__btnprevious');
    const nextButton = document.querySelector('.lightbox__btnnext');

    let photographerMediaElements = Array.from(articleMediaPhotographer.querySelectorAll('img, video'));
    let mediaDisplayIndex = 0;
    let photographerMediaElement = document.createElement('img');




    /**
     * @function sortLightboxCards
    * @param {number} index 
    * @description A l'aide du paramère index on vérifie si l'index est valide puis on affiche le média dans la lightbox que cela soit
    * une IMG ou une VIDEO, ajout des attributs en conséquences
     */
    function sortLightboxCards(index) {
        if (index >= 0 && index < photographerMediaElements.length) {
            divLightbox.style.display = 'flex';
            divLightbox.style.position = 'absolute';
            const media = photographerMediaElements[index];
            const mediaSrc = media.getAttribute('src') || media.getAttribute('data-src');


            if (media.tagName === 'IMG') {
                photographerMediaElement = document.createElement('img');
            } else if (media.tagName === 'VIDEO') {
                photographerMediaElement = document.createElement('video');
                photographerMediaElement.controls = true;

            }
            photographerMediaElement.src = mediaSrc;
            photographerMediaElement.setAttribute('class', 'lightboxMediaZoom');

            header.setAttribute('aria-hidden', 'false');
            main.setAttribute('aria-hidden', 'false');
            footer.setAttribute('aria-hidden', 'false');



            /* Création de l'element qui va contenir le  H2 */
            const card = media.closest('.articleMediaPhotographer');
            const titleElement = card.querySelector('.photographer__mediaTitle');
            const titleText = titleElement ? titleElement.textContent : '';
            contentContainer.innerHTML = '';
            contentContainer.appendChild(photographerMediaElement);

            /* Ajout du titre correspondant au média */
            const titleH2Element = document.createElement('h2');
            titleH2Element.textContent = titleText;
            contentContainer.appendChild(titleH2Element);

            mediaDisplayIndex = index;
        }
    }

    /**
     * @description Event listener pour ouvir la lightbox au clic suivant le média cliqué IMG OU VIDEO
     * 
    */
    articleMediaPhotographer.addEventListener('click', function (event) {
        if (event.target.tagName === 'IMG' || event.target.tagName === 'VIDEO') {

            /* Affichage ou non des élements dans la lightbox et masque sur les élements non désirables */

            photographerMediaElements = Array.from(articleMediaPhotographer.querySelectorAll('img, video'));
            const index = photographerMediaElements.indexOf(event.target);
            if (index !== -1) {
                sortLightboxCards(index);
                header.style.display = 'none';
                main.style.display = 'none';
                footer.style.display = 'none';

            }
        }
        
    });



    /**
     * @function closeClickButtonManagement
     * @description Ferme la Lightbox au clic sur la croix
     */
    closeButton.addEventListener('click', function () {
        divLightbox.style.display = 'none';
        header.style.display = 'block';
        main.style.display = 'block';
        footer.style.display = 'block';
    });

    /**
     * @function previousClickButtonManagement
     * @description Fais passer au media précédent dans la Lightbox
     */


    prevButton.addEventListener('click', () => {
        if (mediaDisplayIndex === 0) {
            mediaDisplayIndex = photographerMediaElements.length - 1;
        } else {
            mediaDisplayIndex--;
        }
        sortLightboxCards(mediaDisplayIndex);
    });

    /**
   * @function nextClickButtonManagement
   * @description Fais passer au media suivant dans la Lightbox
   */
    nextButton.addEventListener('click', () => {
        if (mediaDisplayIndex === photographerMediaElements.length - 1) {
            mediaDisplayIndex = 0;
        } else {
            mediaDisplayIndex++;
        }
        sortLightboxCards(mediaDisplayIndex);
    });
    


    
    /**
     * @function keyboardManagement 
     * @description Gestion sur les évènements claviers avec la touche espace, droite et gauche
     * Pour fermer la lightbox avec espace et aller à droite et à gauche 
     */
    document.addEventListener('keydown', function (event) {
        const isLightboxOpen = divLightbox.style.display === 'flex';

        if (event.code === 'Space') {
            // Fermer la lightbox
            divLightbox.style.display = 'none';
            header.style.display = 'block';
            main.style.display = 'block';
            footer.style.display = 'block';
        } else if (isLightboxOpen) {
            // Vérifier si la lightbox est ouverte avant de gérer les touches fléchées
            if (event.code === 'ArrowRight') {
                if (mediaDisplayIndex === photographerMediaElements.length - 1) {
                    mediaDisplayIndex = 0;
                } else {
                    mediaDisplayIndex++;
                }
                sortLightboxCards(mediaDisplayIndex);
            } else if (event.code === 'ArrowLeft') {
                if (mediaDisplayIndex === 0) {
                    mediaDisplayIndex = photographerMediaElements.length - 1;
                } else {
                    mediaDisplayIndex--;
                }
                sortLightboxCards(mediaDisplayIndex);
            }
        }
    });

   


    /**
     * @description Event listener au clavier pour ouvir la lightbox avec la touche "espace" suivant si le média cliqué IMG OU VIDEO
     */
    document.addEventListener('keydown', function (event) {
        if (event.code === 'Space') {
            const focusedElement = document.activeElement;
            const isButtonMedia = focusedElement.closest('.buttonMediaPhotographer');
    
            if (isButtonMedia) {
                photographerMediaElements = Array.from(articleMediaPhotographer.querySelectorAll('img, video'));
                const index = photographerMediaElements.indexOf(isButtonMedia.querySelector('img, video'));
    
                if (index !== -1) {
                    divLightbox.style.display = 'flex';
                    sortLightboxCards(index);
                    header.style.display = 'none';
                    main.style.display = 'none';
                    footer.style.display = 'none';
                } else {
                    sortLightboxCards(0);
                    header.style.display = 'none';
                    main.style.display = 'none';
                    footer.style.display = 'none';
                }
            }
        }
    });
    
});










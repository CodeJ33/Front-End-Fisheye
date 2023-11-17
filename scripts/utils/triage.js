

/**
 * @function sortCardsByParagraph
 * @description Fonction qui trie les médias par ordre alphabétique
 */

function sortCardsByParagraph() {
    const PhotographerCards = document.querySelectorAll('.articleMediaPhotographer');
    const cardsArray = Array.from(PhotographerCards);

    cardsArray.sort(function (a, b) {
        const textA = a.querySelector('h2').textContent.toLowerCase();
        const textB = b.querySelector('h2').textContent.toLowerCase();
        return textA.localeCompare(textB);
    });

    const parentElement = PhotographerCards[0].parentNode;

    PhotographerCards.forEach(function (card) {
        card.remove();
    });

    cardsArray.forEach(function (card) {
        parentElement.appendChild(card);
    });
}

/**
 * @function sortCardsByCounter
 * @description Fonction qui trie par nombre de likes
 */

function sortCardsByCounter() {
    const PhotographerCards = document.querySelectorAll('.articleMediaPhotographer');
    const cardsArray = Array.from(PhotographerCards);

    cardsArray.sort(function (a, b) {
        const countA = parseInt(a.querySelector('.likescounter').textContent);
        const countB = parseInt(b.querySelector('.likescounter').textContent);
        return countB - countA;
    });

    const parentElement = PhotographerCards[0].parentNode;

    PhotographerCards.forEach(function (card) {
        card.remove();
    });

    cardsArray.forEach(function (card) {
        parentElement.appendChild(card);
    });
}

/**
 * @function compareDates
 * @param {*} dateA 
 * @param {*} dateB 
 * @description Fonction qui compare les dates des médias
 * @returns {number}
 */


function compareDates(dateA, dateB) {
    /* Création d'un nouvel objet Date avec la classe Date */
    const mediaDateA = new Date(dateA);
    const mediaDateB = new Date(dateB);


    if (mediaDateA < mediaDateB) {
        return -1;
    } else if (mediaDateA > mediaDateB) {
        return 1;
    } else {
        return 0;
    }
}


/**
 * @function sortCardsByDate
 * @description Fonction qui trie les medias en utilisant la fonction précedente soit compareDates() et les réaffiche dans l'ordre chronologique
 */


function sortCardsByDate() {
    const parentElement = document.querySelector('.photographeMedia');
    const articles = Array.from(parentElement.querySelectorAll('.articleMediaPhotographer'));

    articles.sort(function (a, b) {
        const dateA = a.querySelector('img, video').getAttribute('date');
        const dateB = b.querySelector('img, video').getAttribute('date');
        return compareDates(dateA, dateB);
    });


    articles.forEach(function (article) {
        parentElement.removeChild(article);
    });


    articles.forEach(function (article) {
        parentElement.appendChild(article);
    });
}



document.addEventListener('DOMContentLoaded', function () {
    waitForSelectArea();

    /**
    * @function waitForSelectArea
    * @description Attente du chargement du SelectArea puis remplacement de celui ci par un dropdown
    */
    function waitForSelectArea() {
        const select = document.getElementById('selectAreaFilter');

        if (select) {
            const options = select.querySelectorAll('option');

            const divDropdown = document.createElement('div');
            divDropdown.classList.add('divDropdown');

            const uldropdown = document.createElement('ul');
            uldropdown.classList.add('dropdown');

            for (let i = 0; i < options.length; i++) {
                const lidropdown = document.createElement('li');
                const buttonlidropdown = document.createElement('button');
                buttonlidropdown.textContent = options[i].textContent;
                buttonlidropdown.setAttribute('class', 'buttonlidropdown');
                lidropdown.classList.add('lidropdown');
                uldropdown.appendChild(lidropdown);
                lidropdown.appendChild(buttonlidropdown);

                lidropdown.addEventListener('click', function () {
                    const selectedValue = lidropdown.textContent;
                    uldropdown.insertBefore(lidropdown, uldropdown.firstChild);

                    /* Structure conditionnelle sur le menu déroulant, suivant le choix de l'utilisateur on renvoie vers la fonction  spécifique */
                    if (selectedValue === 'Titre') {
                        sortCardsByParagraph();
                    } else if (selectedValue === 'Popularité') {
                        sortCardsByCounter();
                    } else if (selectedValue === 'Date') {
                        sortCardsByDate();
                    }

                });
            }

            const arrow = document.createElement('i');
            arrow.setAttribute('class', 'fa fa-chevron-up');
            arrow.setAttribute('id', 'chevron');
            const paraTrie = document.createElement('p');
            paraTrie.textContent = 'Trier par';

            divDropdown.appendChild(paraTrie);
            divDropdown.appendChild(uldropdown);
            uldropdown.appendChild(arrow);

            const label = document.getElementById('selectAreaLabel');
            label.parentNode.replaceChild(divDropdown, label);
            uldropdown.addEventListener('click',  function(){
                uldropdown.classList.toggle('open');
            });
           


        } else {
            setTimeout(waitForSelectArea, 50);
        }
    }
});






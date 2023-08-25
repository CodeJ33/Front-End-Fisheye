
function photographerFactory(data) {
    const { name, portrait, country, city, id, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {

        /**
         * Création de la "carte" du photographe
         * Ajout d'une classe
         */
        const article = document.createElement('article');
        article.setAttribute("class", "photographer__card");


        /**
         * Création de l'image du photographe
         * Ajout du chemin, d'un texte alternatif et d'une classe
         */
        const img = document.createElement('img');
        img.setAttribute("src", picture);
        img.setAttribute("alt", `Picture of ${name}`);
        img.setAttribute("class", "photographer__img")


        /**
         * Création de l'ancre sur la photo
         * Ajout du href et d'une classe
         */
        const anchor = document.createElement('a')
        anchor.setAttribute("href", `/photographer.html?id=${id}`);
        anchor.setAttribute("class", "photographer__link");

        /**
         * Création du titre h2 avec le nom et prénom du photographe
         * Ajout d'une classe
         */
        const h2 = document.createElement('h2');
        h2.textContent = name;
        h2.setAttribute("class", "photographer__HomeName");

        /**
         * Création de la div Texte
         * Ajout d'une classe
         */
        const divText = document.createElement('div');
        divText.setAttribute("class", "photographer__text");


        /**
         * Création du nom de la ville
         */
        const cities = document.createElement('p');
        cities.textContent = city;
        cities.setAttribute("class", "photographer__text__country");


        /**
         * Création du nom du pays
         */
        const pays = document.createElement('p');
        pays.innerHTML = country;
        pays.setAttribute("class", "photographer__text__country");




        /**
         * Création de la phrase d'accroche
         */
        const speech = document.createElement('p');
        speech.textContent = tagline;
        speech.setAttribute("class", "photographer__text__tagline");
        speech.setAttribute("id", "tagline");


        /**
         * Création du prix
         */
        const prix = document.createElement('p');
        prix.textContent = price;



        /**
         * Ajout des éléments créé à la page
         */

        article.appendChild(anchor);
        anchor.appendChild(img);
        anchor.appendChild(h2);
        article.append(divText);
        divText.appendChild(cities)
        cities.insertAdjacentHTML('beforeend', `, ${country}`);

        cities.setAttribute("id", "countries");
        divText.append(speech);
        prix.insertAdjacentHTML('beforeend', "E/jour")

        prix.setAttribute("class", "photographer__text__price")
        prix.setAttribute("id", "price");
        divText.append(prix);

        return (article);
    }
    return { name, picture, getUserCardDOM }
}
export default photographerFactory;
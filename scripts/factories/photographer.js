
function photographerFactory(data) {
    const { name, portrait, country, city, id, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {

        /**
         * Création des éléments article, img, a et h2
         */
        const article = document.createElement('article');
        article.setAttribute("class", "photographer__card");
        const img = document.createElement('img');
        img.setAttribute("src", picture);
        img.setAttribute("alt", `Picture of ${name}`);
        img.setAttribute("class", "photographer__img")
        const anchor = document.createElement('a')
        anchor.setAttribute("href", `/photographer.html?id=${id}`);
        anchor.setAttribute("class", "photographer__link");
        const h2 = document.createElement('h2');
        h2.textContent = name;
        h2.setAttribute("class", "photographer__HomeName");

        /**
         * Création de la div Texte et son contenu
         */
        const divText = document.createElement('div');
        divText.setAttribute("class", "photographer__text");
        const p = document.createElement('p');
        const c = document.createElement('p');
        const d = document.createElement('p');
        const r = document.createElement('p');
        c.textContent = city;
        c.setAttribute("class", "photographer__text__country");
        p.innerHTML = country;
        d.textContent = tagline;
        d.setAttribute("class", "photographer__text__tagline");
        d.setAttribute("id", "tagline");
        r.textContent = price;


        /**
         * Ajout des éléments créé à la page
         */
        article.appendChild(anchor);
        anchor.appendChild(img);
        anchor.appendChild(h2);

        article.append(divText);
        divText.appendChild(c)
        c.insertAdjacentHTML('beforeend', `, ${country}`);
        p.setAttribute("class", "photographer__text__country");
        c.setAttribute("id", "countries");
        divText.append(d);
        r.insertAdjacentHTML('beforeend', "E/jour")

        r.setAttribute("class", "photographer__text__price")
        r.setAttribute("id", "price");
        divText.append(r);

        return (article);
    }
    return { name, picture, getUserCardDOM }
}
export default photographerFactory;

import { nameP } from '../pages/photographer.js';

/**
 * @description  Récupération des éléments du DOM à l'initialistation de la page 
 */

document.addEventListener('DOMContentLoaded', function () {

    const divModale = document.getElementById('contact_modal');
    const header = document.querySelector('header');
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');
    const modalPhotographer = document.querySelector('.modal__name');
    const body = document.querySelector('body');





    /**
     * @description Ouvre la boite de dialogue de la modale au clic sur le bouton contact, appelle la fonction showModal()
     */
    const dialog = document.querySelector('dialog');
    document.querySelector('.contact_button').onclick = function () {
        dialog.showModal();
    };

    /**
     * @function displayModal 
     * @description function qui permet d'afficher la modale 
     * Affiche la modale et cache le reste du document (main,body, header,footer)
     * Ajoute la classe "no-scroll" au body 
     */
    function displayModal() {
        dialog.showModal();
        divModale.style.display = 'flex';
        divModale.style.position = 'absolute';
        divModale.style.border = 'none';
        divModale.setAttribute('aria-hidden', 'true');

        modalPhotographer.textContent = nameP;
        header.setAttribute('aria-hidden', 'false');
        main.setAttribute('aria-hidden', 'false');
        footer.setAttribute('aria-hidden', 'false');
        body.setAttribute('class', 'no-scroll');
    }

    /**
     * @function closeModale
     * @description fonction pour fermer la modale
    */

    function closeModal() {
        dialog.close();
        divModale.style.display = 'none';
        document.body.removeAttribute('class');
    }

    /**
     * @function setListener
     * @description récupération des éléments pour ouvrir et fermer la modale
     * déclenchement de l'ouverture ou de la fermeture de la modale selon l'élement cliqué
     */
    function setListener() {
        const btnmodal = document.querySelector('.contact_button');
        const cross = document.getElementById('cross');
        btnmodal.addEventListener('click', displayModal);
        cross.addEventListener('click', closeModal);
    }
    setListener();

    document.addEventListener('keydown', function (event) {
        if (event.code === 'Space') {
            closeModal();
        }

    });



    /**
     * @description Récupération des champs
    */


    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const mail = document.getElementById('mail');
    const textField = document.getElementsByClassName('text-danger');
    /**
     * @description Champs d'erreur masqué
    */
    firstName.innerHTML = '';
    lastName.innerHTML = '';
    mail.innerHTML = '';
    textField.innerHTML = '';



    let doc = {};
    const docu = Object.create(doc);
    console.log(docu);




    /**
     * @function checkFirstName
     * @description Fonction qui vérifie qu'un prénom a été saisi.
     * Le regex permet de s'assurer qu'il comporte bien deux lettres minimum sans chiffre ni caractères spéciaux.
     * Sinon la zone est entourée en rouge
     * @returns {boolean}
     */
    function checkFirstName() {

        const firstNameValid = document.getElementById('first');
        const nameRegex = /^[a-zA-Z-áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ\s-]{2,30}$/;
        if (nameRegex.test(firstNameValid.value) === true) {
            firstName.style.display = 'none';
            firstNameValid.style.border = '2px solid #279e7a';
            doc.firstName = firstNameValid.value;
            return true;
        }
        else {
            firstName.style.display = 'block';
            firstName.innerHTML = 'Veuillez rentrer deux caractères minimum et/ou un prénom valide';
            firstNameValid.style.border = '2px solid red';
            return false;
        }
    }



    /**
     * @function checkName
     * @description Fonction qui vérifie qu'un nom a été saisi.
     * Le regex permet de s'assurer qu'il comporte bien deux lettres minimum sans chiffre ni caractères spéciaux.
     * @returns {boolean}
     */

    function checkName() {
        const nameValid = document.getElementById('last');
        const nameRegex = /^[a-zA-Z-áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ\s-]{2,30}$/;

        if (nameRegex.test(nameValid.value) === true) {
            lastName.style.display = 'none';
            nameValid.style.border = '2px solid #279e7a';
            doc.lastName = nameValid.value;
            return true;
        } else {
            lastName.style.display = 'block';
            lastName.innerHTML = 'Veuillez rentrer deux caractères minimum et/ou un prénom valide';
            nameValid.style.border = '2px solid red';
            return false;
        }
    }

    /**
     * @function checkMail
     * @description Fonction qui vérifie qu'un mail a été saisi.
     * Le regex permet de s'assurer que c'est une date au bon format.
     * @returns {boolean}
     */

    function checkMail() {

        const mailValid = document.getElementById('email');
        const mailRegex = /^\S+@\S+\.\S+$/;

        if (mailRegex.test(mailValid.value) === true) {
            mail.style.display = 'none';
            mailValid.style.border = '2px solid #279e7a';
            doc.mail = mailValid.value;
            return true;
        } else {
            mail.style.display = 'block';
            mail.innerHTML = 'Veuillez respecter le format d\'une adresse mail';
            mailValid.style.border = '2px solid red';

            return false;
        }
    }


    /**
   * @function checkMessage
   * @description Fonction qui vérifie qu'un message d'au moins 20 caractères a été saisi.
   * @returns {boolean}
   */

    function checkMessage() {
        const textValid = document.getElementById('text');
        console.log(textValid);
        const textField = document.getElementById('textField');
        const textRegex = /^[\s\S]{20,200}$/;

        if (textRegex.test(textValid.value) === true) {
            textField.style.display = 'none';
            textValid.style.border = '2px solid #279e7a';
            doc.text = textValid.value;
            return true;
        } else {
            textField.style.display = 'block';
            textField.innerHTML = 'Veuillez faire un message d\'au moins 20 caractères';
            textValid.style.border = '2px solid red';
            return false;
        }
    }


    /** 
     * @function validate
     * @description Fonction de validation du formulaire
     *  Celle ci utilise toutes les fonctions précédentes pour vérifier si tout les champs sont valables
     * Affiche les informations dans la console
    */
    function validate(event) {
        event.preventDefault();
        if (checkFirstName() && checkName() && checkMail() && checkMessage()) {
            console.log(docu);
            closeModal();
        } else {
            alert('Votre formulaire est incomplet ou des données sont incorrectes');
        }
        event.stopPropagation();
    }



    /**
     * @function setListenersVerif
     * @description Fonction pour récupérer les évènements des différents champs de la modale 
     * Renvoie au fonction de vérification de chaque champ de chaque champ
     */
    function setListenersVerif() {
        const firstNameValid = document.getElementById('first');
        firstNameValid.addEventListener('change', checkFirstName);
        const nameValid = document.getElementById('last');
        nameValid.addEventListener('change', checkName);
        const mailValid = document.getElementById('email');
        mailValid.addEventListener('change', checkMail);
        const textValid = document.getElementById('text');
        textValid.addEventListener('change', checkMessage);
        const submit = document.getElementById('button_submit');
        submit.addEventListener('click', validate);
    }


    setListenersVerif();
});
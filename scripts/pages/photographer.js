
import photographerFactory from "../factories/photographer.js";

console.log(photographerFactory);
function getPhotographerId() {
    let params = (new URL(document.location)).searchParams;
    console.log(params)
    let identity = parseInt(params.get("id"));
    return identity
};

getPhotographerId();
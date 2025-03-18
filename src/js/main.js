//Week 1

//Importing an exported function == using a function in another file
//This function can be used as if it was declared in the file
import { getParkData } from "./parkService.mjs";

//The results of the imported function are set into this variable
const parkData = getParkData();

//DOM methods
//Update the link in the disclaimer area to read the name of the park and navigate to that park’s official site.
const disclaimer = document.querySelector(".disclaimer > a");
disclaimer.href = parkData.url;
disclaimer.innerHTML = parkData.fullName;

//Update the title of the page to read the name of the park.
document.title = parkData.fullName;

//Use the first image in the list in the data for the hero image.
const heroImage = document.querySelector(".hero-image");
heroImage.src = parkData.images[0].url;
heroImage.alt = parkData.images[0].altText || "Park banner image";

//Update the name, designation, and states of the park in the hero.
document.querySelector(".hero-banner__content").innerHTML = parkInfoTemplate(parkData);

function parkInfoTemplate(info) {
    return `<a href="/" class="hero-banner__title">${info.name}</a>
    <p class="hero-banner__subtitle">
    <span>${info.designation}</span>
    <span>${info.states}</span>
    </p>`;
}
/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples');
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        let article = document.createElement('article');
        let h3 = document.createElement('h3');
        h3.textContent = temple.pokemonName;
        let img = document.createElement('img');
        img.setAttribute('src', temple.imageUrl);
        img.setAttribute('alt', temple.type);
        article.appendChild(h3);
        article.appendChild(img);
        templesElement.appendChild(article);
    });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://perrshan.github.io/cse121b/pokemon.json");
    //check to see if the fetch was successful
    if (response.ok) {
        const data = await response.json();
        templeList = data;
        reset();
        sortBy(templeList);
    };
};

/* reset Function */
const reset = () => {
    const articles = document.querySelectorAll('article');

    for (const elem of articles){
        console.log(elem);
        elem.remove();
    }
};

/* sortBy Function */
const sortBy = (temples) => {
    let filter = document.querySelector('#sortBy');
    getTemples();
    switch(filter.value){
        case "utah":
            displayTemples(temples.filter((temple) => temple.location.includes('Utah')));
        break;
        case "notutah":
            displayTemples(temples.filter((temple) => temple.location.includes('Utah') == false));
        break;
        case "older":
            displayTemples(temples.filter((date) => parseInt(date.dedicated.split(',')[0]) < 1950));
        break;
        case "all":
            displayTemples(temples);
        break;
        default:
            displayTemples(temples);
        break;
    };
};

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => { sortBy(templeList) });

getTemples();
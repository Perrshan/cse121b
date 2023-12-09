/* W05: Programming Tasks */

/* Declare and initialize global variables */
const yourPokemon = document.querySelector('#pokemon');
const superEffective = document.querySelector('#superEffective');
const weakness = document.querySelector('#weakness');
let pokemonList = [];

/* async displayTemples Function */
const displayPokemon = (pokemon) => {
    pokemon.forEach(pokemon => {
        let article = document.createElement('article');
        let h3 = document.createElement('h3');
        h3.textContent = pokemon.pokemonName;
        let img = document.createElement('img');
        img.setAttribute('src', pokemon.imageUrl);
        img.setAttribute('alt', pokemon.name);
        console.log(pokemon.type.split(', ')[0]);
        article.appendChild(h3);
        article.appendChild(img);
        yourPokemon.appendChild(article);
    });
};

/* async getTemples Function using fetch()*/
const getPokemon = async () => {
    const response = await fetch("https://perrshan.github.io/cse121b/pokemon.json");
    //check to see if the fetch was successful
    if (response.ok) {
        const data = await response.json();
        pokemonList = data;
        reset();
        sortBy(pokemonList);
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
const sortBy = (pokemon) => {
    let filter = document.querySelector('#sortBy');
    getPokemon();
    switch(filter.value){
        case "utah":
            displayPokemon(pokemon.filter((pokemon) => pokemon.location.includes('Utah')));
        break;
        case "notutah":
            displayPokemon(pokemon.filter((pokemon) => pokemon.location.includes('Utah') == false));
        break;
        case "older":
            displayPokemon(pokemon.filter((date) => parseInt(date.dedicated.split(',')[0]) < 1950));
        break;
        case "all":
            displayPokemon(pokemon);
        break;
        default:
            displayPokemon(pokemon);
        break;
    };
};

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => { sortBy(templeList) });

getPokemon();
/* W05: Programming Tasks */

/* Declare and initialize global variables */
const yourPokemon = document.querySelector('#pokemon');
const superEffective = document.querySelector('#superEffective');
const weakness = document.querySelector('#weakness');
let pokemonList = [];
let superEffectiveList = [];
let weaknessList = [];
let effective = [];
let weak = [];
/* async displayTemples Function */
const displayYourPokemon = (pokemonList) => {
    pokemonList.forEach(pokemon => {
        if(pokemon.pokemonName == 'Squirtle'){
            let article = document.createElement('article');
            let h3 = document.createElement('h3');
            let h4 = document.createElement('h4');
            h3.textContent = pokemon.pokemonName;
            h4.textContent = pokemon.type;
            let img = document.createElement('img');
            img.setAttribute('src', pokemon.imageUrl);
            img.setAttribute('alt', pokemon.name);
            article.appendChild(h3);
            article.appendChild(img);
            article.appendChild(h4);
            yourPokemon.appendChild(article);
        }
    });
};

const displaySuperEffectivePokemon = (pokemon) => {
    pokemon.forEach(pokemon => {
        let article = document.createElement('article');
        let h3 = document.createElement('h3');
        let h4 = document.createElement('h4');
        h3.textContent = pokemon.pokemonName;
        h4.textContent = pokemon.type;
        let img = document.createElement('img');
        img.setAttribute('src', pokemon.imageUrl);
        img.setAttribute('alt', pokemon.name);
        article.appendChild(h3);
        article.appendChild(img);
        article.appendChild(h4);
        superEffective.appendChild(article);
    });
};

const displayWeakPokemon = (pokemon) => {
    pokemon.forEach(pokemon => {
        let article = document.createElement('article');
        let h3 = document.createElement('h3');
        let h4 = document.createElement('h4');
        h3.textContent = pokemon.pokemonName;
        h4.textContent = pokemon.type;
        let img = document.createElement('img');
        img.setAttribute('src', pokemon.imageUrl);
        img.setAttribute('alt', pokemon.name);
        article.appendChild(h3);
        article.appendChild(img);
        article.appendChild(h4);
        weakness.appendChild(article);
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
        case "Squirtle":
            displayYourPokemon(pokemon, filter.value);
            superEffectiveList = pokemon.filter((pokemon) => pokemon.type.includes('Fire' || 'Ground' || 'Rock'));
            displaySuperEffectivePokemon(superEffectiveList);
            weaknessList = pokemon.filter((pokemon) => pokemon.type.includes('Electric', 'Grass'));
            displayWeakPokemon(weaknessList);
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
            displayYourPokemon(pokemon);
            pokemon.forEach(pokemon => {
                if(pokemon.pokemonName == 'Squirtle'){
                    effective = pokemon.superEffective.split(", ");
                    weak = pokemon.weakness.split(", ");
                    console.log(effective);
                    console.log(weak);
                }
            });

            effective.forEach(type => {
                superEffectiveList = pokemon.filter((pokemon) => pokemon.type.includes(type));
                displaySuperEffectivePokemon(superEffectiveList);
            });

            weak.forEach(type => {
                weaknessList = pokemon.filter((pokemon) => pokemon.type.includes(type));
                displayWeakPokemon(weaknessList);
            });

        break;
    };
};

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => { sortBy(pokemonList) });

getPokemon();
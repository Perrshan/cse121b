/* Final Project */

/* Declare and initialize global variables */
const yourPokemon = document.querySelector('#pokemon');
const superEffective = document.querySelector('#superEffective');
const weakness = document.querySelector('#weakness');
const listOptions = document.querySelector('#sortBy');
let pokemonList = [];
let superEffectiveList = [];
let weaknessList = [];
let effective = [];
let weak = [];
let number = 0;

/* displayPokemon Functions */
const displayYourPokemon = (pokemonList, yourPokemonChoice) => {
    pokemonList.forEach(pokemon => {
        if(pokemon.pokemonName == yourPokemonChoice){
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

const displaySuperEffectivePokemon = (pokemon, yourPokemonChoice) => {
    pokemon.forEach(pokemon => {
        if(pokemon.pokemonName != yourPokemonChoice){
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
        }
    });
};

const displayWeakPokemon = (pokemon, yourPokemonChoice) => {
    pokemon.forEach(pokemon => {
        if(pokemon.pokemonName != yourPokemonChoice){
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
        }
    });
};


/* async getPokemon Function using fetch()*/
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
    number ++;
    let filter = document.querySelector('#sortBy');

    if(number == 1){
        pokemonList.forEach(pokemon => {
            listOptions.innerHTML += `<option value="${pokemon.pokemonName}">${pokemon.pokemonName}</option>`;
        });
    }  

    displayYourPokemon(pokemon, filter.value);
    pokemon.forEach(pokemon => {
        if(pokemon.pokemonName == filter.value){
            effective = pokemon.superEffective.split(", ");
            weak = pokemon.weakness.split(", ");
        }
    });

    console.log(effective.length);

    effective.forEach(type => {
        superEffectiveList = pokemon.filter((pokemon) => pokemon.type.includes(type));
        displaySuperEffectivePokemon(superEffectiveList, filter.value);
    });

    weak.forEach(type => {
        weaknessList = pokemon.filter((pokemon) => pokemon.type.includes(type));
        displayWeakPokemon(weaknessList, filter.value);
    });
};

getPokemon();

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => { 
    getPokemon();
    sortBy(pokemonList) });
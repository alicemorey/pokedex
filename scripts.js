
var pokemonRepository = (function(){
    let repository = [
    {
        name: 'Squirtle',
        height: 0.5,
        type: ['grass', 'electric'],
        abilities: ['Rain-dish','Torrent']
    },
    {
        name: 'Charmeleon',
        height: 1.1 ,
        type: ['rock','water'],
        abilities: ['Blaze','Solar-power']
    },
    {
        name: 'Caterpie',
        height:0.3 ,
        type: ['flying','fire'],
        abilities: ['shield-dust','run-away']
    },
    {
        name: 'Pikachu',
        height: 0.4 ,
        type: ['electric','ground'],
        abilities: ['static','lightningrod']
    },
];

function add (pokemon) {
 if ( 
    typeof pokemon === 'object'&&
    "name" in pokemon &&
    "height" in pokemon &&
    "types" in pokemon
 ) {
    repository.push (pokemon);
 } else {
    console.log ("pokemon is not correct")
    }
 }
 function getAll() {
    return repository;
 }
 let button =document.createElement("button");

 function addListItem(pokemon){
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement ("p");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listpokemon.appendChild(button);
    pokemonList.appendChild (listpokemon);
}

document.querySelector("button-class");
button.addEventListener ('click', function (event){
console.log (event.target.innerText);
});


 return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
 }; 
})();

console.log (pokemonRepository.getAll());
pokemonRepository.add ({name: "Pikachu", height: 0.3, types: ["electric"]});

console.log (pokemonRepository.getAll());

pokemonRepository.getAll().forEach (function (pokemon) {
    pokemonRepository.addListItem(pokemon);
});

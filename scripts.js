
//forEach()
//pokemonList.forEach(function(pokemonList) {
    //document.write(pokemonList.name + 'is'+ pokemonList.height + ""+ 'high'+ '<br>');
  //});

// IIFE 


let pokemonRepository = (function(){
let pokemonList = [
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
    }
];

return {
    add: function (pokemon) {
        pokemonList.push(pokemon);    
    }
    getAll: function (){
        return pokemonList;
    }
};
})();
console.log(pokemonRepository.getAll ());
pokemonRepository.add ({name: 'Squirtle'});
console.log (pokemonRepository.getAll());








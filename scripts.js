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
]
for (let i = 0; i < pokemonList.length; i++){
document.write("<p>" + pokemonList[i].name + "</p>");
  
}

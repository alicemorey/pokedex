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

for (let i=0; i<pokemon.length; i++) {
    document.write (pokemonList (i).name + ' (height:' pokemonList (i).height +')');
    if (pokemonList(i).height<=1.0) {
        document.write ('<br>');
    }else{
        document.write ('That is a big pokemon!');
        document.write ('<br>');
    
    }

    
}

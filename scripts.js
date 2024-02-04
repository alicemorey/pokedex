// pokemon list
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

//forEach()
pokemonList.forEach(function(pokemonList) {
    document.write(pokemonList.name + 'is'+ pokemonList.height + ""+ 'high'+ '<br>');
  });

 //loop pokemonList + height
//for (let i = 0; i < pokemonList.length; i++){
//document.write("<p>" + pokemonList[i].name +':'+ pokemonList [i].height +':'+ pokemonList [i]. type + "</p>");
//}

// special character list
//if (pokemonList[i].height >= 1.0) 
//document.write( "That\'s a big pokemon!")

//if (pokemonList[i].height <= 1.0) {
  //  document.write('That is a small pokemon!' , pokemonList);
    //}else{
      //  document.write('That\'s a big pokemon!');}







let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

 //show details of Pokemon using Modals
 let modalContainer = document.querySelector('#modal-container');
 function showModal(title, text, img) {
  modalContainer.innerHTML= '';

  let modal= document.createElement ('div');
  modal.classList.add ('modal');

  let closeButtonElement =document.createElement ('button');
  closeButtonElement.classList.add ('modal-close');
  closeButtonElement.innerText= 'close';
  closeButtonElement.addEventListener ('click',hideModal);

  let titleElement= document.createElement ('h1');
  titleElement.innerText= title;

  let contentElement = document.createElement ('p');
  contentElement.innerText = text;

  let imageElement =document.createElement ("img");
  imageElement.setAttribute("src", img);
  imageElement.setAttribute ("width", "30");
  imageElement.setAttribute ("height", "30");
  imageElement.setAttribute ("alt", "Pokemon image");

  modal.appednChild (closeButtonElement);
  modal.appendChild (titleElement);
  modal.appendChild (contentElement);
  modal.appendChild (imageElement);
  modalContainer.appendChild (modal);

  modalContainer.classList.add ('is-visible');
 }

 function hideModal(){
  modalContainer.classList.remove ('is-visible');
 }

window.addEventListener('keydown', (e)=> {
  if (e.key === 'Escape' &&
  modalContainer.classList.contains ('is-visible')){
    hideModal();
  }
});

modalContainer.addEventListener('click', (e) => {
  let target = e.target;
  if (target === modalContainer) {
    hideModal();
  }
});

function add(item){
  pokemonList.push (item);
}


function add (pokemon) {
if ( 
  typeof pokemon === 'object'&&
  "name" in pokemon &&
  "detailsUrl" in pokemon
) {
  pokemonList.push (pokemon);
} else {
  console.log ("pokemon is not correct")
  }
}
function getAll() {
  return pokemonList;
}
function addListItem(pokemon){
  let pokemonList = document.querySelector(".pokemon-list");
  let listpokemon = document.createElement ("p");
  let button =document.createElement("button");
  button.innerText = pokemon.name;
  button.classList.add("button-class");
  listpokemon.appendChild(button);
  pokemonList.appendChild (listpokemon);
  button.addEventListener ('click', function (event){
      showDetails (pokemon);
      });
  }
  function loadList() {
      return fetch(apiUrl).then(function (response) {
        return response.json();
      }).then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url,
            height: item.height,
          };
          add(pokemon);
          console.log(pokemon);
        });
      }).catch(function (e) {
        console.error(e);
      })
    }

function loadDetails(item) {
  let url = item.detailsUrl;
  return fetch(url).then(function (response) {
    return response.json();
  }).then(function (details) {
    item.imageUrl = details.sprites.front_default;
    item.height = details.height;
    item.types = details.types;
  }).catch(function (e) {
    console.error(e);
  });
}
function showDetails(item) {
  pokemonRepository.loadDetails(item).then(function () {
    showModal(pokemon)
      });
    }

return {
  add: add,
  getAll: getAll,
  addListItem: addListItem,
  loadList: loadList,
  loadDetails: loadDetails,
  showDetails: showDetails,
  addListItem: addListItem
}; 
})();

pokemonRepository.add({ name: 'bulbasaur', height: 1, logo: "img/001.png" });

pokemonRepository.loadList().then (function(){
pokemonRepository.getAll().forEach (function (pokemon) {
pokemonRepository.addListItem(pokemon);
});
})

  let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=80";
  let modalContainer= document.querySelector("#modal-container");

 //show details of Pokemon using Modals
 //let modalContainer = document.querySelector("#modal-container");

 function showModal(pokemon) {
  let modalTitle= document.getElementById ("modalTitle");
  let modalBody= document.getElementById ("modalBody");

  modalTitle.innerText = pokemon.name;

  //clear the modal body content
  modalBody.innerHTML="";

  //create elements to display pokemon details
  let heightElement= document.createElement ("p");
  heightElement.innerHTML= "Height:" + pokemon.height;

  let imageElement= document.createElement ("img");
  imageElement.setAttribute ("src", pokemon.imageUrl);
  imageElement.setAttribute ("alt", "Pokemon Image");
  imageElement.classList.add ("img-fluid"); // make image responsive

  // append elements to the modal body
  modalBody.appendChild (heightElement);
  modalBody.appendChild (imageElement);

  // show modal
  modalContainer.classList.add("show");
  modalContainer.style.display = "block";
 }

 // event listener for the 'close' button inside the modal
  let closeButton = document.querySelector (".modal-close");
  closeButton.addEventListener("click", hideModal);
 
window.addEventListener("keydown", (e)=> {
  if (e.key === "Escape" && modalContainer.classList.contains ("show")){
    hideModal();
  }
});

function hideModal(){
  modalContainer.classList.remove("show");
  modalContainer.style.display = "none";
 }

function add (pokemon) {
if ( typeof pokemon === "object"&&"name" in pokemon && "detailsUrl" in pokemon
) {
  pokemonList.push (pokemon);
} else {
  console.log ("pokemon is not correct")
  }
}

function getAll() {
  return pokemonList;
}

function addListItem(pokemon) {
  var container = document.getElementById("pokemon-container");
  var listItem = document.createElement("button");
  listItem.classList.add ("btn", "btn-primary", "list-group-item") // Bootstrap button classes
  listItem.setAttribute = ("data-toggle", "modal"); // Add data toogle attribute for modal 
  listItem.setAttribute = ("data-target", "#modal-container"); // add data target attribute to link modal 
  listItem.innerText= pokemon.name; // display pokemon name on button
  listItem.addEventListener ("click", function(){
  showDetails (pokemon);
  });

  container.appendChild(listItem); // Appending the list item to the container
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
        });
      })
      .catch(function (e) {
        console.error(e);
      });
    }

function loadDetails(item) {
  let url = item.detailsUrl;
  return fetch(url).then(function (response) {
    return response.json();
  })
  .then(function (details) {
    item.imageUrl = details.sprites.front_default;
    item.height = details.height;
    item.types = details.types;
  }).catch(function (e) {
    console.error(e);
  });
}

//show pokemon details when button is clicked 
function showDetails(pokemon) {
  console.log ("Selected Pokemon", pokemon);
  loadDetails(pokemon).then(function () {
    showModal(pokemon);
      });
    }

return {
  add: add,
  getAll: getAll,
  addListItem: addListItem,
  loadList: loadList,
  loadDetails: loadDetails,
  showDetails: showDetails
}; 
})();

pokemonRepository.loadList().then (function(){
pokemonRepository.getAll().forEach (function (pokemon) {
pokemonRepository.addListItem(pokemon);
});
})

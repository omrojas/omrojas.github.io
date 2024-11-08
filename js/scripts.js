/*!
* Start Bootstrap - Modern Business v5.0.7 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project


filterObjects("all");

function filterObjects(c){
    var x, i;
    x = document.getElementsByClassName("box");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        removeClass(x[i], "show");
        if(x[i].className.indexOf(c) > -1) addClass(x[i], "show")
    }
}

function addClass(element, name){
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++){
        if (arr1.indexOf(arr2[i]) == -1){
            element.className += " " + arr2[i];

        }
    }
}

function removeClass(element, name){
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++){
        while(arr1.indexOf(arr2[i]) > -1){
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

/////// POKEDEX

/*!
* Start Bootstrap - The Big Picture v5.0.6 (https://startbootstrap.com/template/the-big-picture)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-the-big-picture/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

var btn = document.getElementsByTagName("button")[0];
var input = document.getElementById("userinput");
var rand_btn = document.getElementById("random");
const pokemon_html = document.querySelector('.pokemon')

const SearchPokemon = (api_obj) => {
	
	const {url, type, name} = api_obj 
	const api_url = `${url}${type}/${name}`

	fetch(api_url)
		.then( (raw_data) => raw_data.json()) 
		.then( (data) => changeHtml(data))
		.catch((err) => { 
			pokemon_html.innerHTML = 
			  `<h1> Some Error Occured.. Please revise your code! </h1>`;
		})
		

	const changeHtml = (data) => {
		const newHtml = `
        <div class="container ">
            <div class="row">
                <div class="col"> 
                    <div container>
                        <h4 class=" text-light"> ${data.name}</h4>
                        <p class="text-light"> type: <span class="out text-warning">${data.types[0].type.name} </span> </p>
                    </div>
                </div>
                <div class="col">
                    <div class="container"> 
                        <img class="img" src= "${data.sprites.other.dream_world.front_default? data.sprites.other.dream_world.front_default : data.sprites.front_default? data.sprites.front_default : 
                        "https://thumbs.dreamstime.com/b/no-pokemon-here-sign-riga-latvia-july-restricted-area-over-white-background-go-very-popular-virtual-74549871.jpg"} " />
                    </div> 
                </div>
            </div>
        </div>`
		pokemon_html.innerHTML = newHtml 
		input.value = ""; 
	}

}

// Funciones
function inputLength() { 
	return input.value.length;
}

function MakeUrl(value) { 
	const api_obj = {
				url: "https://pokeapi.co/api/v2/",
				type: "pokemon",
				name: value,
				}
	return api_obj;
}


// Sección de funciones Randomizer

function getRandomInt(min,max) { 
  	var rand_int= Math.floor(Math.random() * (max - min) + min);
  	console.log(rand_int);
  	return rand_int;
}

function Randomize(event) { 
	const search_value = getRandomInt(1,897); 
	SearchPokemon(MakeUrl(search_value));
}


function SearchAfterClick(event) {
	if (inputLength() > 0) {
		SearchPokemon(MakeUrl(input.value)); 
	}	
}

function SearchAfterKeypress(event) {
	if (inputLength()> 0 && event.keyCode === 13) { 
		SearchPokemon(MakeUrl(input.value)); 
	}
}
btn.addEventListener("click",SearchAfterClick); 
input.addEventListener("keypress", SearchAfterKeypress);
rand_btn.addEventListener("click",Randomize);
setInterval(Randomize, 30000);

//////////////////////

document.addEventListener("DOMContentLoaded", function() {
    const currentPath = window.location.pathname.split("/").pop();
    const navItems = document.querySelectorAll(".navbar-nav .nav-item");

    navItems.forEach(item => {
        if (item.getAttribute("id") === currentPath) {
            item.classList.add("active");
        }
    });
});


/* GEMINI CODE */
$(document).ready(function() {
    $('.card-header').click(function() {
      $(this).siblings('.card-body').collapse('toggle');
    });
  });
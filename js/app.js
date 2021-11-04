// Variables API SIMPSON
const character = document.getElementById('nom-character');
const imgsimpson = document.getElementById('img-LosSimpsonCuotes');
const quote = document.getElementById('quote');
const btngenerate = document.getElementById('btn-getCharacter');
// URL API SIMPSON
const API_simpson = 'https://thesimpsonsquoteapi.glitch.me/quotes';


// Variables API CAT
const imgcat = document.getElementById('img-cat');
const xcat = document.getElementById('x-cat');
const ycat = document.getElementById('y-cat');
const btnGetCat = document.getElementById('btn-getCat');
// URL API CAT
const API_Cat = 'https://thatcopy.pw/catapi/rest/';


// Carga la primera card cuando se carga web
window.onload = GetCharacterSimpson(); 
window.onload = GetCat(); 

// Boton para ejecutar la funcion que trae los datos desde la API correspondiente
btngenerate.addEventListener('click',GetCharacterSimpson)
btnGetCat.addEventListener('click', GetCat);

function GetCharacterSimpson(){
    fetch(API_simpson)
    .then(response => response.json())
    .then(data => {
        // Mostrar los datos
        character.textContent = data[0].character;
        imgsimpson.setAttribute('src',data[0].image);
        imgsimpson.setAttribute('alt',data[0].character);
        quote.textContent = data[0].quote;
        
        // Muestra por consola cada una de las busquedas
        console.log(data[0]);
    })
}

function GetCat(){
    fetch (API_Cat)
    .then(response => response.json())
    .then(data => {
        imgcat.setAttribute('src', data.url);
        imgcat.setAttribute('alt', data.url);
        xcat.textContent = `Posicion en eje X: ${data.x}`
        ycat.textContent = `Posicion en eje Y: ${data.y}`
        console.log(data);
    })
}






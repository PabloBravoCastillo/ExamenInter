const lista = document.querySelector("#lista")
const template = document.querySelector("template")
const elemlist = document.createElement('li');
const title = document.createElement('h1');
const parrafo = document.createElement('p');


var map = L.map('map').setView([36.720876, -4.416967], 18);


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


traerInfo()

function traerInfo(){
    fetch('https://raw.githubusercontent.com/FRomero999/ExamenDIW2022/main/rutas_arqueologicas.json')
    .then(response => response.json())
    .then(data => {
    añadirMapa(data)
    
    } )
    .catch(error => console.error(error));
    
    
  }


function añadirMapa(rutas){
    console.log(rutas)
    Object.keys(rutas).forEach(function(index) {
        var element = rutas[index];
    marker = L.marker([element.properties.x, element.properties.y]).addTo(map);
    var popup = L.popup()
    marker.bindPopup("<h5>"+element.properties.nombre+"</h5><p>"+element.properties.direccion+"</p>").openPopup();
    let nuevo =template.content.cloneNode(true)
    nuevo.querySelector("h5").innerText=element.properties.nombre
    nuevo.querySelector("p").innerText=element.properties.horario
    nuevo.querySelector("#s1").innerText=element.properties.direccion
    nuevo.querySelector("#s2").innerText=element.properties.telefono
    lista.appendChild(nuevo)
    console.log(element.id)
    // nuevo.addEventListener("oclick",modal())
    


})



function modal(){

}

}


  



  
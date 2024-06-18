let $botonTodo = document.querySelector("#tot-filtre");
let $botonHbo = document.getElementById("hbo-filtre")
let $botonNetflix = document.getElementById("netflix-filtre")
let $botonFilmin = document.getElementById("filmin-filtre")
let $botonPrime = document.getElementById("prime-filtre")
let $botonDisney = document.getElementById("disney-filtre")

console.log($botonTodo);

let plataforma = document.getElementsByClassName("series-plat");
console.log(plataforma);

$botonTodo.addEventListener("click", ()=> filtarSerie("tot"));
$botonHbo.addEventListener("click", ()=> filtarSerie("hbo"));
$botonNetflix.addEventListener("click", ()=> filtarSerie("netflix"));
$botonFilmin.addEventListener("click", ()=> filtarSerie("filmin"));
$botonPrime.addEventListener("click", ()=> filtarSerie("prime"));
$botonDisney.addEventListener("click", ()=> filtarSerie("disney"));

function filtarSerie(title){
    for (let i = 0; i < plataforma.length; i++){

       let series = plataforma[i];

       let titleGr = series.getAttribute("title");
       console.log(titleGr)
  

   if (title === "tot" || titleGr === title) {
        series.classList.remove("ocultar")
   } else {
       series.classList.add("ocultar")
       }
   }
}
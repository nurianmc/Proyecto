import { leerFichero } from "./fetch-try.js";

// Crear las tarjetas con los datos obtenidos del fetch()
export async function generarTarjetas (){

    // Invoca a la función y almacena los datos de la misma
    let data = await leerFichero();

    // ¿Dónde voy a pintar?
    let convidatsContainer = document.querySelector("#cards");

    data.convidats.forEach(valor => {
  
        // Recorre la ARRAY y genera los elementos
        let card = document.createElement("article");
        let nomConvidat = document.createElement("h3");
        let descripcioConvidat = document.createElement("p");
        let pictureConvidat = document.createElement("picture");
        let sourceConvidat = document.createElement("source");
        let imgConvidat = document.createElement("img");
        let enlaceModal = document.createElement("a");

        // Escribe el nombre en el <h3></h3>
        nomConvidat.textContent = valor.nom;

        // Escribe la descripción en <p></p>
        descripcioConvidat.textContent = valor.descripcio;

        // Escribe el texto en la <a></a>
        enlaceModal.textContent = valor.modal;

        // Escribe el valor de source <source></source>
        sourceConvidat.srcset = valor.img.srcset;
        /*
        <source srcset=""></source>
        */

        // Escribe valores de src de <img>
        imgConvidat.src = valor.img.src;

        // Escribe valor alt de <img>
        imgConvidat.alt = valor.img.alt;
        
        // Adjuntar los elementos creados a HTML 
        card.appendChild(pictureConvidat);
        /*
        <article><picture></picture></article>
        */

        pictureConvidat.appendChild(sourceConvidat);
        pictureConvidat.appendChild(imgConvidat);
        /*
        <picture>
            <source src="">
            <img src=
            "">
        </picture>
        */

        card.appendChild(nomConvidat);
        /*
        <picture>.....</picture>
        <h3></h3>
        */

        card.appendChild(descripcioConvidat);
        /*
        <picture></picture>
        <h3></h3>
        <p></p>
        */

        card.appendChild(enlaceModal);
        /*
        <picture></picture>
        <h3></h3>
        <p></p>
        <a></a>
        */

        convidatsContainer.appendChild(card);
        /*
        <div id="cards">
            <article>
                (...)
            </article>
        </div>
        */
    });
    
}
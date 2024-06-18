import { fetchExportar } from "./fetch.js";

export async function cardExportar(){

    let datos = await fetchExportar();

    let convidatsExportar = document.querySelector("#articles");

    datos.convidats.forEach(actors => {

        let tarjetas = document.createElement("article");
        let nomConvidats = document.createElement("h3");
        let descripcioConvidats = document.createElement("p");
        let pictureConvidats = document.createElement("picture");
        let sourceConvidats = document.createElement("source");
        let imgConvidats = document.createElement("img");
        let enlaceModal = document.createElement("button");

        nomConvidats.textContent = actors.nom;
        descripcioConvidats.textContent = actors.descripcio;
        enlaceModal.textContent = actors.modal;
        sourceConvidats.srcset = actors.img.srcset;
        imgConvidats.src = actors.img.src;
        imgConvidats.alt = actors.img.alt;

        tarjetas.appendChild(pictureConvidats);
        pictureConvidats.appendChild(sourceConvidats);
        pictureConvidats.appendChild(imgConvidats);
        tarjetas.appendChild(nomConvidats);
        tarjetas.appendChild(descripcioConvidats);
        tarjetas.appendChild(enlaceModal);

        convidatsExportar.appendChild(tarjetas);

    });
}
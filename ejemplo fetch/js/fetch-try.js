/* Fetch de un JSON o XML o CSV(Valores separados por comas) */
/* export porque posteriormente podrá ser importada desde otro JS */
/* async para cargar al mismo tiempo que el resto de recursos y poder hacer uso de await */

export async function leerFichero(){

    try {

        // Espera a cargar los datos de JSON 
        let respuesta = await fetch("json/convidats.json"); //await espera al siguiente paso, espera que se de a cabo

        // Espera a leer el contenido del JSON
        // Luego, haz un PARSE a esa STRING a datos que sean iterables por JavaScript => OBJETOS / ARRAY
        let datos = await respuesta.json();

        // Con return devuelvo los datos fuera de la FUNCIÓN, en otro fichero JS
        return datos; 

    } catch (error){ // catch captura el error
        console.log(error);
    }
}





// // Fetch de json
// export async function leerFichero() {
//     try {
//         // Espera a cargar el JSON
//         let response = await fetch("json/convidats.json");
//         // Espera 
//     }
// }
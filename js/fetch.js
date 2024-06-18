export async function fetchExportar(){
    try{
        let solucion = await fetch("json/convidats.json");

        // let jsonLiteral = `{
        //     "personas":[{
        //         "id":"1",
        //         "nom":"Random"
        //     }]
        // }`

        let data = await solucion.json();

        // letJsonParseado ={
        //     personas:[
        //         {
        //             id:1,
        //             nom:"Random"
        //         }
        //     ]
        // }

        return data;

    } catch(error) {
        console.log(error);
    }
}
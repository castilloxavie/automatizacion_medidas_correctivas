import { gestionMedidasCorrectivas } from "./medidas_correctivas/gestion"
import { leerExcel } from "./services/excel"

const main = async() => {
    console.log("Inicia proceso de gestion de medidas correctivas");

    const datosCedulas = leerExcel();
    console.log(datosCedulas);

    for(const cedula of datosCedulas){
        console.log(`procesando cedulas${cedula.numeroDocumento}`)
        await gestionMedidasCorrectivas(cedula.numeroDocumento, cedula.fechaExpedicion);
    }

    console.log("Finaliza proceso de gestion de medidas correctivas");
    
   
    

}

main()

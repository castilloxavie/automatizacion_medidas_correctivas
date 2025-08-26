import dotenv from "dotenv";
import puppeteer from "puppeteer";

import { brwserComfig } from "../services/configBrowser"
import { timeOut } from "../utils/helpers"

dotenv.config();


export const gestionMedidasCorrectivas = async() => {

    //VARIABLES TEMPORALES
    const numeroDocumento = "1105614825";
    const fechaExpedicion = "01010000"

    //INICIO NAVEGADOR
    const browser = await puppeteer.launch(brwserComfig)
    const page = await browser.newPage();

    //NAVEGACION
    await page.goto(process.env.NAVEGACION || "")
    await timeOut(2000);

    //SELECCION TIPO DOCUMENTO
    await page.waitForSelector("#ctl00_ContentPlaceHolder3_ddlTipoDoc")
    await page.click("#ctl00_ContentPlaceHolder3_ddlTipoDoc")
    await timeOut(2000);
    console.log("captura el selector tipo documento");

    //SELECCION TIPO DOCUMENTO CEDULA CIUDADANIA
    await page.select("#ctl00_ContentPlaceHolder3_ddlTipoDoc", "55")
    console.log("Selecciona tipo documento cedula de ciudadania");
    await timeOut(2000);

    //INGRESO NUMERO DOCUMENTO
    await page.waitForSelector("#ctl00_ContentPlaceHolder3_txtExpediente")
    await page.type("#ctl00_ContentPlaceHolder3_txtExpediente", numeroDocumento, {delay: 100})
    await timeOut(2000);
    console.log("ingresa numero de documento");

    //INGRESO FECHA EXPEDICION
    await page.waitForSelector("#txtFechaexp")
    await page.type("#txtFechaexp", fechaExpedicion, {delay: 100})
    await timeOut(2000);
    console.log("ingresa fecha de expedicion");

    //CLICK BOTON CONSULTAR O BUSCAR
    await page.waitForSelector(".input-group-addon")
    await page.click(".input-group-addon") 
    await timeOut(5000);
    console.log("consulta la informacion");


    

    //CIERRE NAVEGADOR
    await timeOut(5000);
    await browser.close();


}

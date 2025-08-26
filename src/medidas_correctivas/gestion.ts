import dotenv from "dotenv";
import puppeteer from "puppeteer";

import { brwserComfig } from "../services/configBrowser";
import { timeOut } from "../utils/helpers";

dotenv.config();

export const gestionMedidasCorrectivas = async () => {
  //1.VARIABLES TEMPORALES
  const numeroDocumento = "1105614825";
  const fechaExpedicion = "01010000";

  //2.INICIO NAVEGADOR
  const browser = await puppeteer.launch(brwserComfig);
  const page = await browser.newPage();

  //3.NAVEGACION
  await page.goto(process.env.NAVEGACION || "");
  await timeOut(2000);

  //4.SELECCION TIPO DOCUMENTO
  await page.waitForSelector("#ctl00_ContentPlaceHolder3_ddlTipoDoc");
  await page.click("#ctl00_ContentPlaceHolder3_ddlTipoDoc");
  await timeOut(2000);
  console.log("captura el selector tipo documento");

  //5.SELECCION TIPO DOCUMENTO CEDULA CIUDADANIA
  await page.select("#ctl00_ContentPlaceHolder3_ddlTipoDoc", "55");
  console.log("Selecciona tipo documento cedula de ciudadania");
  await timeOut(2000);

  //6.INGRESO NUMERO DOCUMENTO
  await page.waitForSelector("#ctl00_ContentPlaceHolder3_txtExpediente");
  await page.type("#ctl00_ContentPlaceHolder3_txtExpediente", numeroDocumento, {
    delay: 100,
  });
  await timeOut(2000);
  console.log("ingresa numero de documento");

  //7.INGRESO FECHA EXPEDICION
  await page.waitForSelector("#txtFechaexp");
  await page.type("#txtFechaexp", fechaExpedicion, { delay: 100 });
  await timeOut(2000);
  console.log("ingresa fecha de expedicion");

  //8.CLICK BOTON CONSULTAR O BUSCAR
  await page.waitForSelector(".input-group-addon");
  await page.click(".input-group-addon");
  await timeOut(5000);
  console.log("consulta la informacion");

  //9.CAPTURA DE INFORMACIÓN
  await page.waitForSelector("#ctl00_ContentPlaceHolder3_txtNameUser");

  const data = await page.evaluate(() => {
    const nombre =
      document
        .querySelector("#ctl00_ContentPlaceHolder3_txtNameUser")
        ?.textContent?.trim() || "";
    const medida =
      document.querySelector(".row > h3")?.textContent?.trim() || "";

    return {
      nombreCompleto: nombre,
      medida: medida,
    };
  });

  // Mostrar el resultado como JSON
  console.log(JSON.stringify(data, null, 2));

  //10.GENERAR PDF
  await page.pdf({path: `src/medidas_correctivas/pdf/${numeroDocumento}_mediasCorrectivas.pdf`, format: "A4", printBackground: true});
  console.log("genera PDF de la informacion");

  await timeOut(2000);

  //CIERRE NAVEGADOR
  await timeOut(5000);
  await browser.close();
};

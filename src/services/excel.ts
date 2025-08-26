import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import XLSX from "xlsx";

// 👉 RECREACION DE LA RUTA DINAMICA (porque __dirname no existe en ESM)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export interface CedulaData {
  numeroDocumento: string;
  fechaExpedicion: string;
}

//LEER EXCEL QUE CONTIENE LOS DATOS DE LAS CEDULAS
export const leerExcel = (): CedulaData[] => {
  const rutaExcel = path.resolve(__dirname, "../data/cedulas.xlsx");

  //LEER EL ARCHIVO COMO BUFFER
  const buffer = fs.readFileSync(rutaExcel);

  //PARSEARLO CON XLSX.read
  const workbook = XLSX.read(buffer, { type: "buffer" });
  const hoja = workbook.Sheets[workbook.SheetNames[0]];

  //CONVERTIR LA HOJA A JSON
  const dataExcel: any[] = XLSX.utils.sheet_to_json(hoja, { defval: "" });

  // 👉 MAPEAR los nombres del Excel a los que espera el código
  const datos: CedulaData[] = dataExcel.map((row) => ({
    numeroDocumento: String(row.cedula),   // columna del Excel "cedula"
    fechaExpedicion: row.fechaExpedicion || "01010000"
  }));

  return datos;
};

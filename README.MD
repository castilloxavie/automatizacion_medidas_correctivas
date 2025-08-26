# 📌 Gestor de Medidas Correctivas

Automatización web desarrollada en **TypeScript** y **Puppeteer** para consultar de manera masiva las **medidas correctivas de ciudadanos** a través de un portal oficial.  

El sistema toma como entrada un archivo **Excel** con los números de cédula y fechas de expedición, realiza las consultas en línea y finalmente **genera un PDF individual** con el resultado de cada persona.  

---

## ✨ Características

- 🤖 **Automatización de Consultas** → Completa y envía formularios en línea de manera automática.  
- 📊 **Integración con Excel** → Procesa datos de entrada desde archivos `.xlsx`.  
- 📄 **Generación de Reportes PDF** → Exporta un archivo PDF por cada consulta.  
- ⚙️ **Configuración Flexible** → Personaliza la ejecución del navegador mediante `configBrowser.ts`.  

---

## 🛠️ Tecnologías Utilizadas

Este proyecto está construido con las siguientes herramientas:

- [![Node.js](https://img.shields.io/badge/Node.js-18+-green?logo=node.js)](https://nodejs.org/)  
- [![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)  
- [![Puppeteer](https://img.shields.io/badge/Puppeteer-Automation-black?logo=puppeteer)](https://pptr.dev/)  
- [dotenv](https://github.com/motdotla/dotenv) – Manejo de variables de entorno.  
- [xlsx](https://www.npmjs.com/package/xlsx) – Lectura y escritura de archivos Excel.  

---

## 📋 Requisitos Previos

Asegúrate de tener instalado en tu sistema:

- [Node.js](https://nodejs.org/) (versión **14 o superior**, recomendado **18+**)  
- [npm](https://www.npmjs.com/) (gestor de paquetes de Node.js)  

---

## ⚡ Instalación y Ejecución

1. **Clona el repositorio**  
   ```bash
   git clone https://github.com/castilloxavie/automatizacion_medidas_correctivas.git
   cd automatizacion_medidas_correctivas
   npm install
   npm run dev 
   ```

3. **Configura las variables de entorno**  
   - Copia el archivo `.env.example` a `.env`  
   - Ajusta las variables necesarias:  
     - `NAVEGACION` → URL del portal web oficial donde se realizarán las consultas.  
       ```env
       NAVEGACION="https://srvcnpc.policia.gov.co/PSC/frm_cnp_consulta.aspx"
       ```
     - Otras variables opcionales relacionadas con el navegador, rutas de salida de los PDFs, etc.
 



/* eslint-disable no-unused-vars */
import express from "express";
import dbConnect from "./config/dbConnect.js";
import routes from "./routes/index.js";
import TratamentoErros from "./middlewares/TratamentoErros.js";

const connection = await dbConnect(); //Instanciando o banco de dados

connection.on("error", (error) => {
  console.error("Erro de conexão", error);
});

//Conexão aberta
connection.once("open", () => {
  console.log("Conexão com o banco feita com sucesso!");
});

const app = express();
routes(app);

//Middleware de erro
app.use(TratamentoErros);

export default app;

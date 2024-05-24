import express from "express";
import dbConnect from "./config/dbConnect.js";
import routes from "./routes/index.js";

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

app.delete("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  livros.splice(index, 1);
  res.status(200).json("Livro removido com sucesso!");
});

export default app;

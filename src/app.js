import express from "express";
import dbConnect from "./config/dbConnect.js";

const connection = await dbConnect(); //Instanciando o banco de dados

connection.on("error", (error) => {
  console.error("Erro de conexão", error);
});

//Conexão aberta
connection.once("open", () => {
  console.log("Conexão com o banco feita com sucesso!");
});

const app = express();
app.use(express.json()); //Middleware -> Acesso as requisiçoes e respostas e converte para JSON

const livros = [
  {
    id: 1,
    titulo: "Senhor dos Aneis",
  },
  {
    id: 2,
    titulo: "Harry Potter",
  },
];

function buscaLivro(id) {
  return livros.findIndex((livro) => {
    return livro.id === Number(id);
  });
}

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.get("/livros", (req, res) => {
  res.status(200).json(livros);
});

app.get("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  res.status(200).json(livros[index]);
});

app.post("/livros", (req, res) => {
  livros.push(req.body);
  res.status(201).json("Livro cadastrado com sucesso!");
});

app.put("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  livros[index].titulo = req.body.titulo;
  res.status(200).json("Livro atualizado com sucesso!");
});

app.delete("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  livros.splice(index, 1);
  res.status(200).json("Livro removido com sucesso!");
});

export default app;

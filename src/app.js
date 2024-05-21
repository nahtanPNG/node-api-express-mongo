import express from "express";

const app = express();

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

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.get("/livros", (req, res) => {
  res.status(200).json(livros);
});

export default app;

import express from "express";

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

// mongodb+srv://admin:<password>@cluster0.qr26mtf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

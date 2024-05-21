import app from "./src/app.js";

const PORT = 8080;

//Definindo Rotas
// const rotas = {
//   "/": "Curso de API",
//   "/livros": "Lista de Livros",
//   "/autores": "Lista de Autores",
//   "/hello": "Hello World!",
// };

//Criando um servidor e definindo seu Header e Mensagem
// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end(rotas[req.url]);
// });

app.listen(PORT, () => {
  console.log("Server running at http://127.0.0.1:8080/");
});

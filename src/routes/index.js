import express from "express";
import livros from "./livrosRoutes.js";

const routes = (app) => { //app -> instancia do express
  app.route("/").get((req, res) => res.status(200).send("Curso de Node"));

  //Middleware -> Acesso as requisiçoes e respostas e converte para JSON
  app.use(express.json(), livros); //Pegando todas as rotas de livros
};

export default routes;

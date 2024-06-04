import { autor } from "../models/Autor.js";

class AutorController {
  static async listarAutores(req, res, next) {
    try {
      const listaAutores = await autor.find({});
      res.status(200).json(listaAutores);
    } catch (error) {
      next(error);
    }
  }

  static async listarAutorPorId(req, res, next) {
    try {
      const AutorEncontrado = await autor.findById(req.params.id);
      if (AutorEncontrado !== null) {
        res.status(200).json(AutorEncontrado);
      } else {
        res.status(404).json({ message: "Id de autor não encontrado" });
      }
    } catch (error) {
      next(error);
    }
  }

  static async cadastrarAutor(req, res, next) {
    try {
      const novoAutor = await autor.create(req.body); //Criando um novo objeto pelo mongoose
      res
        .status(201)
        .json({ message: "Autor criado com sucesso!", autor: novoAutor });
    } catch (error) {
      next(error);
    }
  }

  static async atualizarAutor(req, res, next) {
    try {
      const id = req.params.id;
      await autor.findByIdAndUpdate(id, req.body); //Recebendo o id e os dados para atualizar
      res.status(200).json({ message: "Autor atualizado" });
    } catch (error) {
      next(error);
    }
  }

  static async deletarAutor(req, res, next) {
    try {
      await autor.findByIdAndDelete(req.params.id);
      res.status(200).json("Autor removido com sucesso!");
    } catch (error) {
      next(error);
    }
  }
}

export default AutorController;

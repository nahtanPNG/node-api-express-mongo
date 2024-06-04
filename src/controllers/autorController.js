import mongoose from "mongoose";
import { autor } from "../models/Autor.js";

class AutorController {
  static async listarAutores(req, res) {
    try {
      const listaAutores = await autor.find({});
      res.status(200).json(listaAutores);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - Falha ao buscar autores` });
    }
  }

  static async listarAutorPorId(req, res) {
    try {
      const AutorEncontrado = await autor.findById(req.params.id);
      if (AutorEncontrado !== null) {
        res.status(200).json(AutorEncontrado);
      } else {
        res.status(404).json({ message: "Id de autor não encontrado" });
      }
    } catch (error) {
      // CastError -> Erro interno do mongoose
      if (error instanceof mongoose.Error.CastError) {
        res
          .status(400)
          .send({ message: "Um ou mais dados fornecidos estão incorretos" });
      } else {
        res.status(500).send({ message: "Erro interno de servidor" });
      }
    }
  }

  static async cadastrarAutor(req, res) {
    try {
      const novoAutor = await autor.create(req.body); //Criando um novo objeto pelo mongoose
      res
        .status(201)
        .json({ message: "Autor criado com sucesso!", autor: novoAutor });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - Falha ao cadastrar autor` });
    }
  }

  static async atualizarAutor(req, res) {
    try {
      const id = req.params.id;
      await autor.findByIdAndUpdate(id, req.body); //Recebendo o id e os dados para atualizar
      res.status(200).json({ message: "Autor atualizado" });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - Falha ao atualizar autor` });
    }
  }

  static async deletarAutor(req, res) {
    try {
      await autor.findByIdAndDelete(req.params.id);
      res.status(200).json("Autor removido com sucesso!");
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - Falha ao deletar autor` });
    }
  }
}

export default AutorController;

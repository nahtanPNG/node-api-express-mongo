import { autor } from "../models/Autor.js";
import livro from "../models/Livro.js";

class LivroController {
  static async listarLivros(req, res, next) {
    try {
      const listaLivros = await livro.find({});
      res.status(200).json(listaLivros);
    } catch (error) {
      next(error);
    }
  }

  static async listarLivroPorId(req, res, next) {
    try {
      const livroEncontrado = await livro.findById(req.params.id);
      res.status(200).json(livroEncontrado);
    } catch (error) {
      next(error);
    }
  }

  static async cadastrarLivro(req, res, next) {
    const novoLivro = req.body;
    try {
      const autorEncontrado = await autor.findById(novoLivro.autor);
      const livroCompleto = {
        ...novoLivro,
        autor: { ...autorEncontrado._doc },
      }; //Mongo trazendo os dados do autor
      await livro.create(livroCompleto);
      res
        .status(201)
        .json({ message: "Livro criado com sucesso!", livro: livroCompleto });
    } catch (error) {
      next(error);
    }
  }

  static async atualizarLivro(req, res, next) {
    try {
      const id = req.params.id;
      await livro.findByIdAndUpdate(id, req.body); //Recebendo o id e os dados para atualizar
      res.status(200).json({ message: "Livro atualizado" });
    } catch (error) {
      next(error);
    }
  }

  static async deletarLivro(req, res, next) {
    try {
      await livro.findByIdAndDelete(req.params.id);
      res.status(200).json("Livro removido com sucesso!");
    } catch (error) {
      next(error);
    }
  }

  static async listarLivroPorEditora(req, res, next) {
    const editora = req.query.editora;
    try {
      const livroEcontrado = await livro.find({ editora: editora }); //Chave e valo -> Propriedade e variavel
      res.status(200).json(livroEcontrado);
    } catch (error) {
      next(error);
    }
  }
}

export default LivroController;

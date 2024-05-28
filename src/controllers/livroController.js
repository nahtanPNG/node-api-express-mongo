import { autor } from "../models/Autor.js";
import livro from "../models/Livro.js";

class LivroController {
  static async listarLivros(req, res) {
    try {
      const listaLivros = await livro.find({});
      res.status(200).json(listaLivros);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - Falha ao buscar livros` });
    }
  }

  static async listarLivroPorId(req, res) {
    try {
      const livroEncontrado = await livro.findById(req.params.id);
      res.status(200).json(livroEncontrado);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - Falha ao encontrar livro` });
    }
  }

  static async cadastrarLivro(req, res) {
    const novoLivro = req.body;
    try {
      const autorEncontrado = await autor.findById(novoLivro.autor);
      const livroCompleto = {
        ...novoLivro,
        autor: { ...autorEncontrado._doc },
      }; //Mongo trazendo os dados do autor
      const livroCriado = await livro.create(livroCompleto);
      res
        .status(201)
        .json({ message: "Livro criado com sucesso!", livro: novoLivro });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - Falha ao cadastrar livro` });
    }
  }

  static async atualizarLivro(req, res) {
    try {
      const id = req.params.id;
      await livro.findByIdAndUpdate(id, req.body); //Recebendo o id e os dados para atualizar
      res.status(200).json({ message: "Livro atualizado" });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - Falha ao atualizar livro` });
    }
  }

  static async deletarLivro(req, res) {
    try {
      await livro.findByIdAndDelete(req.params.id);
      res.status(200).json("Livro removido com sucesso!");
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - Falha ao deletar livro` });
    }
  }

  static async listarLivroPorEditora(req, res) {
    const editora = req.query.editora;
    try {
      const livroEcontrado = await livro.find({ editora: editora }); //Chave e valo -> Propriedade e variavel
      res.status(200).json(livroEcontrado);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - Falha ao buscar livro` });
    }
  }
}

export default LivroController;

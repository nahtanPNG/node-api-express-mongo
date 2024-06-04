import mongoose from "mongoose";

//Criando um modelo e um schema
//Schema -> Objeto de configuração que define a estrutura e as propriedades
//Model -> Objeto que representa a coleção

const livroSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: {
      type: String,
      required: [true, "O título do livro é obrigatório"],
    },
    editora: {
      type: String,
      required: [true, "A editora do livro é obrigatório"],
    },
    preco: { type: Number },
    paginas: { type: Number },
    autor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "autores",
      required: [true, "O autor do livro é obrigatório"],
    },
  },
  { versionKey: false }
  //Desabilitando a versão do mongoose
);

//Coleção e propriedade do modelo
const livro = mongoose.model("livros", livroSchema);

export default livro;

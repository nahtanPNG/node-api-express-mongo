import mongoose from "mongoose";

//Criando um modelo e um schema
//Schema -> Objeto de configuração que define a estrutura e as propriedades
//Model -> Objeto que representa a coleção

const livroSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: true },
    editora: { type: String },
    preco: { type: Number },
    paginas: { type: Number },
  },
  //Desabilitando a versão do mongoose
  { versionKey: false }
);

//Coleção e propriedade do modelo
const livro = mongoose.model("livros", livroSchema);

export default livro;

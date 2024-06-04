import mongoose from "mongoose";

// eslint-disable-next-line no-unused-vars
function TratamentoErros(error, req, res, next) {
  // CastError -> Erro interno do mongoose
  if (error instanceof mongoose.Error.CastError) {
    res
      .status(400)
      .send({ message: "Um ou mais dados fornecidos estão incorretos" });
  } else if (error instanceof mongoose.Error.ValidationError) {
    const mensagensErro = Object.values(error.errors)
      .map((erro) => erro.message)
      .join("; ");
    res.status(400).send({ message: `Os seguintes erros foram encontrados: ${mensagensErro}` });
  } else {
    res.status(500).send({ message: "Erro interno de servidor" });
  }
}

export default TratamentoErros;

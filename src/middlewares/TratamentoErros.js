import mongoose from "mongoose";
import ErroBase from "../errors/ErroBase.js";
import BadRequest from "../errors/BadRequest.js";
import ErroValidacao from "../errors/ErroValidacao.js";

// eslint-disable-next-line no-unused-vars
function TratamentoErros(error, req, res, next) {
  // CastError -> Erro interno do mongoose
  if (error instanceof mongoose.Error.CastError) {
    new BadRequest().enviarResposta(res);
  } else if (error instanceof mongoose.Error.ValidationError) {
    new ErroValidacao(error).enviarResposta(res);
  } else {
    new ErroBase().enviarResposta(res);
  }
}

export default TratamentoErros;

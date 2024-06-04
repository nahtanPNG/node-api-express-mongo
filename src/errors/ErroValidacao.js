import BadRequest from "./BadRequest.js";

class ErroValidacao extends BadRequest {
  constructor(error) {
    const mensagensErro = Object.values(error.errors)
      .map((erro) => erro.message)
      .join("; ");

    super(`Os seguintes erros foram encontrados: ${mensagensErro}`);
  }
}

export default ErroValidacao;

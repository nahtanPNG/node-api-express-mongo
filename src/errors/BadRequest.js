import ErroBase from "./ErroBase.js";

class BadRequest extends ErroBase {
    constructor(mensagem = "Um ou mais dados fornecidos são inválidos") {
        super(mensagem, 400);
    }
}

export default BadRequest;

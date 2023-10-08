var formasDePagamento;
(function (formasDePagamento) {
    formasDePagamento["PIX"] = "Pix";
    formasDePagamento["BOLETO"] = "Boleto";
})(formasDePagamento || (formasDePagamento = {}));
// Implementação de formas de pagamento específicas
var Pix = /** @class */ (function () {
    function Pix() {
    }
    Pix.prototype.fazerPagamento = function () {
        console.log("Realizando pagamento via Pix");
    };
    return Pix;
}());
var Boleto = /** @class */ (function () {
    function Boleto() {
    }
    Boleto.prototype.fazerPagamento = function () {
        console.log("Realizando pagamento via Boleto");
    };
    return Boleto;
}());
// Classe base para representar um banco
var Banco = /** @class */ (function () {
    function Banco(nome, codBanco, agencia) {
        this.formasDePagamento = {};
     
        this.nome = nome;
        this.codBanco = codBanco;
        this.agencia = agencia;
        this.registrarFormaDePagamento(formasDePagamento.PIX, new Pix());

        this.registrarFormaDePagamento(formasDePagamento.BOLETO, new Boleto());
    }
    // Método para registrar uma forma de pagamento
    Banco.prototype.registrarFormaDePagamento = function (nomeForma, forma) {
        this.formasDePagamento[nomeForma] = forma;
    };
    // Função para fazer um pagamento
    Banco.prototype.fazerPagamento = function (forma) {
        var formaDePagamento = this.formasDePagamento[forma];
        if (formaDePagamento) {
            formaDePagamento.fazerPagamento();
        }
        else {
            console.log("Forma de pagamento não suportada");
        }
    };
    return Banco;
}());
// Criar uma instância do banco
var meuBanco = new Banco("Meu Banco", "001", "12345");
// Chamar métodos de pagamento diretamente do banco
meuBanco.fazerPagamento(formasDePagamento.PIX); // Realizar pagamento via Pix
meuBanco.fazerPagamento(formasDePagamento.BOLETO); // Realizar pagamento via Boleto

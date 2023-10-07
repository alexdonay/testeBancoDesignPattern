interface IPagar {
    fazerPagamento(): void;
  }
  
  // Implementação de formas de pagamento específicas
  class Pix implements IPagar {
    fazerPagamento() {
      console.log("Realizando pagamento via Pix");
    }
  }
  
  class Boleto implements IPagar {
    fazerPagamento() {
      console.log("Realizando pagamento via Boleto");
    }
  }
  
  // Classe base para representar um banco
  class Banco {
    nome: string;
    codBanco: string;
    agencia: string;
    formasDePagamento: Record<string, IPagar> = {};
  
    constructor(nome: string, codBanco: string, agencia: string) {
      this.nome = nome;
      this.codBanco = codBanco;
      this.agencia = agencia;
      this.registrarFormaDePagamento("Pix", new Pix());
      this.registrarFormaDePagamento("Boleto", new Boleto());
    }
  
    // Método para registrar uma forma de pagamento
    registrarFormaDePagamento(nomeForma: string, forma: IPagar) {
      this.formasDePagamento[nomeForma] = forma;
    }
  
    // Função para fazer um pagamento
    fazerPagamento(forma: string) {
      const formaDePagamento = this.formasDePagamento[forma];
      if (formaDePagamento) {
        formaDePagamento.fazerPagamento();
      } else {
        console.log("Forma de pagamento não suportada");
      }
    }
  }
  
  // Criar uma instância do banco
  const meuBanco = new Banco("Meu Banco", "001", "12345");
  
  // Chamar métodos de pagamento diretamente do banco
  meuBanco.fazerPagamento("Pix"); // Realizar pagamento via Pix
  meuBanco.fazerPagamento("Boleto"); // Realizar pagamento via Boleto
  
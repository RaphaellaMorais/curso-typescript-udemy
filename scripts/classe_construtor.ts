/* class Pedido {

    produto: string;
    valorTotal: number;
    previsaoEntrega: Date;

    constructor(
        produto: string, 
        valorTotal: number, 
        previsaoEntrega: Date
        
    ) {

        this.produto = produto;
        this.valorTotal = valorTotal;
        this.previsaoEntrega = previsaoEntrega; // aqui se tornam variáveis;

    }
} EXEMPLO DE COMO ESTAVAMOS FAZENDO

// Se observar a gente repete muito o código, na primeira um atributo, depois como parâmetro e define na ultima;

const meuPedido = new Pedido("TV 64 polegadas", 2000, new Date("2021-05-01"));

console.log(meuPedido); */

// Se observar a gente repete muito o código, na primeira um atributo, depois como parâmetro e define na ultima;

// MODO MAIS COMPACTO:

class Pedido {

    constructor(
        private produto: string, 
        protected valorTotal: number, 
        public previsaoEntrega: Date
        
    ) {}
} 

const meuPedido = new Pedido("TV 64 polegadas", 2000, new Date("2021-05-01"));

console.log(meuPedido);
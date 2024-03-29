/*Herança permite que uma classe herde recursos de outra classe;
A classe que irá compartilhar as informações é chamada de "classe pai";
A classe que irá herdar as informações é chamada de classe filha;
*/

class Cadastro {
    nome: string;
    nascimento: Date;

    constructor(nome: string, nascimento: Date) {
        this.nome = nome;
        this.nascimento = nascimento;
    }
}

class Cliente extends Cadastro {
    email: string;
    empresa: string;

    constructor(nome: string, nascimento: Date, email: string, empresa:string) {

        super(nome, nascimento); //toda vez q vc está no construtor e chama o super automáticamente vc está chamando o construtor da classe pai;
        this.email = email;
        this.empresa = empresa;

    }

}

const clienteJoao = new Cliente(
    "João", 
    new Date("2000-01-01"), 
    "joao@hcode.com.br", 
    "Hcode"
);

console.log(clienteJoao);



//EU TESTANTO:

class Filme {
    nome: string;
    ano: Date;

    constructor(nome: string, ano: Date) {
        this.nome = nome;
        this.ano = ano;
    }
}

class Romance extends Filme {
    roteirista: string;
    produtora: string;

    constructor(nome: string, ano: Date, roteirista: string, produtora:string) {

        super(nome, ano); //toda vez q vc está no construtor e chama o super automáticamente vc está chamando o construtor da classe pai;
        this.roteirista = roteirista;
        this.produtora = produtora;

    }

}

const filmeProduzido = new Romance(
    "Um lugar bem longe daqui", 
    new Date("2022-07-15"), 
    "Petra Costa", 
    "Universal Pictures"
);

console.log(filmeProduzido);
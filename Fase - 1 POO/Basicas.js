// Classe para representar uma sala
export  class Sala {
    constructor(nome) {
        this.nome = nome;
        this.objetos = new Map();
        this.ferramentas = new Map();
        this.portas = new Map();
    }

    adicionarObjeto(objeto) {
        this.objetos.set(objeto.nome, objeto);
    }

    adicionarFerramenta(ferramenta) {
        this.ferramentas.set(ferramenta.nome, ferramenta);
    }

    adicionarPorta(nomeSala, sala) {
        this.portas.set(nomeSala, sala);
    }

    mostrarDescricao() {
        console.log(`Você está na ${this.nome}.`);
        console.log("Saídas:", [...this.portas.keys()].join(", "));
    }
}


// Classe principal do jogo
export class Engine {
    constructor() {
        this.mochila = [];
        this.salaCorrente = null;
        this.fim = false;
    }

    indicaFimDeJogo() {
        console.log("O jogo terminou!");
        this.fim = true;
    }
}

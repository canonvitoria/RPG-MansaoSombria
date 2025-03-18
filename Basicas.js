// Classe para representar uma sala
export class Sala {
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
        console.log(`📍 Você está na ${this.nome}.`);
        const saidas = [...this.portas.keys()];
        console.log(`🚪 Saídas: ${saidas.length ? saidas.join(", ") : "Nenhuma"}`);

        if (this.ferramentas.size > 0) {
            console.log("\n🛠️ Ferramentas disponíveis:");
            this.ferramentas.forEach((f) => console.log(`- ${f.nome}: ${f.descricao} (${f.usos} usos restantes)`));
        }

        if (this.objetos.size > 0) {
            console.log("\n📦 Objetos disponíveis:");
            this.objetos.forEach((o) => console.log(`- ${o.nome}: ${o.descricaoAntesAcao}`));
        }
    }
}

export class Engine {
    constructor() {
        this.mochila = new Map();
        this.salaCorrente = null;
        this.fim = false;
    }


    indicaFimDeJogo() {
        console.log("O jogo terminou!");
        this.fim = true;
    }
}


import { Sala, Engine } from './Basicas.js';
import { criarCenario } from './Salas.js';
import readline from 'readline';

export class Jogo {
    constructor() {
        this.engine = new Engine();
        criarCenario(this.engine);
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    iniciar() {
        console.log("Bem-vindo ao Mistério na Mansão Sombria!");
        this.loopJogo();
    }

    loopJogo() {
        if (this.engine.fim) {
            this.rl.close();
            return;
        }

        this.engine.salaCorrente.mostrarDescricao();

        this.rl.question("Digite um comando: ", (comando) => {
            this.processarComando(comando);
            this.loopJogo();
        });
    }

    processarComando(comando) {
        let partes = comando.split(" ");
        let acao = partes[0];
        let nome = partes.slice(1).join(" ");

        switch (acao) {
            case "pega":
                this.pegarItem(nome);
                break;
            case "usa":
                this.usarItem(nome);
                break;
            case "vai":
                this.vaiParaSala(nome);
                break;
            case "sair":
                console.log("Jogo encerrado.");
                this.engine.fim = true;
                this.rl.close();
                break;
            default:
                console.log("Comando desconhecido.");
        }
    }

    pegarItem(nome) {
        if (this.engine.salaCorrente.ferramentas.has(nome)) {
            let ferramenta = this.engine.salaCorrente.ferramentas.get(nome);
            this.engine.mochila.set(nome, ferramenta);
            this.engine.salaCorrente.ferramentas.delete(nome);
            console.log(`✅ Você pegou ${nome}.`);
        } else if (this.engine.salaCorrente.objetos.has(nome)) {
            let objeto = this.engine.salaCorrente.objetos.get(nome);
            this.engine.mochila.set(nome, objeto);
            this.engine.salaCorrente.objetos.delete(nome);
            console.log(`✅ Você pegou ${nome}.`);
        } else {
            console.log(`❌ Não há ${nome} nesta sala.`);
        }
    }
    
    usarItem(nome) {
        if (this.engine.mochila.has(nome)) {
            let item = this.engine.mochila.get(nome);
            
            if (item.usar) {
                item.usar();
                if (item instanceof Ferramenta && item.usos === 0) {
                    this.engine.mochila.delete(nome);
                    console.log(`🛠️ ${nome} foi descartado após o uso.`);
                }
            } else {
                console.log(`❌ ${nome} não pode ser usado dessa forma.`);
            }
        } else {
            console.log(`❌ Você não tem ${nome} na mochila.`);
        }
    }
    
    

    vaiParaSala(nomeSala) {
        const salaDestino = this.engine.salaCorrente.portas.get(nomeSala);

        if (salaDestino) {
            this.engine.salaCorrente = salaDestino;
            console.log(`Você foi para ${nomeSala}.`);
        } else {
            console.log(`Não há uma porta para ${nomeSala} nesta sala.`);
        }
    }
}

export default Jogo;

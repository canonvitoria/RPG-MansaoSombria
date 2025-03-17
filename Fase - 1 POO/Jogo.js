import { Engine } from './Basicas.js';
import { criarCenario } from './Salas.js';
import readline from 'readline';

export class Jogo {
    constructor() {
        this.engine = new Engine();
        criarCenario(this.engine);
    }

    iniciar() {
        console.log("Bem-vindo ao Mistério na Mansão Sombria!");
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        const loopJogo = () => {
            if (this.engine.fim) {
                rl.close();
                return;
            }

            this.engine.salaCorrente.mostrarDescricao();

            rl.question("Digite um comando: ", (comando) => {
                this.processarComando(comando);
                loopJogo(); // Continua o loop após processar o comando
            });
        };

        loopJogo(); // Inicia o loop do jogo
    }

    processarComando(comando) {
        let partes = comando.split(" ");
        let acao = partes[0];
        let nome = partes.slice(1).join(" ");

        switch (acao) {
            case "pega":
                console.log(`Você pegou ${nome}.`);
                break;
            case "usa":
                console.log(`Você usou ${nome}.`);
                break;
            case "vai":
                this.vaiParaSala(nome); // Chama o método para mudar de sala
                break;
            default:
                console.log("Comando desconhecido.");
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

export default { Jogo };

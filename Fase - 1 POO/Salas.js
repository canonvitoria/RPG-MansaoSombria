import { Sala } from './Basicas.js';
import Ferramentas from './Ferramentas.js';
import Objetos from './Objetos.js';

export function criarCenario(engine) {
    let hall = new Sala("Hall de Entrada");
    let biblioteca = new Sala("Biblioteca");
    let salaEstar = new Sala("Sala de Estar");

    hall.adicionarPorta("Biblioteca", biblioteca);
    biblioteca.adicionarPorta("Sala de Estar", salaEstar);

    let chave = new Ferramentas("Chave de Prata", "Abre portas trancadas.", 1);
    hall.adicionarFerramenta(chave);

    let diario = new Objetos("Diário Antigo", "Diário misterioso.", "Você encontrou pistas!", true);
    biblioteca.adicionarObjeto(diario);

    engine.salaCorrente = hall;
}

export default { criarCenario };

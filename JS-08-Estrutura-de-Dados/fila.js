const readline = require('readline-sync');

class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(element) {
        this.items.push(element);
    }
    dequeue() {
        return this.items.shift();
    }
    isEmpty() {
        return this.items.length === 0;
    }
    list() {
        return this.items;
    }
}

function mainFila() {
    const filaClientes = new Queue();
    let opcao = -1;

    console.log("Bem-vindo ao Sistema de Fila do Banco!");

    while (opcao !== 0) {
        console.log("\nMenu:");
        console.log("1: Adicionar um novo Cliente na fila");
        console.log("2: Listar todos os Clientes na fila");
        console.log("3: Chamar (retirar) uma pessoa da fila");
        console.log("0: Finalizar o programa");

        const input = readline.question("Digite uma opcao: ");
        opcao = parseInt(input);

        switch (opcao) {
            case 1:
                const nome = readline.question("Digite o nome do Cliente: ");
                filaClientes.enqueue(nome);
                console.log("Cliente Adicionado!");
                console.log("Fila:");
                filaClientes.list().forEach(cliente => console.log(cliente));
                break;

            case 2:
                if (filaClientes.isEmpty()) {
                    console.log("A Fila está vazia!");
                } else {
                    console.log("Lista de Clientes na Fila:");
                    filaClientes.list().forEach(cliente => console.log(cliente));
                }
                break;

            case 3:
                const clienteChamado = filaClientes.dequeue();
                if (clienteChamado) {
                    console.log(`O Cliente ${clienteChamado} foi Chamado!`);
                    if (!filaClientes.isEmpty()) {
                        console.log("Fila:");
                        filaClientes.list().forEach(cliente => console.log(cliente));
                    }
                } else {
                    console.log("A Fila está vazia!");
                }
                break;

            case 0:
                console.log("Programa Finalizado!");
                break;

            default:
                console.log("Opção inválida. Tente novamente.");
                break;
        }
    }
}

mainFila();

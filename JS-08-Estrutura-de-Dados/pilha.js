const readline = require('readline-sync');

/**
 * Classe Stack (Pilha) simples baseada em Array para simular a estrutura de dados.
 */
class Stack {
    constructor() {
        this.items = [];
    }

    /**
     * Adiciona um elemento ao topo da pilha (push).
     * @param {string} element O nome do livro a ser adicionado.
     */
    push(element) {
        this.items.push(element);
    }

    /**
     * Remove o elemento do topo da pilha (pop).
     * @returns {string | undefined} O elemento removido ou undefined se a pilha estiver vazia.
     */
    pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items.pop();
    }

    /**
     * Verifica se a pilha está vazia.
     * @returns {boolean} True se a pilha estiver vazia, false caso contrário.
     */
    isEmpty() {
        return this.items.length === 0;
    }

    /**
     * Retorna a lista de todos os elementos na pilha.
     * @returns {string[]} A lista de livros.
     */
    list() {
        return this.items;
    }
}

function mainPilha() {
    const pilhaLivros = new Stack();
    let opcao = -1;

    console.log("Bem-vindo ao Sistema de Pilha de Livros!");

    while (opcao !== 0) {
        console.log("\nMenu:");
        console.log("1: Adicionar um novo livro na pilha");
        console.log("2: Listar todos os livros da Pilha");
        console.log("3: Retirar um livro da pilha");
        console.log("0: Finalizar o programa");

        const input = readline.question("Digite uma opcao: ");
        opcao = parseInt(input);

        switch (opcao) {
            case 1:
                const nome = readline.question("Digite o nome do livro: ");
                pilhaLivros.push(nome);
                console.log("Livro adicionado!");
                console.log("Pilha:");
                pilhaLivros.list().forEach(livro => console.log(livro));
                break;

            case 2:
                if (pilhaLivros.isEmpty()) {
                    console.log("A Pilha está vazia!");
                } else {
                    console.log("Lista de Livros na Pilha:");
                    pilhaLivros.list().forEach(livro => console.log(livro));
                }
                break;

            case 3:
                const livroRetirado = pilhaLivros.pop();
                if (livroRetirado) {
                    console.log(`O Livro "${livroRetirado}" foi retirado da pilha!`);
                    if (!pilhaLivros.isEmpty()) {
                        console.log("Pilha:");
                        pilhaLivros.list().forEach(livro => console.log(livro));
                    }
                } else {
                    console.log("A Pilha está vazia!");
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

// Para rodar o programa diretamente
// mainPilha();

// Exporta a classe e a função principal para testes ou uso modular
module.exports = { Stack, mainPilha };

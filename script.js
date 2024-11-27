const pessoas = [
    {
        nome: "Carlos Silva", 
        rua: "Rua das Palmeiras, 123", 
        cidade: "São Paulo", 
        estado: "SP", 
        telefone: "11987654321", 
        aniversario: "10/10/1990"
    },
    {
        nome: "Ana Costa", 
        rua: "Avenida Brasil, 456", 
        cidade: "Rio de Janeiro", 
        estado: "RJ", 
        telefone: "2123456789", 
        aniversario: "05/03/1985"
    },
    {
        nome: "Felipe Oliveira", 
        rua: "Rua do Sol, 789", 
        cidade: "Belo Horizonte", 
        estado: "MG", 
        telefone: "3138765432", 
        aniversario: "25/12/1980"
    }
];

const listaPessoas = document.getElementById('person-list');
const nomeCompleto = document.getElementById('full-name');
const endereco = document.getElementById('address');
const telefone = document.getElementById('phone');
const aniversario = document.getElementById('birthday');

function renderizarLista() {
    pessoas.forEach((pessoa, index) => {
        const li = document.createElement('li');
        li.textContent = pessoa.nome;
        li.classList.add('person-name');
        li.addEventListener('click', () => exibirDetalhes(index, li)); // Ao clicar, mostra detalhes
        listaPessoas.appendChild(li);
    });
}

function exibirDetalhes(index, elementoClicado) {
    const pessoa = pessoas[index];

    nomeCompleto.textContent = `Nome Completo: ${pessoa.nome}`;
    endereco.textContent = `Endereço: ${pessoa.rua}, ${pessoa.cidade} - ${pessoa.estado}`;
    telefone.textContent = `Telefone: ${pessoa.telefone}`;
    aniversario.textContent = `Aniversário: ${pessoa.aniversario}`;

    const todosNomes = document.querySelectorAll('.person-name');
    todosNomes.forEach(nome => nome.classList.remove('highlighted')); 
    elementoClicado.classList.add('highlighted'); 
}

renderizarLista();

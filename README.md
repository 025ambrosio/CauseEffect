
---

# CauseEffect

Este é um projeto simples que simula a exibição de detalhes de uma pessoa ao clicar em seu nome em uma lista. É uma implementação do padrão de interface de usuário onde um item de lista é selecionado para exibir informações detalhadas em um painel adjacente.

## Objetivo

O objetivo deste projeto é criar uma página web que liste algumas pessoas. Ao clicar em um nome da lista, informações detalhadas sobre a pessoa são exibidas ao lado. A seleção do nome também é destacada para melhorar a experiência do usuário.

## Funcionalidades

- **Lista de Pessoas**: Exibe uma lista com os nomes de várias pessoas.
- **Exibição de Detalhes**: Ao clicar em um nome, as informações detalhadas da pessoa (nome completo, endereço, telefone e aniversário) são exibidas ao lado.
- **Destaque do Nome**: Quando um nome é clicado, ele é destacado com uma cor de fundo, facilitando a identificação do item selecionado.
- **Efeitos Visuais**: O nome da pessoa recebe um efeito visual quando é clicado e é destacado com uma cor de fundo.

## Tecnologias Usadas

- **HTML**: Estrutura da página.
- **CSS**: Estilo da página, incluindo o destaque de nomes e o layout do painel de detalhes.
- **JavaScript**: Lógica para renderizar a lista de pessoas e exibir as informações detalhadas de forma interativa.

## Estrutura do Projeto

```
/CauseEffect
│
├── index.html        # Estrutura da página
├── script.js         # Lógica JavaScript para interação
└── style.css         # Estilos da página
```

### 1. `index.html`

Arquivo HTML que contém a estrutura da página. Ele possui uma lista de pessoas e um painel de detalhes. Os dados são inseridos dinamicamente com o uso de JavaScript.

### 2. `script.js`

Arquivo JavaScript que contém a lógica para renderizar a lista de pessoas e exibir os detalhes quando um nome é clicado. Ele também gerencia o destaque visual do nome selecionado.

### 3. `style.css`

Arquivo CSS para estilizar a página, incluindo a formatação da lista de pessoas, o painel de detalhes e os efeitos visuais ao passar o mouse ou clicar em um nome.

## Como Executar o Projeto

1. Faça o download ou clone este repositório para o seu computador.
2. Abra o arquivo `index.html` em um navegador da sua escolha.
3. A página será exibida com a lista de pessoas. Ao clicar em um nome, as informações detalhadas sobre a pessoa serão mostradas no painel à direita.

## Exemplo de Dados

Aqui está um exemplo de dados que estão sendo usados no projeto (embutidos no arquivo JavaScript):

```javascript
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
```

## Melhorias Futuras

- Adicionar animações ao clicar nos itens da lista.
- Permitir que os dados sejam carregados de uma API externa, em vez de estarem codificados no arquivo JavaScript.
- Implementar um filtro ou barra de busca para encontrar pessoas por nome.
- Refatorar o código para usar um framework como **React** ou **Vue.js**, que podem facilitar a gestão de estados e tornar o código mais escalável.

## Contribuição

1. Faça um fork deste repositório.
2. Crie uma branch para a sua feature (`git checkout -b minha-feature`).
3. Faça o commit das suas mudanças (`git commit -am 'Adiciona nova feature'`).
4. Envie para o branch remoto (`git push origin minha-feature`).
5. Abra um pull request.

## Licença

Este projeto é de código aberto e está disponível sob a licença MIT.

---

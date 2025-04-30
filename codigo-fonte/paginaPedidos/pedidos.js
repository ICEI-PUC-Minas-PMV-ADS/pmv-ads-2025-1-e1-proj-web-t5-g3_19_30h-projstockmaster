
// Dados iniciais para demonstração (serão substituídos pelos dados do localStorage)
const dadosIniciais = [
    {
        nome: "Coca-cola 350ml",
        categoria: "Refrigerantes",
        fornecedor: "FEMSA",
        valorUnitario: "R$ 2,59",
        quantidade: 200,
        dataEntrada: "01/04/2025"
    },
    {
        nome: "Coca-cola 1L",
        categoria: "Refrigerantes",
        fornecedor: "FEMSA",
        valorUnitario: "R$ 4,70",
        quantidade: 150,
        dataEntrada: "28/03/2025"
    },
    {
        nome: "Del Valle 1L",
        categoria: "Sucos",
        fornecedor: "FEMSA",
        valorUnitario: "R$ 3,50",
        quantidade: 60,
        dataEntrada: "25/03/2025"
    },
    {
        nome: "Brahma 600ml",
        categoria: "Cervejas",
        fornecedor: "Ambev",
        valorUnitario: "R$ 5,00",
        quantidade: 300,
        dataEntrada: "18/03/2025"
    }
];

// Elementos do DOM
const btnSalvar = document.getElementById('btn-salvar');
const btnCancelar = document.getElementById('btn-cancelar');
const btnNovoPedido = document.getElementById('btn-novo-pedido');
const formPedido = document.getElementById('form-pedido');
const tabelaPedidos = document.getElementById('orders-table-body');
const notification = document.getElementById('notification');

// Inicialização
document.addEventListener('DOMContentLoaded', function () {
    // Verifica se já existem pedidos salvos no localStorage
    let pedidos = JSON.parse(localStorage.getItem('pedidos'));

    // Se não existirem, inicializa com os dados de demonstração
    if (!pedidos) {
        localStorage.setItem('pedidos', JSON.stringify(dadosIniciais));
        pedidos = dadosIniciais;
    }

    // Carrega os pedidos na tabela
    carregarPedidos();

    // Adiciona evento de click ao botão Salvar
    btnSalvar.addEventListener('click', salvarPedido);

    // Adiciona evento de click ao botão Cancelar
    btnCancelar.addEventListener('click', limparFormulario);

    // Adiciona evento de click ao botão Novo Pedido
    btnNovoPedido.addEventListener('click', function () {
        limparFormulario();
        document.getElementById('nome-produto').focus();
    });
});

// Função para carregar os pedidos na tabela
function carregarPedidos() {
    // Limpa a tabela
    tabelaPedidos.innerHTML = '';

    // Recupera os pedidos do localStorage
    const pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];

    // Adiciona os pedidos à tabela
    pedidos.forEach(pedido => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
                    <td>${pedido.nome}</td>
                    <td>${pedido.categoria}</td>
                    <td>${pedido.fornecedor}</td>
                    <td>${pedido.valorUnitario}</td>
                    <td>${pedido.quantidade}</td>
                    <td>${pedido.dataEntrada}</td>
                `;
        tabelaPedidos.appendChild(tr);
    });
}

// Função para salvar um novo pedido
function salvarPedido() {
    // Recupera os valores do formulário
    const nome = document.getElementById('nome-produto').value;
    const categoria = document.getElementById('categoria').value;
    const fornecedor = document.getElementById('fornecedor').value;
    const dataEntrada = document.getElementById('data-entrada').value;
    const quantidade = document.getElementById('quantidade').value;
    let valorUnitario = document.getElementById('valor-unitario').value;

    // Validação básica
    if (!nome || !categoria || !fornecedor || !dataEntrada || !quantidade || !valorUnitario) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    // Formata o valor para o padrão "R$ X,XX" se não estiver formatado
    if (!valorUnitario.includes('R$')) { // <-- Correção 1: Adicionado '$' e ')'
        // Remove caracteres não numéricos, exceto ponto e vírgula
        valorUnitario = valorUnitario.replace(/[^\d.,]/g, '');

        // Substitui ponto por vírgula se necessário (para garantir formato brasileiro)
        valorUnitario = valorUnitario.replace('.', ',');

        // Adiciona o "R$" e formata o valor
        valorUnitario = `R$ ${valorUnitario}`;
    } // <-- Correção 2: Adicionada chave de fechamento do if

    // Cria o objeto pedido
    const novoPedido = {
        nome,
        categoria,
        fornecedor,
        valorUnitario,
        quantidade: parseInt(quantidade),
        dataEntrada
    };

    // Recupera os pedidos existentes
    const pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];

    // Adiciona o novo pedido à lista
    pedidos.push(novoPedido);

    // Salva a lista atualizada no localStorage
    localStorage.setItem('pedidos', JSON.stringify(pedidos));

    // Atualiza a tabela
    carregarPedidos();

    // Limpa o formulário
    limparFormulario();

    // Mostra notificação
    mostrarNotificacao();
}
// <-- Correção 3: Movido todo o bloco acima para dentro da função salvarPedido e adicionada a chave de fechamento '}' da função aqui.

// Função para limpar o formulário
function limparFormulario() {
    document.getElementById('nome-produto').value = '';
    document.getElementById('categoria').value = '';
    document.getElementById('fornecedor').value = '';
    document.getElementById('data-entrada').value = '';
    document.getElementById('quantidade').value = '';
    document.getElementById('valor-unitario').value = '';
}

// Função para mostrar notificação
function mostrarNotificacao() {
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}

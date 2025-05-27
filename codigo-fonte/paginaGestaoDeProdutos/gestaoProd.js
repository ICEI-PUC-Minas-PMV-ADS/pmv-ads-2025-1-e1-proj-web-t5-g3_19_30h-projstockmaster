function getProdutos() {
    const produtos = localStorage.getItem('produtos');
    return produtos ? JSON.parse(produtos) : [];
}

function saveProduto(produto) {
    const produtos = getProdutos();
    produtos.push(produto);
    localStorage.setItem('produtos', JSON.stringify(produtos));
}

function renderProdutos() {
    const produtos = getProdutos();
    const tbody = document.querySelector('.inventory-table tbody');

    // Limpar tabela
    tbody.innerHTML = '';

    // Renderizar apenas produtos com campos válidos
    produtos.forEach(produto => {
        // Ignorar produtos sem nome ou categoria (ou outro campo obrigatório)
        if (!produto.nome || !produto.categoria || !produto.lote || !produto.validade || !produto.quantidade) {
            return;
        }

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${produto.nome}</td>
            <td>${produto.categoria}</td>
            <td>${produto.lote}</td>
            <td>${produto.validade}</td>
            <td ${produto.quantidade <= 10 ? 'class="quantity-alert"' : ''}>
                ${produto.quantidade} ${produto.quantidade <= 10 ? '⚠️' : ''}
            </td>
        `;
        tbody.appendChild(tr);
    });
}


document.querySelector('.btn-save').addEventListener('click', () => {
    const nome = document.querySelector('input[name="nome"]').value.trim();
    const categoria = document.querySelector('input[name="categoria"]').value.trim();
    const lote = document.querySelector('input[name="lote"]').value.trim();
    const validade = document.querySelector('input[name="validade"]').value.trim();
    const quantidade = parseInt(document.querySelector('input[name="quantidade"]').value.trim(), 10);

    if (nome && categoria && lote && validade && !isNaN(quantidade)) {
        const produto = { nome, categoria, lote, validade, quantidade };
        saveProduto(produto);
        renderProdutos();

        // Limpar campos
        document.querySelectorAll('.form-control').forEach(input => input.value = '');
    } else {
        alert('Por favor, preencha todos os campos corretamente!');
    }
});

// Inicializar tabela ao carregar
document.addEventListener('DOMContentLoaded', renderProdutos);

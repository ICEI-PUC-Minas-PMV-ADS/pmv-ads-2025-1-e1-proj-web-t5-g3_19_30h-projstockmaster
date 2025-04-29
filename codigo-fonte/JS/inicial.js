document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove a classe 'selected' de todos os links
            navLinks.forEach(item => {
                item.classList.remove('selected');
            });
            
            // Adiciona a classe 'selected' apenas ao link clicado
            this.classList.add('selected');
            
            // Atualiza o conteúdo
            const target = this.getAttribute('data-target');
            updateContent(target);
        });
    });

    function updateContent(page) {
        const contentArea = document.querySelector('.main-content');
        // Simulação - na prática você pode carregar conteúdo dinâmico
        switch(page) {
            case 'dashboard':
                contentArea.innerHTML = `
                    <div class="welcome-message">
                        <h1>Boas-vindas ao Stock Master</h1>
                        <p>Selecione uma opção no menu lateral para começar.</p>
                    </div>`;
                break;
            case 'produtos':
                contentArea.innerHTML = `<h2>Gestão de Produtos</h2><p>Conteúdo da página de produtos...</p>`;
                break;
            // Adicione outros casos conforme necessário
        }
    }
});
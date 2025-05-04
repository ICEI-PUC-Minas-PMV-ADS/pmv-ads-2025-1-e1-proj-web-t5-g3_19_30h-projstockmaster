class SidebarManager {
  constructor() {
    this.sidebar = null;
    this.menuToggle = null;
    this.isMobile = window.innerWidth <= 768;

    this.init();
    this.setupEvents();
  }

  init() {
    // Injetar a sidebar no DOM
    this.injectSidebar();

    // Elementos DOM
    this.sidebar = document.querySelector('.sidebar');
    this.menuToggle = document.getElementById('menuToggle');

    // Marcar item ativo baseado na página atual
    this.setActiveItem();
  }

  injectSidebar() {
    const sidebarHTML = `
      <aside class="sidebar">
        <div class="logo">
          <img src="../global/logo.png" alt="StockMaster Logo">
        </div>
        <ul class="nav-menu">
          <li class="nav-item">
            <a href="../Dashboard/dashboard.html" class="nav-link" data-target="dashboard">Dashboard</a>
          </li>
          <li class="nav-item">
            <a href="../paginaGestaoDeProdutos/gestaoProd.html" class="nav-link" data-target="gestaoProd">Gestão de produtos</a>
          </li>
          <li class="nav-item">
            <a href="../paginapedidos/pedidos.html" class="nav-link" data-target="pedidos">Pedidos</a>
          </li>
          <li class="nav-item">
            <a href="../paginaGestaoDeEstoque/gestaoDeEstoque.html" class="nav-link" data-target="gestaoDeEstoque">Gestão de estoque</a>
          </li>
          <li class="nav-item">
            <a href="../paginaderelatorios/relatorios.html" class="nav-link" data-target="relatorios">Relatórios</a>
          </li>
          <li class="nav-item">
            <a href="../ConfiguracaoConta/config-conta.html" class="nav-link" data-target="config-conta">Configurações</a>
          </li>
        </ul>
      </aside>`;

    document.body.insertAdjacentHTML('afterbegin', sidebarHTML);
  }

  setupEvents() {
    // Evento do botão toggle
    this.menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      this.toggleSidebar();
    });

    // Fechar ao clicar fora
    document.addEventListener('click', (e) => {
      if (!this.sidebar.contains(e.target) && !e.target.closest('.mobile-menu-toggle')) {
        this.closeSidebar();
      }
    });

    // Fechar ao redimensionar para desktop
    window.addEventListener('resize', () => {
      const newIsMobile = window.innerWidth <= 768;

      if (this.isMobile !== newIsMobile) {
        this.isMobile = newIsMobile;
        if (!this.isMobile) {
          this.closeSidebar();
        }
      }
    });

    // Fechar ao navegar (para mobile)
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        if (this.isMobile) {
          this.closeSidebar();
        }
      });
    });
  }

  toggleSidebar() {
    this.sidebar.classList.toggle('active');
    document.body.classList.toggle('menu-open');
    this.toggleIcons();
  }

  closeSidebar() {
    this.sidebar.classList.remove('active');
    document.body.classList.remove('menu-open');
    this.showMenuIcon();
  }

  toggleIcons() {
    const menuIcon = this.menuToggle.querySelector('.menu-icon');
    const closeIcon = this.menuToggle.querySelector('.close-icon');

    if (this.sidebar.classList.contains('active')) {
      menuIcon.style.display = 'none';
      closeIcon.style.display = 'inline';
    } else {
      this.showMenuIcon();
    }
  }

  showMenuIcon() {
    const menuIcon = this.menuToggle.querySelector('.menu-icon');
    const closeIcon = this.menuToggle.querySelector('.close-icon');
    menuIcon.style.display = 'inline';
    closeIcon.style.display = 'none';
  }

  setActiveItem() {
    // Pegar o nome do arquivo atual (sem .html)
    const currentPath = window.location.pathname;
    let currentPage = currentPath.split('/').pop().replace('.html', '');

    // Verificar a página atual baseada no caminho
    if (currentPath.includes('paginaGestaoDeProdutos')) {
      currentPage = 'gestaoProd';
    } else if (currentPath.includes('ConfiguracaoConta')) {
      currentPage = 'config-conta';
    }

    const activeLink = document.querySelector(`.nav-link[data-target="${currentPage}"]`);

    if (activeLink) {
      document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('selected');
      });
      activeLink.classList.add('selected');
    }
  }
}

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
  new SidebarManager();
});
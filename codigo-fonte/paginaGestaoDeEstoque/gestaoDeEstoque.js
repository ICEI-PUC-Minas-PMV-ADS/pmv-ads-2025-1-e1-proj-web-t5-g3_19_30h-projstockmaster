document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-input');
    const sortSelect = document.querySelector('.sort-select');
    const inventoryTableBody = document.querySelector('.inventory-table tbody');

    const originalRowElements = Array.from(inventoryTableBody.querySelectorAll('tr')).map(tr => tr.cloneNode(true));

    function applySearchFilter() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        const currentRowsInDOM = inventoryTableBody.querySelectorAll('tr');

        currentRowsInDOM.forEach(row => {
            const cells = row.querySelectorAll('td');
            let match = false;
            for (const cell of cells) { // Itera sobre as células da linha atual
                if (cell.textContent.toLowerCase().includes(searchTerm)) {
                    match = true;
                    break; // Encontrou uma correspondência nesta linha
                }
            }
            row.style.display = match ? '' : 'none'; // Mostra ou oculta a linha
        });
    }

    /**
     * Converte uma string de data no formato DD/MM/YYYY para um objeto Date.
     * @param {string} dateStr - A string da data.
     * @returns {Date|null} O objeto Date ou null se a string for inválida.
     */
    function parseDate(dateStr) {
        const parts = dateStr.split('/');
        if (parts.length === 3) {
            const day = parseInt(parts[0], 10);
            const month = parseInt(parts[1], 10) - 1;
            const year = parseInt(parts[2], 10);
            if (!isNaN(day) && !isNaN(month) && !isNaN(year)) {
                return new Date(year, month, day);
            }
        }
        return null;
    }

    /**
     * Obtém o valor de uma célula para fins de ordenação.
     * @param {HTMLTableRowElement} rowElement - O elemento <tr>.
     * @param {number} columnIndex - O índice da coluna.
     * @returns {string|number|Date|null} O valor processado da célula.
     */
    function getCellValueForSort(rowElement, columnIndex) {
        const cell = rowElement.cells[columnIndex];
        if (!cell) return null;

        const cellText = cell.textContent.trim();

        switch (columnIndex) {
            case 0:
            case 1:
            case 2:
                return cellText.toLowerCase();
            case 3:
                return parseDate(cellText);
            case 4:
                return parseInt(cellText.split(' ')[0], 10);
            default:
                return cellText.toLowerCase();
        }
    }

    /**
     * Renderiza as linhas na tabela e aplica o filtro de busca.
     * @param {HTMLTableRowElement[]} rowsToDisplay - Array de elementos <tr> para exibir.
     */
    function renderTableRows(rowsToDisplay) {
        inventoryTableBody.innerHTML = '';
        rowsToDisplay.forEach(row => {
            inventoryTableBody.appendChild(row);
        });
        applySearchFilter();
    }

    searchInput.addEventListener('input', applySearchFilter);

    sortSelect.addEventListener('change', () => {
        const sortValue = sortSelect.value;
        let rowsToSortAndDisplay;

        if (sortValue === "0") {
            rowsToSortAndDisplay = originalRowElements.map(row => row.cloneNode(true));
        } else {
            const columnIndex = parseInt(sortValue) - 1;

            rowsToSortAndDisplay = originalRowElements.map(row => row.cloneNode(true));

            rowsToSortAndDisplay.sort((rowA, rowB) => {
                const valA = getCellValueForSort(rowA, columnIndex);
                const valB = getCellValueForSort(rowB, columnIndex);


                if (valA === null && valB === null) return 0;
                if (valA === null) return 1;
                if (valB === null) return -1;

                if (valA instanceof Date && valB instanceof Date) {
                    return valA.getTime() - valB.getTime();
                }
                if (typeof valA === 'number' && typeof valB === 'number') {
                    if (isNaN(valA) && isNaN(valB)) return 0;
                    if (isNaN(valA)) return 1;
                    if (isNaN(valB)) return -1;
                    return valA - valB;
                }
                return String(valA).localeCompare(String(valB));
            });
        }
        renderTableRows(rowsToSortAndDisplay);
    });
});
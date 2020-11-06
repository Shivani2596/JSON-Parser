
    const renderTable = (val) => {
        let self = this;
        let table = document.createElement('table');
        table.style.border = "1px solid";
        let tableBody = document.createElement('tbody');
        let rowHead = document.createElement('tr');
        let row = document.createElement('tr');
        val.forEach(function (rowData) {
            Object.entries(rowData).map(([label, value]) => {
                label = startCase(label);
                let cellHead = document.createElement('td');
                cellHead.appendChild(document.createTextNode(label));
                rowHead.appendChild(cellHead);
                let cell = document.createElement('td');
                if (!Array.isArray(value)) {
                    cell.appendChild(document.createTextNode(value));
                    row.appendChild(cell);
                } else {
                    cell.appendChild(document.createTextNode("CLICK_ME"));
                    cell.onclick = () => { return self.renderList(label, value) };
                    row.appendChild(cell);
                }
            });
        });
        tableBody.appendChild(rowHead);
        tableBody.appendChild(row);
        table.appendChild(tableBody);
        document.body.appendChild(table);
    }

    export default renderTable;


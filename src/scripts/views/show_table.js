//display start table of note
import { TABLE } from "../constans/elements";
import addCell from "../moduls/TableNote/table_cell";

function showTable(table, btn) {
    const tableBody = table.querySelector('tbody');
    tableBody.innerHTML = '';
    TABLE.forEach((rowObj, key) => {
        if(rowObj.archived === false) {
            const tableRow = document.createElement('tr');
            tableBody.appendChild(tableRow);
            addCell(tableRow, rowObj.name);
            addCell(tableRow, rowObj.created);
            addCell(tableRow, rowObj.category);
            addCell(tableRow, rowObj.content);
            addCell(tableRow, rowObj.dates);
            tableRow.id = key;
    
            const tableColumnBtn = document.createElement('td');
            tableColumnBtn.innerHTML = btn;
            tableRow.appendChild(tableColumnBtn);
        }
    }) 
}
export default showTable;
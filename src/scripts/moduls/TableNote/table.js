//create table notes
import createNotes from  './create_notes';
import addCell from './table_cell';

function createTable (arr, table, btn) {
    const tableBody = table.querySelector('tbody');
    tableBody.innerHTML = '';
    let archiveStatus;
    if(table.id === 'table-note') archiveStatus = false;
    if(table.id === 'archive-note') archiveStatus = true;

    arr.forEach((obj) => {
        let objRow = createNotes(obj.name, obj.category, obj.content);
        objRow.archived = obj.archived;
        if(obj.archived === archiveStatus) {
            const tableRow = document.createElement('tr');
            tableBody.appendChild(tableRow);
            addCell(tableRow, obj.name);
            addCell(tableRow, obj.created);
            addCell(tableRow, obj.category);
            addCell(tableRow, obj.content);
            addCell(tableRow, objRow.dates);
            tableRow.id = obj.id;
    
            const tableColumnBtn = document.createElement('td');
            tableColumnBtn.innerHTML = btn;
            tableRow.appendChild(tableColumnBtn);
        }
    })
    return tableBody;
}
export default createTable;

//display table's rows
import createNotes from '../moduls/TableNote/create_notes';
import createNote from '../moduls/Modal/modal';
import Http from '../service/http';


function showNewRows(table, btn) {
    const tableBody = table.querySelector('tbody');
    const tableRow = document.createElement('tr');
    const tableColumnBtn = document.createElement('td');

    tableBody.appendChild(tableRow);
    const  noteObj = createNote();
    const newRow = createNotes(noteObj.name, noteObj.category, noteObj.content);

    Object.entries(newRow).forEach(([key, value]) => {
        const tableColumn = document.createElement('td');
        tableColumn.innerText = value;
        tableRow.appendChild(tableColumn);
    });

    tableColumnBtn.innerHTML = btn;
    tableRow.appendChild(tableColumnBtn);
    Http.post({
        url: 'TABLE_CONTENT',
        body: noteObj
    })
    .then(response => {
        tableRow.id = response.id;
    })
}
export default showNewRows;
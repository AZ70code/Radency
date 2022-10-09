//display start table's rows
import createNotes from '../moduls/TableNote/create_notes';
import createNote from '../moduls/Modal/modal';


function showRows(table, btn) {
    const tableBody = table.querySelector('tbody');
    const tableRow = document.createElement('tr');
    const tableColumnBtn = document.createElement('td');

    tableBody.appendChild(tableRow);
    
    const [noteKey, noteObj] = createNote();
    const newRow = createNotes(noteObj.name, noteObj.category, noteObj.content);

    Object.entries(newRow).forEach(([key, value]) => {
        const tableColumn = document.createElement('td');
        tableColumn.innerText = value;
        tableRow.appendChild(tableColumn);
    });

    tableColumnBtn.innerHTML = btn;
    tableRow.appendChild(tableColumnBtn);
    tableRow.id = noteKey;
}
export default showRows;
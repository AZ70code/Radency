//creation cells for start table
function addCell(row, value) {
    const tableColumn = document.createElement('td');
    tableColumn.innerText = value;
    row.appendChild(tableColumn);
}
 export default addCell;
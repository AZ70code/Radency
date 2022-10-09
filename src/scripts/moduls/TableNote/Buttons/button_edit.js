//editor for row's content
import {TABLE} from '../../../constans/elements';

function editContent(rows, btn) {
    rows.classList.add('selected')
    let tdInput = rows.cells[3];
    let value = tdInput.textContent;
    const input = document.createElement('textarea');
    input.setAttribute('maxlength', 200);
    input.value = value;

    while (tdInput.firstChild) {
        tdInput.removeChild(tdInput.firstChild);
    }
    tdInput.appendChild(input);
    input.focus();
    tdInput.children[0].setAttribute('value', value);


    input.addEventListener('blur', () => {
        tdInput.removeChild(input);
        tdInput.appendChild(document.createTextNode(input.value));
        rows.cells[4].textContent = input.value.match(/\b\s\d\d[./]\d\d[./]\d\d\b/g);

        let cellEdit = TABLE.get(rows.id);
        cellEdit.content = input.value;
        cellEdit.dates = rows.cells[4].textContent;
        TABLE.set(rows.id, cellEdit);
        
        rows.classList.remove('selected');
        btn.removeAttribute('disabled', 'disabled');
    });
}


export default editContent;
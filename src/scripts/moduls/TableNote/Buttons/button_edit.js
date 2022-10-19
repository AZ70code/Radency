//editor for row's content
import Http from '../../../service/http';

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

        Http.get({url: 'TABLE_CONTENT/'+`${rows.id}`})
        .then(resolve => {
            resolve.content = input.value;
            resolve.dates = rows.cells[4].textContent;
            return resolve
        })
        .then(resolve => {
            Http.put({
              url: 'TABLE_CONTENT/' +`${rows.id}`,
              body: resolve
            })
        });

        rows.classList.remove('selected');
        btn.removeAttribute('disabled', 'disabled');
    });
}


export default editContent;
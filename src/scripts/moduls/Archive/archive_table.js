//create table archive and archive collection
import { CONTAINER, BUTTON_ARCHIVE, TABLE, ARCHIVE_ARRAY, TABLE_ARCHIVE_WRAPPER } from "../../constans/elements";
import { TABLE_ARCHIVE } from "../../templates/archive_temp";
import { BUTTON_UNARCHIVE_TEMP } from '../../templates/unarchive_buttons';
import closeModal from '../Modal/close_modal';
import addCell from "../TableNote/table_cell";


function createArchive() {
    TABLE_ARCHIVE_WRAPPER.innerHTML = TABLE_ARCHIVE;
    TABLE_ARCHIVE_WRAPPER.classList.add('archive-wrapper');
    const Title = document.createElement('h3');
    Title.className = 'archive-title title';
    Title.innerText = 'Archive';
    TABLE_ARCHIVE_WRAPPER.prepend(Title);

    CONTAINER.append(TABLE_ARCHIVE_WRAPPER);
    const ArchivNote = document.querySelector('#archive-note');
    const tableBody = ArchivNote.querySelector('tbody');
    ARCHIVE_ARRAY.length = 0;

    TABLE.forEach((rowObj, key) => {
        if(rowObj.archived === true) {
            ARCHIVE_ARRAY.set(key, rowObj);
        }
    })

    ARCHIVE_ARRAY.forEach((row, index) => {
        const tableRow = document.createElement('tr');
        tableRow.id = index;
        tableBody.appendChild(tableRow);

        addCell(tableRow, row.name);
        addCell(tableRow, row.created);
        addCell(tableRow, row.category);
        addCell(tableRow, row.content);
        addCell(tableRow, row.dates);

        const tableColumnBtn = document.createElement('td');
        tableColumnBtn.innerHTML = BUTTON_UNARCHIVE_TEMP;
        tableRow.appendChild(tableColumnBtn);
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal(ArchivNote, BUTTON_ARCHIVE );
        }
    });
    return tableBody;
}

export default createArchive;
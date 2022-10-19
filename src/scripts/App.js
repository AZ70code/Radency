import '../style/main.scss';
import { BUTTON_CREATE_NOTE, MODAL, BUTTON_ARCHIVE, TABLE_NOTE } from './constans/elements';
import { BUTTONS_SERVICE_TEMP } from  './templates/buttons_service_temp';

import createTable from './moduls/TableNote/table';
import deleteRow from './moduls/TableNote/Buttons/button_delete';
import archiveRows from './moduls/TableNote/Buttons/button_archive';
import editContent from './moduls/TableNote/Buttons/button_edit';
import showArchive from './views/show_archive';
import unarchive from './moduls/Archive/unarchive';
import openModal from './views/open_modal';
import closeModal from './moduls/Modal/close_modal';
import createArchive from './moduls/Archive/archive_table';
import showCounts from './views/table_counter';
import Http from './service/http';

function App() {
    Http.get({url: 'TABLE_CONTENT'})
    .then(value => {
        return createTable(value, TABLE_NOTE, BUTTONS_SERVICE_TEMP);
        }
    );
    createArchive();

    BUTTON_CREATE_NOTE.addEventListener('click', openModal);

    TABLE_NOTE.addEventListener('click', async (e)=> {
        if(e.target.closest('.btn-edit')) {
            let btnEdit = e.target.closest('.btn-edit');
            btnEdit.setAttribute('disabled', 'disabled');
            if (!btnEdit) return; 
            if (!TABLE_NOTE.contains(btnEdit)) return;
            let row = btnEdit.parentNode.parentNode;
            editContent(row, btnEdit);
        }
        if(e.target.closest('.btn-delete')) {
            let btnDelete = e.target.closest('.btn-delete');
            if (!btnDelete) return; 
            if (!TABLE_NOTE.contains(btnDelete)) return;
            let row = btnDelete.parentNode.parentNode;
            deleteRow(row);
            await showCounts()
        }
        if(e.target.closest('.btn-archive')) {
            let btnArchive = e.target.closest('.btn-archive');
            if (!btnArchive) return; 
            if (!TABLE_NOTE.contains(btnArchive)) return;
            let row = btnArchive.parentNode.parentNode;
             await archiveRows(row);
             await showCounts();
        }
    });

    BUTTON_ARCHIVE.addEventListener('click', () => {
        showArchive();
        const ArchivTable = document.querySelector('#archive-note');
        if(ArchivTable) {
            ArchivTable.addEventListener('click', (e) => {
                let btnRemove = e.target.closest('.btn-remove');
                if (!btnRemove) return;
                if (!ArchivTable.contains(btnRemove)) return;
                let row = btnRemove.parentNode.parentNode;
                unarchive(row);
            })
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal(MODAL, BUTTON_CREATE_NOTE);
        }
    });

    let observer = new MutationObserver( async () => {
        await showCounts();
    });
    observer.observe(TABLE_NOTE, {childList: true, subtree: true});
}
export default App;


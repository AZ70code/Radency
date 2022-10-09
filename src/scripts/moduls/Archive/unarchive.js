import { ARCHIVE_ARRAY, TABLE_NOTE, TABLE } from '../../constans/elements';
import { BUTTONS_SERVICE_TEMP } from '../../templates/buttons_service_temp'
import showTable from '../../views/show_table';


function unarchive(rows) {
    ARCHIVE_ARRAY.delete(rows.id);
    rows.remove();
    let removedRow = TABLE.get(rows.id);
    removedRow.archived = false;
    showTable(TABLE_NOTE, BUTTONS_SERVICE_TEMP);
}

export default unarchive;
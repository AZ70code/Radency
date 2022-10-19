//delete archived rows from table note
import Http from "../../../service/http";
import showArchiveTable from "../../Archive/show_archive-table";
import showCounts from "../../../views/table_counter";

async function archiveRows(rows) {
    rows.remove();
    let getObjRow =  await Http.get({url: 'TABLE_CONTENT/'+`${rows.id}`})
    getObjRow.archived = true;
    await Http.put({
        url: 'TABLE_CONTENT/' +`${rows.id}`,
        body: getObjRow
    });
    await showArchiveTable();
}
export default archiveRows;

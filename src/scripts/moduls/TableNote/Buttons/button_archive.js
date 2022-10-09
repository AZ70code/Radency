//delete archived rows from table note
import { TABLE } from "../../../constans/elements";

function archiveRows(rows) {
    let archivedRow =  TABLE.get(rows.id);
    rows.remove();
    archivedRow.archived = true;
    TABLE.set(rows.id, archivedRow);
}
export default archiveRows;

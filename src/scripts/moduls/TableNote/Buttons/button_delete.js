//remove deleted row from table note
import { TABLE } from "../../../constans/elements";

function deleteRow(rows) {
    TABLE.delete(rows.id);
    rows.remove();
    return TABLE;
}
export default deleteRow;
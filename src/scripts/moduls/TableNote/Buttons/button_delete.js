//remove deleted row from table note
import Http from "../../../service/http";

function deleteRow(rows) {
    rows.remove();
    Http.delete({url: 'TABLE_CONTENT/'+`${rows.id}`,
    });
}
export default deleteRow;
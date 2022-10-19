import createTable from "../TableNote/table";
import Http from "../../service/http";
import { BUTTON_UNARCHIVE_TEMP } from "../../templates/unarchive_buttons";

async function showArchiveTable() {
  const ArchivTable = document.querySelector('#archive-note');
  let arr = await  Http.get({url: 'TABLE_CONTENT'});
  return createTable(arr, ArchivTable, BUTTON_UNARCHIVE_TEMP);
}
export default showArchiveTable;
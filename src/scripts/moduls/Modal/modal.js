//create new note and add it to note collection
import { TABLE, BUTTONS } from "../../constans/elements";
import {BUTTONS_SERVICE_TEMP} from  '../../templates/buttons_service_temp';
import createNotes from  '../TableNote/create_notes';
import getCurrentKey from "../TableNote/currentKey";


function createNote() {
    let inputName = document.querySelector('#inputName').value;
    let noteSelected = document.querySelector('#noteSelect');
    let noteSelectedValue = noteSelected.options[noteSelected.selectedIndex].value;
    let inputContent = document.querySelector('#inputContent').value;

    BUTTONS.innerHTML = BUTTONS_SERVICE_TEMP;
    let itemNote = createNotes(inputName, noteSelectedValue, inputContent);
    itemNote.archived = false;
    let currKey = getCurrentKey();
    let itemKey = currKey >= TABLE.size ? currKey+1 : TABLE.size;
    TABLE.set(itemKey.toString(), itemNote);
    return [itemKey, itemNote];
}

export default createNote;
//create new note
import { BUTTONS } from "../../constans/elements";
import { BUTTONS_SERVICE_TEMP } from  '../../templates/buttons_service_temp';
import createNotes from  '../TableNote/create_notes';


function createNote() {
    let inputName = document.querySelector('#inputName').value;
    let noteSelected = document.querySelector('#noteSelect');
    let noteSelectedValue = noteSelected.options[noteSelected.selectedIndex].value;
    let inputContent = document.querySelector('#inputContent').value;

    BUTTONS.innerHTML = BUTTONS_SERVICE_TEMP;
    let itemNote = createNotes(inputName, noteSelectedValue, inputContent);
    itemNote.archived = false;
    return itemNote;
}

export default createNote;
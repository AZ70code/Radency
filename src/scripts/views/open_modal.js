//open modal for creation new note
import { BUTTON_CREATE_NOTE, MODAL, TABLE_NOTE } from "../constans/elements";
import {BUTTONS_SERVICE_TEMP} from  "../templates/buttons_service_temp";
import createForm from "./form";
import closeModal from "../moduls/Modal/close_modal";
import showRows from "./show_new-rows";


function openModal() {

    createForm();
    const form = MODAL.querySelector('#form-note');
    const sendButton = document.querySelector('#send-btn');

    BUTTON_CREATE_NOTE.setAttribute('disabled', 'disabled');
    MODAL.style.display= 'block';
    
//create new note's row and close modal
    sendButton.addEventListener('click', () => {
    closeModal(MODAL, BUTTON_CREATE_NOTE);
    showRows(TABLE_NOTE, BUTTONS_SERVICE_TEMP);
    });
//close on click outside modal
    MODAL.addEventListener('click', (e) => {
        if(e.target.contains(form)) {
            closeModal(MODAL, BUTTON_CREATE_NOTE);
        }
    })
    form.reset();
}

export default openModal;

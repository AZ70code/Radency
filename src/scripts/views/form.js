//create modal of form from template
import { MODAL } from '../constans/elements';
import {FORM_CREATE_NOTE} from '../templates/form_temp';

function createForm() {
    MODAL.classList.add('modal')
    MODAL.innerHTML= FORM_CREATE_NOTE;
    document.body.append(MODAL);
    MODAL.style.display= 'none';
}

export default createForm;
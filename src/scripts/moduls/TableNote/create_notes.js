//create note obj and sort it
import Note from './Note';
import sortNote from './sort_note';


function createNotes(name, category, content) {
    const note = new Note(name, category, content);
    note.createdDate();
    note.noteDates();
    const sortedNote = sortNote(note);
    return sortedNote;
}

export default createNotes;
//create table notes collection
import createNotes from  './create_notes';
import {TABLE} from '../../constans/elements';

function createTable (arr) {
    
    arr.forEach((obj, i) => {
        let objRow = createNotes(obj.name, obj.category, obj.content);
        objRow.archived = obj.archived;
        let key = TABLE.size.toString();
        TABLE.set(key, objRow);
    })
}
export default createTable;

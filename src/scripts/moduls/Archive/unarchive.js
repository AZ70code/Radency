import { TABLE_NOTE } from '../../constans/elements';
import Http from '../../service/http';
import { BUTTONS_SERVICE_TEMP } from '../../templates/buttons_service_temp'
import createTable from '../TableNote/table';


async function unarchive(rows) {
    rows.remove();
    let resolve = await Http.get({url: 'TABLE_CONTENT/'+`${rows.id}`});
    resolve.archived = false;
    await Http.put({
        url: 'TABLE_CONTENT/' +`${rows.id}`,
        body: resolve
    });

    let arr = await Http.get({url: 'TABLE_CONTENT'})
    return createTable(arr, TABLE_NOTE, BUTTONS_SERVICE_TEMP);
}

export default unarchive;
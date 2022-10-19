//get note's category
import Http from '../../service/http';

async function getCategories() {
    const task = [];
    const thought = [];
    const idea = [];

    let resolve = await Http.get({url: 'TABLE_CONTENT'});
    resolve.forEach((rowObj) => {
        if(rowObj.category.toLowerCase() === 'task') {
            task.push(rowObj);
        }
        if(rowObj.category.toLowerCase() === 'random thought') {
            thought.push(rowObj);
        }
        if(rowObj.category.toLowerCase() === 'idea') {
            idea.push(rowObj);
        }
    })
    return  [task, thought, idea];
}
export default getCategories;
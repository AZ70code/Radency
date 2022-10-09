//get note's category
import { TABLE } from '../../constans/elements';

function getCategories() {
    const task = [];
    const thought = [];
    const idea = [];
    TABLE.forEach((rowObj, key) => {
        if(rowObj.category.toLowerCase() === 'task') {
            task.push(rowObj);
        }
        if(rowObj.category.toLowerCase() === 'random thought') {
            thought.push(rowObj);
        }
        if(rowObj.category.toLowerCase() === 'idea') {
            idea.push(rowObj);
        }
    });
    return [task, thought, idea]
}
export default getCategories;
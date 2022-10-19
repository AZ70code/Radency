//counter note's quantity according to the category
function noteCounter(category) {
    let archivedCount = 0;
    let activeCount = 0;
    for(let obj of category) {
        if(obj.archived === false) activeCount++;
        if(obj.archived === true) archivedCount++;
    }
    return [activeCount, archivedCount];
}
export default noteCounter;
//counter note's quantity according to the category
function noteCounter(category) {
    let archivedCount = 0;
    let activeCount = 0;

    for(let item of category) {
        if(item.archived === false) activeCount++;
        if(item.archived === true) archivedCount++;
    }
return [activeCount, archivedCount];
}
export default noteCounter;
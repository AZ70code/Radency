//sort note obj according to the sample
function sortNote(data) {
    const dataOrder = ['name', 'created', 'category', 'content', 'dates'];
    const sortedNote = {};
    dataOrder.forEach(item => {
        sortedNote[item] = '';
        for(let key in data) {
            if(key === item) sortedNote[item] = data[key]
        }
    })
    return sortedNote;
}
export default sortNote;

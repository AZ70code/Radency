//class for creation note obj
class Note {
    constructor(name, category, content) {
    this.name = name;
    this.category = category;
    this.content = content;
    }
    createdDate() {
        return this.created = new Date().toLocaleString().slice(0, -3);
    }
    noteDates() {
        return this.dates = this.content.match(/\b\s\d\d[./]\d\d[./]\d\d\b/g);
    }
}

export default Note;

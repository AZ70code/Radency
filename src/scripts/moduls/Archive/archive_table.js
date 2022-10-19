//create table archive
import { CONTAINER, TABLE_ARCHIVE_WRAPPER } from "../../constans/elements";
import { TABLE_ARCHIVE } from "../../templates/archive_temp";
import showArchiveTable from "./show_archive-table";

function createArchive() {
    CONTAINER.append(TABLE_ARCHIVE_WRAPPER);
    TABLE_ARCHIVE_WRAPPER.innerHTML = TABLE_ARCHIVE;
    TABLE_ARCHIVE_WRAPPER.classList.add('archive-wrapper');
    const Title = document.createElement('h3');
    Title.className = 'archive-title title';
    Title.innerText = 'Archive';
    TABLE_ARCHIVE_WRAPPER.prepend(Title);
    showArchiveTable();
}

export default createArchive;
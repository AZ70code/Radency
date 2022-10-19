//display note's quantity in table
import { TABLE_SUMMARY } from "../constans/elements";
import getCategories from "../moduls/Summary/categories";
import noteCounter from "../moduls/Summary/note_counter";

async  function showCounts() {
    const taskRow = TABLE_SUMMARY.querySelector('#row-task');
    const throughtRow = TABLE_SUMMARY.querySelector('#row-thought');
    const ideaRow = TABLE_SUMMARY.querySelector('#row-idea');
    let [task, thought, idea] = await getCategories();
    let taskCount = noteCounter(task);
    let thoughtCount = noteCounter(thought);
    let ideaCount = noteCounter(idea);

    taskRow.cells[1].textContent = taskCount[0]
    taskRow.cells[2].textContent = taskCount[1]
    throughtRow.cells[1].textContent = thoughtCount[0]
    throughtRow.cells[2].textContent = thoughtCount[1]
    ideaRow.cells[1].textContent = ideaCount[0]
    ideaRow.cells[2].textContent = ideaCount[1]
}
export default showCounts;
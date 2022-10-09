export const FORM_CREATE_NOTE =  `
<form id="form-note" class="w-50 p-3 mx-auto">
    <div class="mb-3">
        <label for="inputName" class="form-label">Enter Name</label>
        <input class="form-control" type="text" id="inputName" placeholder="Name" name="name">
    </div>
    <div class="mb-3">
        <label for="noteSelect" class="form-label">Select a category</label>
        <select id="noteSelect" class="form-select form-select-sm" aria-label=".form-select-sm" name="category">
            <option selected>Task</option>
            <option>Random Thought</option>
            <option>Idea</option>
        </select>
    </div>
    <div class=" mb-3">
    <label for="inputContent" class="form-label">Enter content</label>
    <textarea class="form-control" id="inputContent" placeholder="Your note"></textarea>
    </div>
    <div class="d-flex justify-content-end">
        <button id="clear-btn" class="btn btn-secondary" type="reset">Clear</button>
        <button id="send-btn" class="btn btn-primary mx-2" type="button">Ready</button>
    </div>
</form>
`
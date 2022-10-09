export const CONTAINER = document.querySelector('#container');
export const TABLE_NOTE = document.querySelector('#table-note');
export const TABLE_SUMMARY = document.querySelector('#summary');
export const TABLE_ARCHIVE_WRAPPER = document.createElement('div');

export const TABLE_ARCHIVE1 = document.querySelector('#archive-note1');

export const ARCHIVE_ARRAY = new Map;
export const TABLE = new Map;

export const MODAL = document.createElement('div');
export const BUTTON_CREATE_NOTE = document.querySelector('#create-btn');
export const BUTTON_ARCHIVE = document.querySelector('#archive-btn');
export const BUTTONS = document.createElement('div');

export const TABLE_CONTENT = [
    {
    name: 'Shopping List',
    category: 'Task',
    content: 'buy bread, butter and meat',
    archived: false
    },
    {name: 'Shopping List',
    category: 'Idea',
    content: 'to have a picnic next weekend',
    archived: false
    },
    {name: 'Shopping List',
    category: 'Task',
    content: 'pay taxes up to 20/03/22',
    archived: false
    },
    {name: 'Shopping List',
    category: 'Task',
    content: 'make an apointment with a doctor for 25.07.22 or 26.07.22',
    archived: false
    },
    {name: 'Shopping List',
    category: 'Random Thought',
    content: 'it would be cool to live in the mountains',
    archived: false
    }
];

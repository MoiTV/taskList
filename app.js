// Define UI varibles 
const taskInput = document.querySelector('#task'),
    form = document.querySelector('#task-form'),
    collection = document.querySelector('.collection'),
    taskTitle = document.querySelector('#task-title'),
    filter = document.querySelector('#filter'),
    clearTask = document.querySelector('.clear-tasks');
loadEventListeners();

// Load all event listern
function loadEventListeners() {
    // Add task to form
    form.addEventListener('submit', addTask);
    // delete from task form 
    collection.addEventListener('click', removeTask);
    // clearTask.addEventListener('click');
    // filter from task list 
}




function addTask(e) {
    if (taskInput.value === '') {
        console.log('Please add a task');
    } else {
        // Create li
        const li = document.createElement('li');
        // Add class name
        li.className = 'collection-item';
        // Append text node to li
        li.appendChild(document.createTextNode(taskInput.value));

        // Create link
        const link = document.createElement('a');
        // Add class name
        link.className = 'delete-item secondary-content';
        // Add icon
        link.innerHTML = '<i class="fa fa-remove"></i>';
        // Append to link
        li.appendChild(link);

        // Add to colletion
        collection.appendChild(li);

        taskInput.value = '';

        console.log(collection);
    }
    e.preventDefault();
}

function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        e.target.parentElement.parentElement.remove();
    }
}
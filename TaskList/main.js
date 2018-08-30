// Define UI vars

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// load all event listeners

loadEventListeners();


//load all event listeners

function loadEventListeners() {
    // DOM load event
    document.addEventListener('DOMContentLoaded', getTasks);
    // Add Task event
    form.addEventListener('submit', addTask);
    // remove task event
    taskList.addEventListener('click', removeTask);

    // clear tasks event
    clearBtn.addEventListener('click', clearTasks);

    // filter tasks
    filter.addEventListener('keyup', filterTasks);
}
// Get tasks
function getTasks(e) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task) {
        // create li element
        const li = document.createElement('li');
        // Add class
        li.className = 'collection-item';

        // create text node and append to li
        li.appendChild(document.createTextNode(task));
        // create a new link element
        const link = document.createElement('a');

        // add class
        link.className = 'delete-item secondary-content';
        // add icon
        link.innerHTML = '<i class="fas fa-remove"></i>';
        // append the link to li
        li.appendChild(link);

        // append li to ul
        taskList.appendChild(li);
    });
}

// Add Task 
function addTask(e) {

    if (taskInput.value === '') {
        alert('Add a task');
    }

    // create li element
    const li = document.createElement('li');
    // Add class
    li.className = 'collection-item';

    // create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    // create a new link element
    const link = document.createElement('a');

    // add class
    link.className = 'delete-item secondary-content';
    // add icon
    link.innerHTML = '<i class="fas fa-times"></i>';
    // append the link to li
    li.appendChild(link);

    // append li to ul
    taskList.appendChild(li);

    storeTaskInLocalStorage(taskInput.value);
    // clear input
    taskInput.value = '';

    // console.log(li)
    e.preventDefault();
}
// store task in local storage
function storeTaskInLocalStorage(task) {
    console.log(task);

    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    console.log(tasks);

    localStorage.setItem('tasks', JSON.stringify(tasks));
    // localStorage.clear();
}


// remove Task

function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        // console.log(e.target);
        if (confirm('are you sure?')) {
            e.target.parentElement.parentElement.remove();

            // remove from ls
            removeTaskFromLocalStorage(e.target.parentElement.parentElement);
        }
    }
}

// remove from LS

function removeTaskFromLocalStorage(taskItem) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task, index) {
        if (taskItem.textContent === task) {
            tasks.splice(index, 1);
        }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

//  clear tasks

function clearTasks(e) {
    // taskList.innerHTML = '';

    // faster method
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }

    // clear from LS

    clearTasksFromLocalStorage();

}

// clear tasks from local storage

function clearTasksFromLocalStorage() {
    localStorage.clear();
}

// filter tasks

function filterTasks(e) {
    const text = e.target.value.toLowerCase();
    // console.log(text);

    document.querySelectorAll('.collection-item').forEach(function(task) {
        const item = task.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });
}
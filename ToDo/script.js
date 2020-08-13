// MY ID CREATOR
let idCreator = 1;

// Task Class Declaration
class Task{
    constructor(name, taskID){
        this.name = name,
        this.taskID = taskID
    }
};

// Store Class: To Handle My storage
class Store {
    static getTasks() {
        let tasks;
        if(localStorage.getItem('tasks') === null){
            tasks = [];
        } else {
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }
        return tasks;
    };

    static addTask(task) {
        const tasks = Store.getTasks();

        tasks.push(task);

        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    static deleteTask(el){
        const tasks = Store.getTasks();

        if(el.classList.contains('delete')){
            var element = el.parentElement.previousSibling.getAttribute('id');
            console.log(element);
            tasks.forEach((task, index) => {
                if(task.taskID == element){
                    tasks.splice(index, 1);
                }
            });
            localStorage.setItem('tasks', JSON.stringify(tasks))
        }
    };
};


//UI Class Declaration
class UI{
    static displayTasks(){
        const tasks = Store.getTasks();

        tasks.forEach((task) => UI.addTaskToList(task))
    }

    static addTaskToList(task){
        var section = document.querySelector('section');

        // Create the Div that will contain all my stuff
        var myDiv = document.createElement('div');

        // Create the Input
        var myInput = document.createElement('input');
        myInput.setAttribute('type', 'checkbox');
        myInput.classList.add('checker');

         // Create the Span element
        var mySpan = document.createElement('span');
        mySpan.classList.add('items');
        mySpan.setAttribute('id', idCreator++);

        // Validate the Input
        if(task.name === ''){
            showAlert('Please Fill the Input', 'danger');
        } else {
            mySpan.innerText = task.name;

            // Create the icon
            var iconSpan = document.createElement('span');
            iconSpan.innerHTML = `<button type="button" class="btn btn-danger delete">X</button>`;
            
            // Attachment time!!
            myDiv.appendChild(myInput);
            myDiv.appendChild(mySpan);
            myDiv.appendChild(iconSpan);

            section.appendChild(myDiv);

            // Show success message
            showAlert('Task Added Successfully', 'success');
        }
    };

    static deleteTask(el){
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove();
            showAlert('Task deleted successfully', 'danger');
        };
    };

    static striker(el){
        if(el.classList.contains('checker')){
            var myTask = el.nextElementSibling;
            myTask.classList.toggle('itemStroke');
        }
    }

    static clearField(){
        document.getElementById('new_task').value = '';
    }
};

// Event: Display Books THE VERY IGNITION OF THE CODE
UI.displayTasks();

// Event Add a Task
document.querySelector('#myForm').addEventListener('submit', (e) => {
    e.preventDefault();

    // Target the new task div
    var myNewTask = document.getElementById('new_task').value;

    // Instatiate a Task
    const task  = new Task(myNewTask, idCreator++);

    // Add Task to the UI
    UI.addTaskToList(task);
    console.log(task);

    // Add Task to Local storage
    Store.addTask(task);

    // Clear the UI
    UI.clearField();
});


// Event Delete a Task
document.querySelector('section').addEventListener('click', (e) => {
    // Remove Task from UI
    UI.deleteTask(e.target);

    // Remove Task from Storage
    Store.deleteTask(e.target);

    UI.striker(e.target);
});



// The show alert function
function showAlert(message, className){
    var alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${className}`;
    alertDiv.appendChild(document.createTextNode(message));

    var article = document.querySelector('article');
    var form = document.querySelector('#myForm');

    article.insertBefore(alertDiv, form);

    // Disappear in 3 seconds
    setTimeout(() => document.querySelector('.alert').remove(), 2000);
};
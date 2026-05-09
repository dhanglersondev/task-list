let listElement = document.querySelector('#app ul');
let inputElement = document.querySelector('#app input');
let buttonElement = document.querySelector('#app button');

let tasks = [];

function renderTasks(){
    listElement.innerHTML = '';

    tasks.map((todo) => {
        let liElement = document.createElement("li");
        let taskText = document.createTextNode(todo);

        listElement.appendChild(taskText);
        listElement.appendChild(liElement);
    })
}

function addTasks(){
    if(inputElement.value === ''){
        alert('Informe uma tarefa');
        return false;
    } else {
        let newTask = inputElement.value;

        tasks.push(newTask);
        inputElement.value = '';

        renderTasks();
    }
}

buttonElement.onclick = addTasks;
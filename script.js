let listElement = document.querySelector('#app ul');
let inputElement = document.querySelector('#app input');
let buttonElement = document.querySelector('#app button');

let tasks = JSON.parse(localStorage.getItem("@listTask")) || [];

function renderTasks() {

    listElement.innerHTML = '';

    if (tasks.length === 0) {

        listElement.innerHTML = `
            <div class="empty-message">
                Nenhuma tarefa cadastrada.
            </div>
        `;

        return;
    }

    tasks.map((todo) => {

        // LI
        let liElement = document.createElement("li");

        // CONTAINER ESQUERDA
        let taskContent = document.createElement("div");
        taskContent.classList.add("task-content");

        // BOTÃO CHECK
        let checkButton = document.createElement("button");

        checkButton.innerHTML = "✔";

        checkButton.classList.add("check-button");

        // EVENTO CHECK
        checkButton.onclick = function () {

            liElement.classList.toggle("completed");
        };

        // TEXTO
        let spanText = document.createElement("span");

        spanText.innerText = todo;

        // ADICIONANDO NA ESQUERDA
        taskContent.appendChild(checkButton);

        taskContent.appendChild(spanText);

        // EXCLUIR
        let linkElement = document.createElement("a");

        linkElement.setAttribute("href", "#");

        linkElement.innerText = "Excluir";

        let position = tasks.indexOf(todo);

        linkElement.setAttribute(
            "onclick",
            `deleteTask(${position})`
        );

        // MONTAGEM FINAL
        liElement.appendChild(taskContent);

        liElement.appendChild(linkElement);

        listElement.appendChild(liElement);
    });
}

renderTasks();

function addTasks() {
    if (inputElement.value === '') {
        alert('Informe uma tarefa');
        return false;
    } else {
        let newTask = inputElement.value;

        tasks.push(newTask);
        inputElement.value = '';

        renderTasks();
        saveData();
    }
}

buttonElement.onclick = addTasks;

function deleteTask(position) {
    tasks.splice(position, 1);
    renderTasks();
    saveData();
}

function saveData(){
    localStorage.setItem("@listTask", JSON.stringify(tasks));
}
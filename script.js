document.getElementById('addTaskButton').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    
    if (taskInput.value.trim() === '') {
        alert('Por favor, digite uma tarefa!');
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskInput.value;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Remover';
    deleteButton.addEventListener('click', () => {
        taskList.removeChild(li);
    });

    li.appendChild(deleteButton);
    taskList.appendChild(li);

    taskInput.value = '';
}

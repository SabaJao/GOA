// script.js
document.getElementById('addBtn').addEventListener('click', addTask);
document.getElementById('clearAllBtn').addEventListener('click', clearAllTasks);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        // Create a new list item (li)
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener('click', () => {
            li.remove();  // Remove the task item when delete is clicked
        });

        // Create an edit button
        const editBtn = document.createElement('button');
        editBtn.textContent = "Edit";
        editBtn.addEventListener('click', () => {
            const newInput = document.createElement('input');
            newInput.value = li.textContent.replace("EditDelete", "").trim(); // Remove 'EditDelete' text
            const saveBtn = document.createElement('button');
            saveBtn.textContent = "Save";
            saveBtn.addEventListener('click', () => {
                li.textContent = newInput.value; // Save the edited task
                li.appendChild(editBtn);
                li.appendChild(deleteBtn);
            });
            li.textContent = ''; // Clear the task text
            li.appendChild(newInput);
            li.appendChild(saveBtn); // Add the input and save button to the li
        });

        // Append buttons to the li
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);

        // Append li to the task list (ul)
        document.getElementById('taskList').appendChild(li);

        // Clear the input field
        taskInput.value = '';
    }
}

function clearAllTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = ''; // Remove all tasks by clearing the list
}

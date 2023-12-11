document.addEventListener('DOMContentLoaded',function(){
    const taskForm=document.getElementById('task-form');
    const taskInput=document.getElementById('new-task');
    const tasksContainer=document.getElementById('tasks');
    taskForm.addEventListener('submit',function(e){
        e.preventDefault();
        const taskText=taskInput.value;
        if(taskText.trim()!== ''){
            addTask(taskText);
            taskInput.value= '';
        }
    });
    function addTask(taskText){
        const taskElement =document.createElement('div');
        taskElement.classList.add('task');

        const spanElement = document.createElement('span');
        spanElement.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function () {
            tasksContainer.removeChild(taskElement);
        });

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.addEventListener('click', function () {
            taskElement.classList.toggle('completed');
        });

        taskElement.appendChild(spanElement);
        taskElement.appendChild(deleteButton);
        taskElement.appendChild(completeButton);

        tasksContainer.appendChild(taskElement);
    }

});

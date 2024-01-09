
  
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('create-task-form');
  const taskInput = document.getElementById('new-task-description');
  const tasksList = document.getElementById('tasks');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskValue = taskInput.value.trim();
    if(taskValue !== ''){
      
      const listItem = document.createElement('li');

      
      const taskText = document.createElement('p');
      taskText.textContent = taskValue;

    
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.addEventListener('click', () => {
        listItem.remove();
      });
      
      
      listItem.appendChild(taskText);
      listItem.appendChild(deleteBtn);
      
      tasksList.appendChild(listItem);
      
      taskInput.value = '';
    };
  });
});

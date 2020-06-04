document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let submitButton = document.getElementById('submit')
  submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    let tasks = document.getElementById('tasks');
    let li = document.createElement('li')
    li.innerHTML = document.getElementById('new-task-description').value;
    tasks.appendChild(li)
  })





});

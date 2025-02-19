let btn = document.getElementById("newTaskBtn");
let newTask = document.getElementById("newTask");
let taskList = document.getElementById("taskList");

btn.addEventListener("click", () => {
  if (newTask.value.trim() !== "") {
    const listItem = document.createElement("li");
    taskList.appendChild(listItem);
    listItem.textContent = newTask.value;
    newTask.value = "";
    deleteBtn(listItem);
  } else {
    alert("add some tasks");
  }
});

function deleteBtn(listItem) {
  const delBtn = document.createElement("button");
  delBtn.id = "delBtn";
  delBtn.textContent = "remove";
  listItem.appendChild(delBtn);
  delBtn.onclick = () => {
    listItem.remove();
  };
}

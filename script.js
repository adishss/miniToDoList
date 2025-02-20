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
  saveData();
});

function deleteBtn(listItem) {
  const delBtn = document.createElement("button");
  delBtn.id = "delBtn";
  delBtn.textContent = "remove";
  listItem.appendChild(delBtn);
  delBtn.onclick = () => {
    listItem.remove();
    saveData();
  };
  saveData();
}

function saveData() {
  localStorage.setItem("data", taskList.innerHTML);
}

function loadData() {
  taskList.innerHTML = localStorage.getItem("data");
  document.querySelectorAll("#taskList li").forEach((listItem) => {
    let delBtn = listItem.querySelector("button"); // Check if button exists
    if (!delBtn) {
      deleteBtn(listItem);
    } else {
      delBtn.onclick = () => {
        listItem.remove();
        saveData();
      };
    }
  });
}

loadData();

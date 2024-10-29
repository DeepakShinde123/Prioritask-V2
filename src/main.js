import "./index.css";
import SingleTask from "./Components/SingleTask";
import { titleCase, randomId } from "./utils";

const formEl = document.querySelector("[data-form]");
const inputEl = document.querySelector("[data-user-input]");
const taskContainerEl = document.querySelector("[data-task-container]");

let state = [];

function toggleCompleted(id) {
  state = state.map((task) => {
    if (id === id) {
      return { ...task, isCompleted: !task.isCompleted };
    }
    return task;
  });
}

function renderTask() {
  taskContainerEl.innerHTML = "";
  const frag = document.createDocumentFragment();
  state.forEach((task) => {
    frag.appendChild(SingleTask(task.task, task.isCompleted, task.id));
  });
  taskContainerEl.appendChild(frag);
}

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!inputEl.value) return;

  const newTask = {
    task: titleCase(inputEl.value),
    isCompleted: false,
    id: randomId(),
  };

  state.unshift(newTask);

  renderTask();

  inputEl.value = "";
});

taskContainerEl.addEventListener("click", (e) => {
  toggleCompleted(e.target.id);
  state.sort((a, b) => a.isCompleted - b.isCompleted);
});

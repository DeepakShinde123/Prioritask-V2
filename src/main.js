import "./index.css";
import { titleCase } from "./utils";

const inputEl = document.querySelector("[data-user-input]");
const formEl = document.querySelector("[data-form]");
const tasks = [];

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!inputEl.value) return;
  const newTask = {
    tasks: titleCase(inputEl.value),
    isCompleted: false,
    id: tasks.lenght,
  };
  tasks.unshift(newTask);

  inputEl.value = "";
});


document.addEventListener("DOMContentLoaded", () => {
  renderTasks();
  renderNotes();
  setupTaskInput();
  setupNoteInput();
});

/* =========================
   Local Storage Helpers
========================= */
function getStoredData(key) {
  try {
    return JSON.parse(localStorage.getItem(key)) || [];
  } catch (error) {
    console.error(`Error reading ${key} from localStorage:`, error);
    return [];
  }
}

function setStoredData(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

/* =========================
   TO-DO LIST
========================= */
function renderTasks() {
  const taskList = document.getElementById("taskList");
  if (!taskList) return;

  const tasks = getStoredData("tasks");
  taskList.innerHTML = "";

  if (tasks.length === 0) {
    const emptyState = document.createElement("li");
    emptyState.textContent = "No tasks yet. Add your first task.";
    emptyState.style.cursor = "default";
    emptyState.style.opacity = "0.7";
    taskList.appendChild(emptyState);
    return;
  }

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.classList.toggle("completed", task.completed);

    const taskText = document.createElement("span");
    taskText.textContent = task.text;
    taskText.style.flex = "1";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "✕";
    deleteBtn.type = "button";
    deleteBtn.title = "Delete task";
    deleteBtn.style.marginTop = "0";
    deleteBtn.style.width = "auto";
    deleteBtn.style.padding = "6px 10px";
    deleteBtn.style.fontSize = "14px";
    deleteBtn.style.background = "transparent";
    deleteBtn.style.color = "#d64545";
    deleteBtn.style.boxShadow = "none";

    li.style.display = "flex";
    li.style.alignItems = "center";
    li.style.justifyContent = "space-between";
    li.style.gap = "10px";

    taskText.addEventListener("click", () => {
      tasks[index].completed = !tasks[index].completed;
      setStoredData("tasks", tasks);
      renderTasks();
    });

    deleteBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      tasks.splice(index, 1);
      setStoredData("tasks", tasks);
      renderTasks();
    });

    li.appendChild(taskText);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}

function addTask() {
  const input = document.getElementById("input");
  if (!input) return;

  const taskText = input.value.trim();
  if (taskText === "") return;

  const tasks = getStoredData("tasks");
  tasks.push({
    text: taskText,
    completed: false,
  });

  setStoredData("tasks", tasks);
  input.value = "";
  renderTasks();
}

function setupTaskInput() {
  const input = document.getElementById("input");
  if (!input) return;

  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  });
}

/* =========================
   CALCULATOR
========================= */
const display = document.getElementById("display");

function append(value) {
  if (!display) return;
  display.value += value;
}

function clearDisplay() {
  if (!display) return;
  display.value = "";
}

function backspace() {
  if (!display) return;
  display.value = display.value.slice(0, -1);
}

function calculate() {
  if (!display) return;

  const expression = display.value.trim();

  if (!/^[0-9+\-*/().\s]+$/.test(expression)) {
    display.value = "Error";
    return;
  }

  try {
    const result = Function(`"use strict"; return (${expression})`)();
    display.value = result;
  } catch (error) {
    display.value = "Error";
  }
}

/* =========================
   NOTES
========================= */
function renderNotes() {
  const listNote = document.getElementById("listNote");
  if (!listNote) return;

  const notes = getStoredData("notes");
  listNote.innerHTML = "";

  if (notes.length === 0) {
    const emptyMessage = document.createElement("div");
    emptyMessage.className = "note";
    emptyMessage.textContent = "No notes yet. Add your first note.";
    emptyMessage.style.opacity = "0.7";
    listNote.appendChild(emptyMessage);
    return;
  }

  notes.forEach((note, index) => {
    const noteDiv = document.createElement("div");
    noteDiv.className = "note";

    const noteText = document.createElement("span");
    noteText.textContent = note;

    const deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.textContent = "✕";
    deleteBtn.title = "Delete note";

    deleteBtn.addEventListener("click", () => {
      deleteNote(index);
    });

    noteDiv.appendChild(noteText);
    noteDiv.appendChild(deleteBtn);
    listNote.appendChild(noteDiv);
  });
}

function addNote() {
  const textArea = document.getElementById("textarea");
  if (!textArea) return;

  const noteText = textArea.value.trim();
  if (noteText === "") return;

  const notes = getStoredData("notes");
  notes.push(noteText);

  setStoredData("notes", notes);
  textArea.value = "";
  renderNotes();
}

function deleteNote(index) {
  const notes = getStoredData("notes");
  notes.splice(index, 1);
  setStoredData("notes", notes);
  renderNotes();
}

function setupNoteInput() {
  const textArea = document.getElementById("textarea");
  if (!textArea) return;

  textArea.addEventListener("keydown", (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
      addNote();
    }
  });
}

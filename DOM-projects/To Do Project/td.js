const input = document.getElementById("input");
const addBtn = document.getElementById("addElement");
const clearBtn = document.getElementById("button1");
const deleteBtn = document.getElementById("button2");
const itemsContainer = document.querySelector(".items");
const completedContainer = document.querySelector(".completed-items");

let selectedItem = null;

function addItem() {
    const text = input.value.trim();
    if (!text) return;

    const item = createTaskItem(text, itemsContainer, completedContainer);
    itemsContainer.appendChild(item);
    input.value = "";
    input.focus();
}

function createTaskItem(text, fromBox, toBox) {
    const item = document.createElement("div");
    item.classList.add("item");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("task-checkbox");

    const label = document.createElement("span");
    label.textContent = text;

    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            // move to completed
            item.classList.remove("selected");
            if (selectedItem === item) selectedItem = null;
            item.classList.add("done");
            toBox.appendChild(item);
        } else {
            // move back to pending
            item.classList.remove("done");
            fromBox.appendChild(item);
        }
    });

    item.addEventListener("click", (e) => {
        if (e.target === checkbox) return;
        if (selectedItem && selectedItem !== item) {
            selectedItem.classList.remove("selected");
        }
        item.classList.toggle("selected");
        selectedItem = item.classList.contains("selected") ? item : null;
    });

    item.appendChild(checkbox);
    item.appendChild(label);
    return item;
}

function deleteItem() {
    if (!selectedItem) return;
    selectedItem.remove();
    selectedItem = null;
}

function clearAll() {
    itemsContainer.innerHTML = "";
    completedContainer.innerHTML = "";
    selectedItem = null;
}

addBtn.addEventListener("click", addItem);
input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") addItem();
});
deleteBtn.addEventListener("click", deleteItem);
clearBtn.addEventListener("click", clearAll);
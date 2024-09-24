const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

console.log(listContainer);

document.getElementById("add-btn").addEventListener("click", addTask);

function addTask() {
    if (inputBox.value == "") {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        let span = document.createElement("span");
        span.innerHTML= "<i class='fas fa-trash'></i>";                 
        li.appendChild(span);
        listContainer.appendChild(li);
    }
    inputBox.value= "";
    saveData()
} 
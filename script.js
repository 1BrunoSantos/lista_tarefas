const inputBox = document.getElementById("caixa-de-entrada");
const listContainer = document.getElementById("container-lista");

console.log(listContainer);

document.getElementById("botao-adicionar").addEventListener("click", addTask);
addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        addTask();
    }
});

function addTask() {
    if (inputBox.value == "") {
        alert("Você deve escrever alguma coisa!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        let span = document.createElement("span");
        span.innerHTML= "<i class='fas fa-trash'></i>";                 
        li.appendChild(span);
        listContainer.appendChild(li);
    }
    inputBox.value= "";
    saveData();
} 

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

listContainer.addEventListener("click", (e) => {
    if (e.target.tagName.toUpperCase() == "LI"){
        e.target.classList.toggle("checado");
        saveData();
    } else if (e.target.tagName.toUpperCase() == "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
});

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();

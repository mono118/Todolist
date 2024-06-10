const goingList = document.getElementById("ongoingList");
const completedList = document.getElementById("completedList");

function TodoAdd(){
    let name = document.getElementById("Todoname");
    let date = document.getElementById("Tododate");
    let category = document.getElementById("Todocategory").value;
    let memo = document.getElementById("Todomemo")

    let list = document.createElement("li");
    list.appendChild(document.createTextNode(name.value));
    name.value = ""; //入力ボックスの中身を空にする
    goingList.appendChild(list);
}

let addButton = document.getElementById("AddButton");
addButton.addEventListener("click", TodoAdd);
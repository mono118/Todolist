const goingList = document.getElementById("ongoingList");
const completedList = document.getElementById("completedList");

function TodoAdd(){
    let name = document.getElementById("Todoname");
    let date = document.getElementById("Tododate");
    let category = document.getElementById("Todocategory").value;
    let memo = document.getElementById("Todomemo")

    let row = document.createElement("tr");
    let button = document.createElement("input");
    button.type = "checkbox";
    button.addEventListener("change", () => {
        if(button.checked){
            completedList.appendChild(goingList.removeChild(row));
        }else{
            goingList.appendChild(completedList.removeChild(row));
        }
    });
    let list = []; //tableに追加する要素を記録していく
    list.push(button);
    list.push(document.createTextNode(name.value));
    name.value = ""; //入力ボックスの中身を空にする
    list.push(document.createTextNode(date.value));
    date.value = "";
    for (let i = 0; i < list.length; i++) {
        let data = document.createElement("td");
        data.appendChild(list[i]);
        row.appendChild(data);
    }
    console.log(row);
    goingList.appendChild(row);
}

let addButton = document.getElementById("AddButton");
addButton.addEventListener("click", TodoAdd);
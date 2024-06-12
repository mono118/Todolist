const goingList = document.getElementById("ongoingList");
const completedList = document.getElementById("completedList");

function TodoAdd(){
    let name = document.getElementById("Todoname");
    let date = document.getElementById("Tododate");
    let category = document.getElementById("Todocategory").value;
    let memo = document.getElementById("Todomemo")

    let row = document.createElement("tr");

    let statusButton = document.createElement("input");
    statusButton.type = "checkbox";
    statusButton.addEventListener("change", () => {
        if(statusButton.checked){
            completedList.appendChild(goingList.removeChild(row));
        }else{
            goingList.appendChild(completedList.removeChild(row));
        }
    });
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";
    deleteButton.addEventListener("click", () =>{
        const deletecheck = window.confirm("削除しますか？");
        if(deletecheck){
            row.parentElement.removeChild(row);
        }
    });
    let list = []; //tableに追加する要素を記録していく
    list.push(statusButton);
    list.push(document.createTextNode(name.value));
    name.value = ""; //入力ボックスの中身を空にする
    list.push(document.createTextNode(date.value));
    date.value = "";
    list.push(deleteButton);

    for (let i = 0; i < list.length; i++) {
        let data = document.createElement("td");
        data.appendChild(list[i]);
        row.appendChild(data);
    }
    //console.log(row);
    goingList.appendChild(row);
}

let addButton = document.getElementById("AddButton");
addButton.addEventListener("click", TodoAdd);
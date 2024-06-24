const goingList = document.getElementById("ongoingList");
const completedList = document.getElementById("completedList");

const addButton = document.getElementById("AddButton");
addButton.addEventListener("click", TodoList);

function TodoList(){
    let name = document.getElementById("Todoname");
    let date = document.getElementById("Tododate");
    let category = document.getElementById("Todocategory").value;
    let memo = document.getElementById("Todomemo");

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
    let memoButton = document.createElement("button");
    memoButton.innerText = "開く";
    memoButton.addEventListener("click", () => {
        if(memo.value == ""){
            alert("メモはありません");
            return;
        }
    });
    /*let detaileButton = document.createElement("button");
    detaileButton.innerText = "＋";
    detaileButton.addEventListener("click", () => {
        console.log("詳細情報");
    });
    const editButton = document.createElement("button");
    editButton.innerText = "編集";
    editButton.addEventListener("click", () => {
        console.log("編集画面");
    });*/
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
    if(date.value != ""){
        list.push(document.createTextNode(date.value));
        date.value = "";
    }else{
        list.push(document.createTextNode("なし"));
    }
    list.push(document.createTextNode(category));
    list.push(memoButton);
    /*list.push(detaileButton);
    list.push(editButton);*/
    list.push(deleteButton);

    for (let i = 0; i < list.length; i++) {
        let data = document.createElement("td");
        data.appendChild(list[i]);
        row.appendChild(data);
    }
    //console.log(row);
    goingList.appendChild(row);
}
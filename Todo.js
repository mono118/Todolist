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
    let detaileButton = document.createElement("button");
    detaileButton.innerText = "＋";
    detaileButton.addEventListener("click", () => {
        console.log("詳細情報");
    });
    const editButton = document.createElement("button");
    editButton.innerText = "編集";
    editButton.addEventListener("click", () => {
        console.log("編集画面");
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
    list.push(document.createTextNode(category));
    list.push(detaileButton);
    list.push(editButton);
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

//
const tab_elements = document.getElementsByName('tab-radio');
const tab_panel_all = document.querySelector('.panel-all');
const tab_panel_tomorrow = document.querySelector('.panel-tomorrow');
const tab_panel_homework = document.querySelector('.panel-homework');
const tab_panel_haveto = document.querySelector('.panel-haveto');
tab_elements.forEach( tab_element => {
    tab_element.addEventListener('click', function(){
        if (tab_element.id == 'tab-all'){
            tab_panel_all.style.display = 'block';
            tab_panel_tomorrow.style.display = 'none';
            tab_panel_homework.style.display = 'none';
            tab_panel_haveto.style.display = 'none';
        }else if (tab_element.id == 'tab-tomorrow'){
            tab_panel_all.style.display = 'none';
            tab_panel_tomorrow.style.display = 'block';
            tab_panel_homework.style.display = 'none';
            tab_panel_haveto.style.display = 'none';
        }else if (tab_element.id == 'tab-homework'){
            tab_panel_all.style.display = 'none';
            tab_panel_tomorrow.style.display = 'none';
            tab_panel_homework.style.display = 'block';
            tab_panel_haveto.style.display = 'none';
        }else if (tab_element.id == 'tab-haveto'){
            tab_panel_all.style.display = 'none';
            tab_panel_tomorrow.style.display = 'none';
            tab_panel_homework.style.display = 'none';
            tab_panel_haveto.style.display = 'block';
        }
        // 選択されたかどうかを示すクラス名「selected」の付与と削除
        tab_elements.forEach( tab_element => {
            tab_element.nextElementSibling.classList.remove('selected');
        });
        tab_element.nextElementSibling.classList.add('selected');
    });
});
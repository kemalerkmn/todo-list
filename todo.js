const input = document.querySelector("#textItem");
const addbtn = document.querySelector("#add");
const list = document.querySelector("#list");
const card = document.querySelectorAll(".card")[1]
const cardOne = document.querySelectorAll(".card")[0]
const filter = document.querySelector("#filter");


addbtn.addEventListener("click",addValueButton)

function addValueButton(e){
    value = input.value;
    if(value === "")
        showAlert("danger","Lütfen bir todo giriniz");
    else{
        addValue(value)
        addStoreValue(value)
        showAlert("success", "Todo başarılı şekilde yüklendi")
        input.value="";
    }
    
}

function showAlert(type,message){

    let todos = getStoreData();
    
    info = document.createElement("div");
    info.classList = `alert alert-${type}`;
    info.role = "alert";
    info.ari

    info.textContent = message;
    cardOne.appendChild(info)
    setTimeout(function () {
        info.remove();
    }, 2000)
}

function addValue(value){
    li = document.createElement("li");
    li.classList = " d-flex justify-content-between list-group-item";
    i = document.createElement("i");
    i.className = "fa-solid fa-circle-xmark";
    li.textContent = value;
    li.appendChild(i);
    list.appendChild(li);
}
function addStoreValue(value){
    let todos = getStoreData();
    todos.push(value);
    localStorage.setItem("todos",JSON.stringify(todos))

}
addStoreValueUı();
function addStoreValueUı(){
    let todos = getStoreData();
    Array.from(todos).forEach(element=>{
        addValue(element)
        console.log(element)
    }) 
}
function getStoreData(){
    let todos;
    if(localStorage.getItem("todos")===null)
        todos = [];
    else
        todos = JSON.parse(localStorage.getItem("todos"))

    return todos;
}

card.addEventListener("click",select)

function select(e){
    if (e.target.className === "fa-solid fa-circle-xmark"){
       singleDelete(e);
    }
    if(e.target.id ==="deletebtn"){
       localStorage.clear();
       location.reload(false)
    }
    
}

function singleDelete(e){
    todos = getStoreData();
    todos.forEach((element,index)=>{
        if(element == e.path[1].textContent)
           todos.splice(index,1)
        localStorage.setItem("todos",JSON.stringify(todos))
        location.reload(false)

    })

}
filter.addEventListener("keyup",searchTodo)

function searchTodo(e){
    filterValue = e.target.value.toLowerCase();
    listItem = document.querySelectorAll(".list-group-item");
    listItem.forEach(e=>{
        text = e.textContent.toLowerCase();
        if(text.indexOf(filterValue)===-1){
            e.setAttribute("style","display:none !important")
        }
        else
            e.setAttribute("style","display:block")
    })
}
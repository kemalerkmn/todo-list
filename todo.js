const input = document.querySelector("#textItem");
const addbtn = document.querySelector("#add");
const list = document.querySelector("#list");
const card = document.querySelectorAll(".card")[1]
const cardOne = document.querySelectorAll(".card")[0]


// todos.forEach(element => {
//     let li = document.createElement("li");
//     li.classList = "list-group-item";
//     li.textContent = element;
//     list.append(li);
// });
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
    // <div class="alert alert-danger" role="alert">
    //     A simple danger alert—check it out!
    // </div>
    let todos = getStoreData();
    
    info = document.createElement("div");
    info.classList = `alert alert-${type}`
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
    console.log(e)
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
var items = ['item 1', 'item 2', 'item 3', 'item 4',]
var list = document.querySelector("#list")
items.forEach(function(item){
    var li = document.createElement("li");
    var t = document.createTextNode(item);
    li.className = 'list-group-item'
    li.appendChild(t);
    list.appendChild(li);
    var span = document.createElement("span");
    var text = document.createTextNode("x");
    span.className = "close";
    span.appendChild(text);
    li.appendChild(span)
    span.onclick = function(){
        var li = this.parentElement;
        li.style.display = "none"
    }
})

list.addEventListener("click",function(item){
    if(item.target.tagName = "li"){
        item.target.classList.toggle("checked");
    }
})
var add = document.querySelector("#add");
var input = document.querySelector("#txtItem");

add.addEventListener("click",function(){
    var li = document.createElement("li");
    li.textContent = input.value;
    items.push(input.value)
    console.log(items)
    li.className = "list-group-item"
    list.prepend(li); 
    input.value = "";
    var span = document.createElement("span");
    var text = document.createTextNode("x");
    span.appendChild(text);
    span.classList = "close"
    li.appendChild(span)
    span.onclick = function(){
        var li = this.parentElement;
        li.style.display = "none";
    }
})

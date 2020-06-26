var divTodos = document.querySelector(".todos")
var varUl = document.querySelector(".todos ul")
var inputField = document.querySelector(".todos input")
var todos =   JSON.parse(localStorage.getItem("list_todos")) || [] 




inputField.addEventListener("keyup", function(event){
    if(event.keyCode == 13){
        event.preventDefault()
        addTodo()
    }
})

refreshTodos()


function refreshTodos() {
    varUl.innerHTML = ""
    divTodos.appendChild(varUl)

    for (todo of todos) {
        var todoText = document.createTextNode(todo)
        var varLi = document.createElement("li")
        var deleteLink = document.createElement("a")
        var textLink = document.createTextNode("Remover")
        var pos = todos.indexOf(todo)
        
        deleteLink.setAttribute("href", "#")
        deleteLink.setAttribute("onclick", "removeTodo("+pos+")")
        deleteLink.appendChild(textLink)

        
        varUl.appendChild(varLi)
        varUl.appendChild(deleteLink)
        varLi.appendChild(todoText)
    }

    saveStorage()

}


function removeTodo(pos) {
    todos.splice(pos, 1)

    refreshTodos()
}

function addTodo() {
    var inputTodo = document.querySelector(".todos input")
    todos.push(inputTodo.value)
    inputTodo.value = ""
    refreshTodos()

}

function saveStorage(){
    localStorage.setItem("list_todos", JSON.stringify(todos))
}

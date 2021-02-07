import { TodoItem } from './models/TodoItem.js';
import { TodoItemProvider } from './providers/TodoItemProvider.js'


let provider = new TodoItemProvider();
renderTodo();

let todoAdd: HTMLElement | null = document.getElementById("btn-todo-add");

if (todoAdd != null) {
    todoAdd.addEventListener("click", event => {

        let input: HTMLInputElement = (<HTMLInputElement> document.getElementById("inp-todo-add"));

        provider.addTodo(input.value);
        renderTodo();

        input.value = "";
    })
}

function renderTodo() {
    let todoItems = provider.getTodos();

    let todoList: HTMLElement | null = document.getElementById("todo-list");

    if (todoList != null) {
        todoList.innerHTML = "";
    }

    todoItems.forEach(item => {
        if (todoList != null) {
            todoList.innerHTML += `
            <div class="todo-list--item">
                <div>
                    <input data-key="${item.id}" class="todo-list-checkbox" type="checkbox" ${item.isDone ? 'checked' : ''} />
                    <span ${item.isDone ? 'class="isDone"' : ''}>${item.text}</span>
                </div>
                <button data-key="${item.id}" class="todo-list--item-delete"><span class="material-icons">delete</span></button>
            </div>
            `;
        }
    });
    
    let deleteTodoButtons: Element[] =  Array.from(document.getElementsByClassName("todo-list--item-delete"));
    deleteTodoButtons.forEach(button => {

        button.addEventListener("click", event => {
            let id = Number(button.getAttribute('data-key'));
            provider.deleteTodo(id);
            
            renderTodo();
        })
    })

    let checkBoxes: Element[] = Array.from(document.getElementsByClassName("todo-list-checkbox"));
    checkBoxes.forEach(cb => {
        cb.addEventListener("click", event => {
            let id = Number(cb.getAttribute('data-key'));
            provider.toggleDone(id);
            
            renderTodo();
        })
    })
}

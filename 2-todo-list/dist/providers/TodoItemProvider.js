export class TodoItemProvider {
    constructor() {
        this.todoItems = [
            {
                id: 1,
                text: "Visit this todo app",
                isDone: true
            },
            {
                id: 2,
                text: "Add a todo",
                isDone: false
            },
            {
                id: 3,
                text: "Delete a todo",
                isDone: false
            }
        ];
    }
    getTodos() {
        return this.todoItems;
    }
    addTodo(description) {
        this.todoItems.push({
            id: (this.todoItems[this.todoItems.length - 1]?.id ?? 0) + 1,
            text: description,
            isDone: false,
        });
    }
    deleteTodo(id) {
        this.todoItems = this.todoItems.filter(item => item.id != id);
    }
    toggleDone(id) {
        let index = this.todoItems.findIndex(todo => todo.id == id);
        this.todoItems[index].isDone = !this.todoItems[index].isDone;
    }
}

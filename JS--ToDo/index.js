'use strict'

const task1 = new Task('Milk');
const task2 = new Task('Orange');
const toDo = new ToDo();
toDo.addTask(task1);
toDo.addTask(task2);
toDo.addTask(new Task('Lemon'))
console.dir(toDo.tasks)
// toDo.deleteTaskById(2);
// toDo.clear();

const mountPoint = document.getElementById('root');
const toDoView = new ToDoView(toDo, mountPoint);
toDoView.render()

'use strict'

class ToDo {
  constructor() {
    this._tasks = [];
  }
  get tasks() {
    return this._tasks;
  }
  addTask(task) {
    this._tasks.push(task);
  }
  deleteTaskById(id) {
    const task = this._tasks.find((task) => task.id === id);
    const taskIndex = this._tasks.indexOf(task);
    this._tasks.splice(taskIndex, 1);

    //this._tasks = this._tasks.filter((task) => task.id !== id);
  }

  deleteTaskByName(name) {
    const task = this._tasks.find((task) => task.name === name);
    const taskIndex = this._tasks.indexOf(task);
    this._tasks.splice(taskIndex, 1);

  }

  clear() {
    this._tasks = [];
  }

}
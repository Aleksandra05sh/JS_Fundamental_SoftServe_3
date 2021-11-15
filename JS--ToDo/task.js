'use strict'
class Task {
  constructor(name) {
      this._id = Task.id++;
      this._name = name;
  }
  get id() {
    return this._id;
  }
  get name() {
    return this._name;
  }
}
Task.id = 1
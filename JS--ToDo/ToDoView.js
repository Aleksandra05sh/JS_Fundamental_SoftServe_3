'use strict'

class ToDoView {
  constructor(model, mountpoint) {
    this._model = model;
    this._mountpoint = mountpoint;
    this._oListTasks = null;
  }
  _addTask(liText) {
    const liTask = document.createElement('li');
     liTask.innerText = liText;
     const buttonDelete = document.createElement('button');
     buttonDelete.type ='button';
     buttonDelete.innerText = '-';
     buttonDelete.className = 'button-delete-clear';
     buttonDelete.addEventListener('click', () => {
        //-
        //Model
        this._model.deleteTaskByName(liText);
        //View 
        this._oListTasks.removeChild(liTask)



     })
     liTask.appendChild(buttonDelete);
     this._oListTasks.appendChild (liTask);
     this._oListTasks.appendChild (liTask);
  }

  render() {
    //создание элемента
    const inputEnterTask = document.createElement('input');
    //настройка элемента
    inputEnterTask.type ='text';
    inputEnterTask.placeholder ="введите задачу";
    //HTML
    //<input type = "text" placeholder = "введите задачу"/>
    // монтирование на экране
    this._mountpoint.appendChild( inputEnterTask );


    const buttonAddTask = document.createElement('button');
    buttonAddTask.type = 'button';
    buttonAddTask.innerText = '+';
    //buttonAddTask.style.color = "green";
    buttonAddTask.className = 'button-add';
    buttonAddTask.addEventListener('click', () => {
     //+
     const inputValue = inputEnterTask.value;
     //Model 
     const newTask = new Task(inputValue);
     this._model.addTask(newTask);
     //View
     this._addTask(inputValue);  

    });
    this._mountpoint.appendChild( buttonAddTask );

    this._oListTasks = document.createElement('ol');
    this._mountpoint.appendChild( this._oListTasks );

    const buttonClear = document.createElement('button');
    buttonClear.type = 'button';
    buttonClear.innerText = 'C';
    //buttonClear.style.color = "red";
    buttonClear.className = 'button-delete-clear'; // css
    buttonClear.addEventListener('click', () => {
      //lобавление обработчика событий
      //Model
      this._model.clear();
      //View  
      this._oListTasks.innerText = '';
     });

    this._mountpoint.appendChild( buttonClear );

    // визуализация задач
    const tasks = this._model.tasks;
    tasks.forEach((task) => {
      this._addTask(task.name)
    })


  }
}

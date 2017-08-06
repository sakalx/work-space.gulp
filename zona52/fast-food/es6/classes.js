//создаем клас
class Task {
  //обзательно конструктор
  constructor(title) {
    this._title = title;
    this.done = false;
    Task.count +=1;
    console.log('Создание задачи')
  }
  get title() {
    return this._title
  }
  set title(value) {
    this._title = value;
  }
  static getDefaultTitle() {
    return ('Default Name')
  }
  //создадим метод
  complete() {
    this.done = true;
    console.log(`this task ${this.title} done`)
  }
}
//статическое свойство
Task.count = 0;
// Создадим ещо едои клас который булет наследовать Task
class SubTask extends Task {
  constructor(title, parent) {
      super(title); //обязательно 1!!!!!
    this.parent = parent
    console.log('creat subTask constructor')
  }
  //расширяем родительськый метод
  complete() {
    super.complete();//обязательно 1!!!!!
    console.log(`sub Task ${this.title} done`)
  }
}

let task = new Task('lern js'),
    subTask = new SubTask('lern es6', task);

console.log(task, subTask);
task.complete();
subTask.complete();


console.log(SubTask.getDefaultTitle());
console.log(SubTask.count);

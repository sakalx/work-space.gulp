'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//создаем клас
var Task = function () {
  //обзательно конструктор
  function Task(title) {
    _classCallCheck(this, Task);

    this._title = title;
    this.done = false;
    Task.count += 1;
    console.log('Создание задачи');
  }

  _createClass(Task, [{
    key: 'complete',

    //создадим метод
    value: function complete() {
      this.done = true;
      console.log('this task ' + this.title + ' done');
    }
  }, {
    key: 'title',
    get: function get() {
      return this._title;
    },
    set: function set(value) {
      this._title = value;
    }
  }], [{
    key: 'getDefaultTitle',
    value: function getDefaultTitle() {
      return 'Default Name';
    }
  }]);

  return Task;
}();
//статическое свойство


Task.count = 0;
// Создадим ещо едои клас который булет наследовать Task

var SubTask = function (_Task) {
  _inherits(SubTask, _Task);

  function SubTask(title, parent) {
    _classCallCheck(this, SubTask);

    //обязательно 1!!!!!
    var _this = _possibleConstructorReturn(this, (SubTask.__proto__ || Object.getPrototypeOf(SubTask)).call(this, title));

    _this.parent = parent;
    console.log('creat subTask constructor');
    return _this;
  }
  //расширяем родительськый метод


  _createClass(SubTask, [{
    key: 'complete',
    value: function complete() {
      _get(SubTask.prototype.__proto__ || Object.getPrototypeOf(SubTask.prototype), 'complete', this).call(this); //обязательно 1!!!!!
      console.log('sub Task ' + this.title + ' done');
    }
  }]);

  return SubTask;
}(Task);

var task = new Task('lern js'),
    subTask = new SubTask('lern es6', task);

console.log(task, subTask);
task.complete();
subTask.complete();

console.log(SubTask.getDefaultTitle());
console.log(SubTask.count);
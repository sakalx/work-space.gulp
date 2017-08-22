const init = (document => {
  const task = {
    list: document.getElementById('todo-list'),
    listItem: document.querySelectorAll('.todo-item'),
    newItem: document.getElementById('add-input'),
    newItem_Btn: document.getElementById('add-button')
  };

  const CreatElement = (tag, props, ...childrens) => {
    const element = document.createElement(tag);
    Object.keys(props).map(x => element[x] = props[x]);

    if (childrens.length > 0) {
      childrens.map(child => {
        if (typeof child === 'string')
          child = document.createTextNode(child);
        element.appendChild(child);
      })
    }
    return element;
  };

  const CreatItem = title => {
    const checkbox = CreatElement('input', {type: 'checkbox', className: 'checkbox'});
    const label = CreatElement('label', {className: 'title'}, title);
    const editInput = CreatElement('input', {type: 'text', className: 'textfield'});
    const editButton = CreatElement('button', {className: 'edit'}, 'Edit');
    const deletetButton = CreatElement('button', {className: 'delete'}, 'Delete');

    const item = CreatElement('li', {className: 'todo-item'}, checkbox, label, editInput, editButton, deletetButton );

    BindEvents(item);
    return item
  };

  const BindEvents = newItem => {
    const checkbox = newItem.querySelector('.checkbox'),
        editButton = newItem.querySelector('button.edit'),
        delButton  = newItem.querySelector('button.delete');

    checkbox.addEventListener('change', Checkbox);
    editButton.addEventListener('click', EditItem);
    delButton.addEventListener('click', DelButton);
  };

  const Checkbox = ({target}) => {
    const item = target.parentNode;
    item.classList.toggle('completed');
  };

  const EditItem = ({target}) => {
    const
        item = target.parentNode,
        title  = item.querySelector('.title'),
        editItem = item.querySelector('.textfield'),
        isEditing = item.classList.contains('editing');

    if (isEditing) {
      title.textContent = editItem.value;
      target.textContent = 'Edit';
    } else {
      editItem.value = title.textContent;
      target.textContent = 'Save';
    }

    item.classList.toggle('editing');
  };

  const DelButton = ({target}) => {
    const item = target.parentNode;
    task.list.removeChild(item);
  };


  const Task__newTask_Add = e => {
    e.preventDefault();

    if (task.newItem.value === '') {return alert('Task is empty')};

    const newItem = CreatItem(task.newItem.value);
    task.list.appendChild(newItem);
    task.newItem.value = '';
  };

  const init = () => {
    task.newItem_Btn.addEventListener('click', Task__newTask_Add);

    for (let obj of task.listItem) {
      BindEvents(obj);
    }
  };
  return init;
})(document);
init();

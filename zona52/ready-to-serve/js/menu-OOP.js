"use strict";

function Container() {
  this.id = "";
  this.className = "";
  this.htmlCode = "";
}
Container.prototype.render = function () {
  return this.htmlCode;
};
// Удаляем контейнер
//  Container.prototype.remove = function() {
//        return this = null
//  }
function Menu(myId, myClass, myItems) {
  Container.call(this);
  this.id = myId;
  this.className = myClass;
  this.items = myItems;
}
Menu.prototype = Object.create(Container.prototype);
Menu.prototype.constructor = Menu;
Menu.prototype.render = function () {
  var result = '<ul class="' + this.className + '" id="' + this.id + '">';
  for (var item in this.items) {
    if (this.items[item] instanceof MenuItem) {
      result += this.items[item].render();
    }
  }
  result += '</ul>';
  return result;
};

// делаю так чтобы item принимал еще одно меню
function MenuItem(myHref, myName, mySubMenu) {
  Container.call(this);
  this.className = 'menu-item';
  this.href = myHref;
  this.name = myName;
  this.subMenu = mySubMenu;
}
MenuItem.prototype = Object.create(Container.prototype);
MenuItem.prototype.constructor = MenuItem;
MenuItem.prototype.render = function () {
  var result = '<li class="' + this.className + '"><a href="' + this.href + '">' + this.name + '"</a>"';
  if (this.subMenu instanceof SubMenu) {
    result += this.subMenu.render();
  }
  return result += '</li>';
};

function SubMenu(myId, myClass, myItems) {
  Menu.call(this);
  this.id = myId;
  this.className = myClass;
  this.items = myItems;
}

SubMenu.prototype = Object.create(Menu.prototype);
SubMenu.prototype.constructor = SubMenu;

function SubMenuItem(myHref, myName) {
  MenuItem.call(this);
  this.className = 'menu-item';
  this.href = myHref;
  this.name = myName;
}

SubMenuItem.prototype = Object.create(MenuItem.prototype);
SubMenuItem.prototype.constructor = SubMenuItem;

var subMenuItem1 = new SubMenuItem('/', 'Главная');
var subMenuItem2 = new SubMenuItem('/blog', 'Блог');
var subMenu = new SubMenu('anotherId', 'anotherClass', { 0: subMenuItem1, 1: subMenuItem2 });
var menuItem1 = new MenuItem('/', 'Главная', subMenu);
var menuItem2 = new MenuItem('/blog', 'Блог', subMenu);
var menu = new Menu('myId', 'myClass', { 0: menuItem1, 1: menuItem2 });
var div = document.write(menu.render());
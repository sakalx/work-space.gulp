
//Top-nav START js
var bookmarkNum = 1;  
showBookmark(bookmarkNum);
function activeBookmark(n) {
  showBookmark(bookmarkNum = n);
}
function showBookmark(n) {
  var i;
  var x = document.getElementsByClassName('top__scr');
  if (n > x.length) {bookmarkNum = 1;}
  if (n < 1) {bookmarkNum = x.length;}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = 'none';
  }
  x[bookmarkNum-1].style.display = 'flex';

    var pos = document.getElementsByClassName('top__nav-pos');
  if (n > pos.length) {bookmarkNum = 1;}
  if (n < 1) {bookmarkNum = pos.length;}
  for (i = 0; i < pos.length; i++) {
     pos[i].style.background = '#000';
  }
  pos[bookmarkNum-1].style.background = '#57c5a0';

    var name = document.getElementsByClassName('top__nav-name');
  if (n > name.length) {bookmarkNum = 1;}
  if (n < 1) {bookmarkNum = name.length;}
  for (i = 0; i < name.length; i++) {
     name[i].style.color = '#adadad';
  }
  name[bookmarkNum-1].style.color = '#fff';

    var sname = document.getElementsByClassName('top__nav-desc');
  if (n > sname.length) {bookmarkNum = 1;}
  if (n < 1) {bookmarkNum = sname.length;}
  for (i = 0; i < sname.length; i++) {
     sname[i].style.color = '#4b4b4b';
  }
  sname[bookmarkNum-1].style.color = '#7e7e7e';
}
//Top-nav END js
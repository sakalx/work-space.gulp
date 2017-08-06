'use strict';

var brousers = ['Safari', 'Opera', 'Chrome', 'Firefox'];

// выводим наш масив
for (var index in brousers) {
  console.log(brousers[index]);
}
//выводим наш масив с es6 использця for of
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = brousers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var brouser = _step.value;

    console.log(brouser);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}
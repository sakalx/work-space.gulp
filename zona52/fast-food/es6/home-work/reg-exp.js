//html data
let userName 	= document.getElementById('feedback__name'),
    userPhone	= document.getElementById('feedback__phone'),
    userEmail	= document.getElementById('feedback__email');


//check Name
function validName() {
  const valid = /^[a-zA-Zа-яА-ЯёЁ\s]+$/g;
  Validator(userName, valid)
}


//check Phone
function validPhone() {
  const valid = /^\+7\(\d{3}\)\d{3}\-\d{4}$/;
  Validator(userPhone, valid)
}


//check Email
function validEmail() {
  const valid = /^[a-z\.\-]*@[a-z]*\.[a-z]{2}$/;
  Validator(userEmail, valid)
}


//verification validation
function Validator(feedback__type, valid) {
  valid.test(feedback__type.value)?
      trueValid(feedback__type):
      falseValid(feedback__type);
}


//decor for true verification
function trueValid(feedback__type) {
  feedback__type.className = 'correct'
}


//decor for false verification
function falseValid(feedback__type) {
  feedback__type.className = 'uncorrect';
  alert('\uD83D\uDE08Try again\u26D4')
}


//Listeners
userName.addEventListener('change', validName);
userPhone.addEventListener('change', validPhone);
userEmail.addEventListener('change', validEmail);



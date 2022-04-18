const showError = (formElement, inputElement, errorMessage) => {
  const popupError = formElement.querySelector(`.${inputElement.id}-error`); 
  inputElement.classList.add(formObj.inputErrorClass);
  popupError.textContent = errorMessage;
  popupError.classList.add(formObj.errorClass);
}

const removeError = (formElement, inputElement) => {
  const popupError = formElement.querySelector(`.${inputElement.id}-error`); 
  inputElement.classList.remove(formObj.inputErrorClass);
  popupError.classList.remove(formObj.errorClass);
  popupError.textContent =" ";
}

const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showError(formElement, inputElement, inputElement.validationMessage);
  } else {
    removeError(formElement, inputElement);
  }
}

const hasInvalidInput = (input) => {
  return input.some((input)=>{
      return !input.validity.valid;
  });
};

const turnOffButton = (buttonElement) => {
  buttonElement.classList.add(formObj.inactiveButtonClass);
  buttonElement.disabled = true;
};

const turnOnButton = (buttonElement) => {
  buttonElement.classList.remove(formObj.inactiveButtonClass);
  buttonElement.disabled = false;
};
  
const toggleButtonState = (input, buttonElement) => {
  if (hasInvalidInput(input)){
    turnOffButton(buttonElement);
  } else {
    turnOnButton(buttonElement);
  }
};

const setInputListeners = (formElement) =>{
  const input = Array.from(formElement.querySelectorAll(formObj.inputSelector));
  const buttonElement = formElement.querySelector(formObj.submitButtonSelector);
  toggleButtonState(input, buttonElement);
  input.forEach((inputElement)=>{
    inputElement.addEventListener('input', function(){
      toggleButtonState(input, buttonElement);
      isValid(formElement, inputElement);
    });
  });
};

const enableValidation = () => {
  const popupFormList = Array.from(document.querySelectorAll(formObj.formSelector));
  popupFormList.forEach((formElement)=>{
    formElement.addEventListener('submit', function(evt){
      evt.preventDefault();
    });
  setInputListeners(formElement);
  });
}

enableValidation();
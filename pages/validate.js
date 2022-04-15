
const enableValidation = ({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__form-submit',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
  }); 

const showError = (formElement, inputElement, errorMessage) => {
    const popupError = formElement.querySelector(`.${inputElement.id}-error`); 
    inputElement.classList.add(enableValidation.inputErrorClass);
    popupError.textContent = errorMessage;
    popupError.classList.add(enableValidation.errorClass);
}

const removeError = (formElement, inputElement) => {
    const popupError = formElement.querySelector(`.${inputElement.id}-error`); 
    inputElement.classList.remove(enableValidation.inputErrorClass);
    popupError.classList.remove(enableValidation.errorClass);
    popupError.textContent =" ";
}

const isValid = (formElement, inputElement) => {
  if(!inputElement.validity.valid) {
      showError(formElement, inputElement, inputElement.validationMessage);
  } else {
      removeError(formElement, inputElement);
  }
}


const setInputListeners = (formElement) =>{
    const input = Array.from(formElement.querySelectorAll(enableValidation.inputSelector));
    input.forEach((inputElement)=>{
        inputElement.addEventListener('input', function(){
            isValid(formElement, inputElement);
        });
    });
}


const enableValidations = () => {
    const popupFormList = Array.from(document.querySelectorAll(enableValidation.formSelector));
    popupFormList.forEach((formElement)=>{
        formElement.addEventListener('submit', function(evt){
            evt.preventDefault();
        });
        setInputListeners(formElement);
    });
}

enableValidations();


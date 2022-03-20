let popupElement = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit');
let closeButton = document.querySelector('.popup__close-button');
let profileHeader = document.querySelector('.profile__header');
let profileHeaderText = profileHeader.textContent;
let profileText = document.querySelector('.profile__text');
let profileTextAbout = profileText.textContent;
let formElement = document.querySelector('.popup__form');
let inputName = formElement.querySelector('.popup__form-name');
let inputAbout = formElement.querySelector('.popup__form-about');
let SubmitButton = formElement.querySelector('.popup__form-submit');


function openForm (){
    popupElement.classList.add('popup_opened');
    inputName = document.querySelector('.popup__form-name');
    inputAbout = document.querySelector('.popup__form-about');
    inputName.value = profileHeader.textContent;
    inputAbout.value = profileText.textContent;
}
editButton.addEventListener('click', openForm, );


function closeForm (){
    popupElement.classList.remove('popup_opened');
}
closeButton.addEventListener('click', closeForm);


function formSubmitHandler(evt) {
   evt.preventDefault();
   inputName.value;
   inputAbout.value;
   profileHeader.textContent = inputName.value;
   profileText.textContent = inputAbout.value;
}

formElement.addEventListener('submit', formSubmitHandler); 


let popupElement = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit');
let closeButton = document.querySelector('.popup__close-button');
let profileHeader = document.querySelector('.profile__header');

let profileText = document.querySelector('.profile__text');

let formElement = document.querySelector('.popup__form');
let inputName = formElement.querySelector('.popup__input_type_name');
let inputAbout = formElement.querySelector('.popup__input_type_about');



function openForm (){
    popupElement.classList.add('popup_opened');
    inputName.value = profileHeader.textContent;
    inputAbout.value = profileText.textContent;
}
editButton.addEventListener('click', openForm);


function closeForm (){
    popupElement.classList.remove('popup_opened');
}

closeButton.addEventListener('click', closeForm);



function formSubmitHandler(evt) {
   evt.preventDefault();
   profileHeader.textContent = inputName.value;
   profileText.textContent = inputAbout.value;
   closeForm();
}
formElement.addEventListener('submit', formSubmitHandler); 


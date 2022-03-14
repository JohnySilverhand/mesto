let popupElement = document.querySelector('.popup');
let sectionProfile = document.querySelector('.profile');
let editButton = sectionProfile.querySelector('.profile__edit');
let closeButton = popupElement.querySelector('.popup__close-button');



editButton.addEventListener('click', function(){
    popupElement.classList.add('popup_opened');
})

closeButton.addEventListener('click', function(){
    popupElement.classList.remove('popup_opened');
})

let profileHeader = sectionProfile.querySelector('.profile__header');
let profileHeaderText = profileHeader.textContent;
let profileText = sectionProfile.querySelector('.profile__text');
let profileTextAbout = profileText.textContent;
let inputName = popupElement.querySelector('.popup__form-name');
let inputAbout = popupElement.querySelector('.popup__form-about');
let formElement = popupElement.querySelector('.popup__form');
let SubmitButton = popupElement.querySelector('.popup__form-submit');

inputName.setAttribute('value', profileHeader.textContent);
inputAbout.setAttribute('value', profileText.textContent);

function formSubmitHandler(evt) {
    evt.preventDefault();

   inputName.getAttribute('value');
   inputAbout.getAttribute('value');
   profileHeader = sectionProfile.querySelector('.profile__header');
   profileText = sectionProfile.querySelector('.profile__text');
   profileHeader.textContent = inputName.value;
   profileText.textContent = inputAbout.value;
}

formElement.addEventListener('submit', formSubmitHandler); 

SubmitButton.addEventListener('click', function(){
    popupElement.classList.remove('popup_opened');
})
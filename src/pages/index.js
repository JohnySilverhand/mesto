import './index.css';


import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { Section } from '../components/Section.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { buttonProfileEdit, buttonAddProfile, editForm, avatarForm, inputName, inputAbout, buttonElementsSubmit, popupAddFormName, 
  popupAddFormImageLink, elementsContainer, userInfo, addForm, initialCards, formObj } from '../utils/contstants.js';
import { Api } from '../components/Api';
import { PopupDeleteImage } from '../components/PopupDeleteImage.js';

const api = new Api({
url: 'https://mesto.nomoreparties.co/v1/cohort-42',
headers: {
   authorization:'b50f3450-54d5-4593-a544-5015c37d1c2e',
  'Content-Type':'application/json',
}
});
let userId;
const newProfilePopup = new UserInfo (userInfo);

const infoFromServer = [api.getCards(), api.getProfileInfo()];

Promise.all(infoFromServer)
  .then(([data, dataUser]) => {
  newProfilePopup.setUserInfo(dataUser);
  userId = dataUser._id;
  createCard.renderItems(data);
}).catch((err) => {
  console.log(err);
})

const openImagePopup = new PopupWithImage ('.popup_open-image');
openImagePopup.setEventListeners();



const changeDataProfilePopup = () => {
  const profileValue = newProfilePopup.getUserInfo();
  inputName.value = profileValue.name;
  inputAbout.value = profileValue.about;
  profileValidation.resetValidation();
  popupFormEdit.open();
}

const popupFormEdit =  new PopupWithForm ({
  submitFormCallback: (userInfo) => {
    api.addUserInfo(userInfo)
      .then((data) => {
        newProfilePopup.setUserInfo(data);
        popupFormEdit.close();
      })
    popupFormEdit.close();
  }
}, '.popup_edit');
popupFormEdit.setEventListeners();




const createNewCard = function createNewCard(cardData) {
  const card = new Card ({cardData, 
  handleCardClick: (name, link) => {
    openImagePopup.open(name, link);
  },
  deleteAddedCard: (data, id) => {
    popupDelete.open(data, id);
  },
  likeNewCard: (element, id) => {
    api.likeCard(element, id)
    .then((cardData) => {
      element.querySelector('.element__like').classList.add('element__like_active');
      element.querySelector('.element__counter').textContent = cardData.likes.length; 
    })
    .catch((err) => {
      console.log(err);
    })
  },
  dislikeCard: (element, id) => {
    api.dislikeCard(element, id)
    .then((cardData) => {
      element.querySelector('.element__like').classList.remove('element__like_active');
      element.querySelector('.element__counter').textContent = cardData.likes.length; 
    })
    .catch((err) => {
      console.log(err);
    })
  }}, userId, '#new-card');
  const cardsElement = card.createCard();
  return cardsElement;
};

const popupDelete = new PopupDeleteImage (
  {
    submitFormCallback: (data, element, id) => {
      api.deleteCard(data, id)
        .then((data) => {
          element.remove();
          popupDelete.close();
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }, '.popup_delete');
popupDelete.setEventListeners();

const popupFormAdd = new PopupWithForm ({
  submitFormCallback: (card) => {
    api.addCards(card)
      .then((card) => {
        const cardFromPopup = createNewCard(card);
        createCard.addItem(cardFromPopup);
        popupFormAdd.close();
      })
      .catch((err) => {
        console.log(err);
      })
  }
}, '.popup_add');
popupFormAdd.setEventListeners();

const addNewAvatar = new PopupWithForm ({
  submitFormCallback: (data) => {
    api.addUserAvatar(data)
    .then((data) => {
      document.querySelector(userInfo.avatarSelector).src = data.avatar;
      addNewAvatar.close();
    })
    .catch((err) => {
      console.log(err);
    })
  }
}, '.popup_avatar');
addNewAvatar.setEventListeners();

const profileValidation = new FormValidator(formObj, editForm);
profileValidation.enableValidation();
const addCardValidation = new FormValidator(formObj, addForm);
addCardValidation.enableValidation();
const addNewAvatarValidation = new FormValidator(formObj, avatarForm);
addNewAvatarValidation.enableValidation();

const createCard = new Section ({
  renderer: (data) => {
    createCard.addItem(createNewCard(data));
  }
}, '.elements');


buttonAddProfile.addEventListener('click', () => {
  addCardValidation.resetValidation();
  popupFormAdd.open();
});

buttonProfileEdit.addEventListener('click', () => {
  changeDataProfilePopup();
});

document.querySelector('.profile__image-button').addEventListener('click', () => {
  addNewAvatarValidation.resetValidation();
  addNewAvatar.open();
})
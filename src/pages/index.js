import './index.css';

import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { Section } from '../components/Section.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { buttonProfileEdit, buttonAddProfile, editForm, avatarForm, inputName, inputAbout,  
   userInfo, addForm, formObj } from '../utils/contstants.js';
import { Api } from '../components/Api';
import { PopupDeleteImage } from '../components/PopupDeleteImage.js';

let userId;

const api = new Api({
url: 'https://mesto.nomoreparties.co/v1/cohort-42',
headers: {
   authorization:'b50f3450-54d5-4593-a544-5015c37d1c2e',
  'Content-Type':'application/json',
}
});

const infoFromServer = [api.getCards(), api.getProfileInfo()];
Promise.all(infoFromServer)
  .then(([data, dataUser]) => {
  newProfilePopup.setUserInfo(dataUser);
  userId = dataUser._id;
  classSection.renderItems(data);
}).catch((err) => {
  console.log(err);
})

const newProfilePopup = new UserInfo (userInfo);

const imagePopup = new PopupWithImage ('.popup_open-image');
imagePopup.setEventListeners();

const popupFormEdit =  new PopupWithForm ({
  submitFormCallback: (userInfo) => {
    popupFormEdit.isLoading(true);
    api.addUserInfo(userInfo)
      .then((data) => {
        newProfilePopup.setUserInfo(data);
        popupFormEdit.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupFormEdit.isLoading(false);
      })
    popupFormEdit.close();
  }
}, '.popup_edit');
popupFormEdit.setEventListeners();

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
  }, '.popup-delete');
popupDelete.setEventListeners();

const popupFormAdd = new PopupWithForm ({
  submitFormCallback: (card) => {
    popupFormAdd.isLoading(true);
    api.addCards(card)
      .then((card) => {
        const cardFromPopup = createNewCard(card);
        classSection.addItem(cardFromPopup);
        popupFormAdd.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupFormAdd.isLoading(false);
      })
  }
}, '.popup_add');
popupFormAdd.setEventListeners();

const popupNewAvatar = new PopupWithForm ({
  submitFormCallback: (data) => {
    popupNewAvatar.isLoading(true);
    api.addUserAvatar(data)
    .then((dataUser) => {
      popupNewAvatar.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupNewAvatar.isLoading(false);
    })
  }
}, '.popup-avatar');
popupNewAvatar.setEventListeners();

const changeDataProfilePopup = () => {
  const profileValue = newProfilePopup.getUserInfo();
  inputName.value = profileValue.name;
  inputAbout.value = profileValue.about;
  profileValidation.resetValidation();
  popupFormEdit.open();
}

const createNewCard = function createNewCard(cardData) {
  const card = new Card ({cardData, 
  handleCardClick: (name, link) => {
    imagePopup.open(name, link);
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

const classSection = new Section ({
  renderer: (data) => {
    classSection.addItem(createNewCard(data));
  }
}, '.elements');

const profileValidation = new FormValidator(formObj, editForm);
profileValidation.enableValidation();
const popupCardValidation = new FormValidator(formObj, addForm);
popupCardValidation.enableValidation();
const addNewAvatarValidation = new FormValidator(formObj, avatarForm);
addNewAvatarValidation.enableValidation();

buttonAddProfile.addEventListener('click', () => {
  popupCardValidation.resetValidation();
  popupFormAdd.open();
});

buttonProfileEdit.addEventListener('click', () => {
  changeDataProfilePopup();
});

document.querySelector('.profile__image-button').addEventListener('click', () => {
  addNewAvatarValidation.resetValidation();
  popupNewAvatar.open();
})
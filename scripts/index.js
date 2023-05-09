/*Октрытие и закрытие popup*/
let buttonPopupOpen = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let buttonPopupClose = document.querySelector('.popup__close');

/*buttonPopupOpen.addEventListener('click', () => {
    popup.classList.add('popup__opened');
});

buttonPopupClose.addEventListener('click', () => {
    popup.classList.remove('popup__opened');
});*/



/*Форма*/
let popupForm = document.querySelector('.popup__form');
let inputName = document.getElementById('name');
let inputProfession = document.getElementById('profession');
let profileName = document.querySelector('.profile__name');
let profileProfession = document.querySelector('.profile__profession');

let togglePopupState = (popupToToggle) => popupToToggle.classList.toggle('popup__opened');

function openPopup () {
    togglePopupState(popup);
    inputName.value = profileName.textContent;
    inputProfession.value = profileProfession.textContent;
};

function FormSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileProfession.textContent = inputProfession.value;
    togglePopupState(popup);
}

buttonPopupClose.addEventListener('click', () => togglePopupState(popup));
popupForm.addEventListener('submit', FormSubmit);
buttonPopupOpen.addEventListener('click', (openPopup));

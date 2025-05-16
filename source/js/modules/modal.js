const closeModalButton = document.querySelector('.modal__close-button');
const modalWindow = document.querySelector('.modal');
const openModalButton = document.querySelector('.target__button');

const isEscapeKey = (evt) => evt.key === 'Escape';

const modalOpenWindowHandler = () => {
  modalWindow.classList.remove('visually-hidden');
};

const modalCloseWindowHandler = () => {
  modalWindow.classList.add('visually-hidden');
};

openModalButton.addEventListener('click', () => {
  modalOpenWindowHandler();
});

closeModalButton.addEventListener('click', () => {
  modalCloseWindowHandler();
});

document.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    modalCloseWindowHandler();
  }
});

document.addEventListener('click', (evt) => {
  const target = evt.target;
  const itsModal = target === modalWindow || modalWindow.contains(target);
  const itsmodalOpenButton = target === openModalButton;

  if (!itsModal && !itsmodalOpenButton) {
    modalCloseWindowHandler();
  }
});

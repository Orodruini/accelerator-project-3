const accordItem = document.querySelectorAll('.faq__item');
const isEnterKey = (evt) => evt.key === 'Enter';

const accordionHandler = () => {

  for (let i = 0; i < accordItem.length; i++) {
    accordItem[i].addEventListener('click', () => {
      accordItem[i].classList.toggle('faq__item--active');

      if (accordItem[i].classList.contains('faq__item--disabled')) {
        accordItem[i].classList.remove('faq__item--active');
      }
    });

    accordItem[i].addEventListener('keydown', (evt) => {
      if (isEnterKey(evt)) {
        accordItem[i].classList.toggle('faq__item--active');
      }
    });
  }
};


accordionHandler();

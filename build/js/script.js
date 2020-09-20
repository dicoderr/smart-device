'use strict';

var modal = document.querySelector('.header__modal');
var modalForm;
var veil = document.querySelector('.header__modal .modal__veil');
var callButton = document.querySelector('.navigation__recall');
var modalOpened = false;

function createModalForm() {
  var form = document.getElementById('form').cloneNode(true);
  form.id = 'form1';
  form.classList.add('mobile');
  form.querySelector('.form__title').textContent = 'Закажите звонок';
  form.querySelector('.form__subtitle').textContent = 'Оставьте контакты, мы проконсультируем вас бесплатно в удобное время';
  form.querySelector('button').textContent = 'Отправить';
  var closeButton = document.createElement('button');
  closeButton.classList.add('form__close');
  closeButton.addEventListener('click', toggleModal);
  form.append(closeButton);
  return form;
}

function toggleModal() {
  if (!modalForm) {
    modalForm = createModalForm();
    modal.querySelector('.modal__content').append(modalForm);
  }
  document.body.style.overflow = modalOpened ? 'visible' : 'hidden';
  modal.classList.toggle('modal--visible');
  modalOpened = !modalOpened;
  return false;
}

callButton.addEventListener('click', toggleModal);
veil.addEventListener('click', toggleModal);

var accordion = document.getElementsByClassName('accordion')[0];
var accordionPanels = Array.from(accordion.getElementsByClassName('accordion__panel'));

function toggle(current) {
  if (current.classList.contains('active')) {
    current.classList.remove('active');
  } else {
    accordionPanels.forEach(function (panel) {
      if (panel === current) {
        panel.classList.add('active');
      } else {
        panel.classList.remove('active');
      }
    });
  }
}

accordionPanels.forEach(function (panel) {
  var button = panel.getElementsByClassName('accordion__button')[0];
  button.addEventListener('click', function () {
    toggle(panel);
  });
});

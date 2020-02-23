'use strict'

function initMenu(element) {
  const itemList = element.querySelector('.menu__list');
  const textField = element.querySelector('.menu__new-item');
  const addButton = element.querySelector('.menu__button');

  const addItem = () => {
    itemList.insertAdjacentHTML('beforeend', `<li class="menu__item">${textField.value}</li>`);
    textField.value = '';
  };

  addButton.addEventListener('click', addItem);

  itemList.addEventListener('click', (event) => {
    const item = event.target.closest('.menu__item');

    if (!item || !itemList.contains(item)) {
      return;
    }

    item.classList.toggle('menu__item-isActive');
  });
}

initMenu(
  document.querySelector('.menu')
);
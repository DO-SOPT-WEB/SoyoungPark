const CATEGORY_LIST = [
  {
    id: 1,
    type: 'spend',
    name: '식비',
  },
  {
    id: 2,
    type: 'spend',
    name: '쇼핑',
  },
  {
    id: 3,
    type: 'income',
    name: '용돈',
  },
  {
    id: 4,
    type: 'income',
    name: '월급',
  },
];

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.length == 0) {
    displayCategory(CATEGORY_LIST);
    localStorage.setItem('categoryList', JSON.stringify(CATEGORY_LIST));
  } else {
    displayCategory(JSON.parse(localStorage.getItem('categoryList')));
  }
});

function displayCategory(item) {
  item.map((item) => createCategory(item));
}

function createCategory(item) {
  const income_container = document.querySelector('.income_category_list');
  const spend_container = document.querySelector('.spend_category_list');

  const li = document.createElement('li');
  li.className = 'category';
  li.textContent = item.name;

  if (item.type == 'spend') {
    spend_container.appendChild(li);
  } else if (item.type == 'income') {
    income_container.appendChild(li);
  }
}

function addCategory(e) {
  const income_container = document.querySelector('.income_category_list');
  const spend_container = document.querySelector('.spend_category_list');
  const category_list = JSON.parse(localStorage.getItem('categoryList'));

  if (window.event.keyCode == 13 && e.value != '') {
    if (e.id == 'income_category_input') {
      const new_category = {
        id: category_list.length + 1,
        type: 'income',
        name: e.value,
      };
      category_list.push(new_category);
    } else {
      const new_category = {
        id: category_list.length + 1,
        type: 'spend',
        name: e.value,
      };
      category_list.push(new_category);
      console.log(new_category);
    }
    localStorage.setItem('categoryList', JSON.stringify(category_list));

    income_container.innerHTML = '';
    spend_container.innerHTML = '';
    displayCategory(JSON.parse(localStorage.getItem('categoryList')));
    e.value = '';
    return false; //이벤트 기본 동작 방지
  }
}

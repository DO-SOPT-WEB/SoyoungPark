const INIT_BALANCE = 0;
const HISTORY_LIST = [
  {
    id: 1,
    history: '식비',
    place: '맥도날드 숭실대점',
    money: 'spend',
    amount: '6900',
  },
  {
    id: 2,
    history: '월급',
    place: '평촌 김장현 수학',
    money: 'income',
    amount: '500000',
  },
  {
    id: 3,
    history: '구독',
    place: '쿠팡',
    money: 'spend',
    amount: '4990',
  },
  {
    id: 4,
    history: '쇼핑',
    place: '지그재그',
    money: 'spend',
    amount: '27000',
  },
];

document.addEventListener('DOMContentLoaded', () => {
  displayList(HISTORY_LIST);
  displayMyAsset(HISTORY_LIST);
});

function displayList(item) {
  item.map((item) => createList(item));
}

function createList(item) {
  const ul = document.getElementById('contents_list');
  const li = document.createElement('li');
  li.className = 'contents';
  li.id = item.id;
  const content1 = document.createElement('div');
  const content2 = document.createElement('div');
  const history = document.createElement('p');
  history.className = 'history';
  const place = document.createElement('p');
  place.className = 'place';
  const amount = document.createElement('p');
  const closeBtn = document.createElement('i');
  closeBtn.className = 'closeBtn';

  closeBtn.addEventListener('click', (event) => checkAndDeleteList(event));

  history.textContent = item.history;
  place.textContent = item.place;
  closeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';

  if (item.money == 'spend') {
    amount.className = 'spending';
    amount.textContent = `-${comma(item.amount)}`;
  } else {
    amount.className = 'income';
    amount.textContent = `+${comma(item.amount)}`;
  }

  ul.appendChild(li);
  li.appendChild(content1);
  li.appendChild(content2);
  content1.appendChild(history);
  content1.appendChild(place);
  content2.appendChild(amount);
  content2.appendChild(closeBtn);
}

function displayMyAsset(item) {
  const asset_box = document.getElementById('my_money');
  const income_box = document.getElementById('in');
  const spend_box = document.getElementById('out');
  let out_ = 0;
  let in_ = 0;

  item.map((item) => {
    if (item.money == 'spend') {
      out_ += Number(uncomma(item.amount));
    } else if (item.money == 'income') {
      in_ += Number(uncomma(item.amount));
    }
  });

  income_box.textContent = `+${comma(in_)}`;
  spend_box.textContent = `-${comma(out_)}`;
  const sum_ = INIT_BALANCE + in_ - out_;
  asset_box.textContent = comma(sum_);
}

function displayButtonChecked() {
  const ul = document.getElementById('contents_list');
  ul.innerHTML = '';
  const checked = document.querySelectorAll('input[type=checkbox]:checked');
  if (checked.length === 2) {
    displayList(HISTORY_LIST);
  } else if (checked.length == 1) {
    if (checked[0].id == 'income') {
      displayList(HISTORY_LIST.filter((item) => item.money == 'income'));
    } else {
      displayList(HISTORY_LIST.filter((item) => item.money == 'spend'));
    }
  }
}

function checkAndDeleteList(e) {
  const delete_modal = document.querySelector('.delete_modal_background');
  const ul = document.getElementById('contents_list');
  const list = e.target.parentNode.parentNode.parentNode;
  const yes = document.querySelector('#yes');
  const no = document.querySelector('#no');

  delete_modal.style.display = 'flex';

  no.addEventListener('click', () => {
    setTimeout(() => {
      delete_modal.style.display = 'none';
    }, 100);
  });

  yes.addEventListener('click', () => {
    ul.removeChild(list);

    setTimeout(() => {
      delete_modal.style.display = 'none';
    }, 100);

    HISTORY_LIST.map((item) => {
      if (item.id == list.id) {
        HISTORY_LIST.splice(HISTORY_LIST.indexOf(item), 1);
        ul.innerHTML = '';
        displayButtonChecked();
      }
    });
  });
}

function openModal() {
  const modal = document.querySelector('.modal_background');
  const modal_up = document.querySelector('.modal_container');
  modal.style.display = 'block';
  modal_up.style.animation = 'fadeIn 1s';
}

function closeModal() {
  const modal = document.querySelector('.modal_background');
  modal.style.display = 'none';
}

function modalFilter(e) {
  const income_category = document.getElementById('income_category_wrapper');
  const spend_category = document.getElementById('spend_category_wrapper');
  if (e.id == 'modal_in') {
    spend_category.style.display = 'none';
    income_category.style.display = 'flex';
  } else {
    income_category.style.display = 'none';
    spend_category.style.display = 'flex';
  }
}

function addList() {
  const ul = document.getElementById('contents_list');
  const category = document.querySelector('input[type=radio]:checked').value;
  const income_category = document.getElementById('income_category').value;
  const spend_category = document.getElementById('spend_category').value;
  const place_contents = document.getElementById('place_contents').value;
  const amount_contents = uncomma(document.getElementById('amount_contents').value);
  let type;

  if (place_contents && amount_contents && Number(amount_contents)) {
    if (category == '수입') {
      type = 'income';
    } else {
      type = 'spend';
    }
    const newObj = {
      id: HISTORY_LIST.length + 1,
      history: income_category,
      place: place_contents,
      money: type,
      amount: amount_contents,
    };
    HISTORY_LIST.push({ ...newObj });
    ul.innerHTML = '';
    displayList(HISTORY_LIST);
    displayMyAsset(HISTORY_LIST);
    alert('저장되었습니다 !');
  } else if (place_contents && amount_contents) {
    alert('금액에는 숫자만 입력할 수 있습니다.');
  } else {
    alert('모든 항목에 내용을 입력해주세요.');
  }
}

function comma(str) {
  return str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
function uncomma(str) {
  return str.replaceAll(',', '');
}
function inputNumberFormat(e) {
  e.value = comma(uncomma(e.value));
}

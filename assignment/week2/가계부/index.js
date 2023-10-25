const INIT_BALANCE = 0;
const HISTORY_LIST = [
  {
    id: 1,
    history: "식비",
    place: "맥도날드 숭실대점",
    money: "spend",
    amount: "6900"
  },
  {
    id: 2,
    history: "월급",
    place: "평촌 김장현 수학",
    money: "income",
    amount: "500000"
  },
  {
    id: 3,
    history: "구독",
    place: "쿠팡",
    money: "spend",
    amount: "4990"
  },
  {
    id: 4,
    history: "쇼핑",
    place: "지그재그",
    money: "spend",
    amount: "27000"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  displayList(HISTORY_LIST);
});

function displayList(item) {
  item.map((item) => createList(item));
}

function createList(item) {
  const ul = document.getElementById("contents_list");
  const li = document.createElement("li");
  li.className = "contents";
  li.id = item.id;
  const content1 = document.createElement("div");
  const content2 = document.createElement("div");
  const history = document.createElement("p");
  history.className = "history";
  const place = document.createElement("p");
  place.className = "place";
  const amount = document.createElement("p");
  const closeBtn = document.createElement("i");
  closeBtn.className = "closeBtn";

  history.textContent = item.history;
  place.textContent = item.place;
  amount.textContent = item.amount;
  closeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';

  if (item.money == "spend") {
    amount.className = "spending";
    amount.textContent = `-${item.amount}`;
  }
  else {
    amount.className = "income";
    amount.textContent = `+${item.amount}`;
  }

  ul.appendChild(li);
  li.appendChild(content1);
  li.appendChild(content2);
  content1.appendChild(history);
  content1.appendChild(place);
  content2.appendChild(amount);
  content2.appendChild(closeBtn);
}
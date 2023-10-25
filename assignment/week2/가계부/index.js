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
  displayMyAsset(HISTORY_LIST);
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

  closeBtn.addEventListener("click", (event) => deleteList(event));

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

function displayMyAsset(item) {
  const asset_box = document.getElementById("my_money");
  const income_box = document.getElementById("in");
  const spend_box = document.getElementById("out");
  let out_ = 0;
  let in_ = 0;

  item.map(item => {
    
    if (item.money == "spend") {
      out_ += Number(item.amount);
    }
    else if (item.money == "income") {
      in_ += Number(item.amount);
    }
  });

  income_box.textContent = `+${in_}`;
  spend_box.textContent = `-${out_}`;
  const sum_ = INIT_BALANCE + in_ - out_;
  asset_box.textContent = sum_;
}

function displayButtonChecked() {
  const ul = document.getElementById("contents_list");
  ul.innerHTML = "";
  const checked = document.querySelectorAll("input[type=checkbox]:checked");
  console.log(checked.length);
  if (checked.length === 2) {
    displayList(HISTORY_LIST);
  }
  else if (checked.length == 1) {
    console.log(checked[0].id);
    if (checked[0].id == "income") {
      displayList(HISTORY_LIST.filter((item) => item.money == "income"));
    }
    else {
      displayList(HISTORY_LIST.filter((item) => item.money == "spend"));
    }
  }
}

function deleteList(e) {
  const ul = document.getElementById("contents_list");
  const list = e.target.parentNode.parentNode.parentNode;
  ul.removeChild(list);

  HISTORY_LIST.map((item)=> {
    if(item.id == list.id){
      HISTORY_LIST.splice((HISTORY_LIST.indexOf(item)),1);
      displayMyAsset(HISTORY_LIST);
    }
  });
}

function openModal(){
  const modal = document.querySelector(".modal_background");
  modal.style.display = "block";
}

function closeModal(){
  const modal = document.querySelector(".modal_background");
  modal.style.display = "none";
}

function modalFilter(e){
  const income_category = document.getElementById("income_category_wrapper");
  const spend_category = document.getElementById("spend_category_wrapper");
  if(e.id == "modal_in"){
    spend_category.style.display = "none";
    income_category.style.display = "flex";
  }
  else{
    income_category.style.display = "none";
    spend_category.style.display = "flex";
  }
}

function addList(){
  const ul = document.getElementById("contents_list");
  const category = document.querySelector("input[type=radio]:checked").value;
  if(category == "수입"){
    const newObj ={
      id : HISTORY_LIST.length + 1,
      history : document.getElementById("income_category").value,
      place : document.getElementById("place_contents").value,
      money: "income",
      amount : document.getElementById("amount_contents").value
    }
    HISTORY_LIST.push({...newObj});
  }
  else{
    const newObj ={
      id : HISTORY_LIST.length + 1,
      history : document.getElementById("spend_category").value,
      place : document.getElementById("place_contents").value,
      money: "spend",
      amount : document.getElementById("amount_contents").value
    }
    HISTORY_LIST.push({...newObj});
  }
  ul.innerHTML="";
  displayList(HISTORY_LIST);
  displayMyAsset(HISTORY_LIST);
}
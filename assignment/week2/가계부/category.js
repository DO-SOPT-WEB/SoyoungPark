const CATEGORY_LIST = [
  {
    id: 1,
    type: "spend",
    name: "식비"
  },
  {
    id: 2,
    type: "spend",
    name: "쇼핑"
  },
  {
    id: 3,
    type: "income",
    name: "용돈"
  },
  {
    id: 4,
    type: "income",
    name: "월급"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  if(localStorage.length==0){
    displayCategory(CATEGORY_LIST);
    localStorage.setItem("categoryList",JSON.stringify(CATEGORY_LIST));
  }
  else{
    displayCategory(JSON.parse(localStorage.getItem("categoryList")));
  }
 
});

function once(){

}
function displayCategory(item) {
  item.map((item) => createCategory(item));
}

function createCategory(item) {
  const income_container = document.querySelector(".income_category_list");
  const spend_container = document.querySelector(".spend_category_list");

  const li = document.createElement("li");
  li.className = "category";
  li.textContent = item.name;

  if (item.type == "spend") {
    spend_container.appendChild(li);
  }
  else {
    income_container.appendChild(li);
  }
}

function addCategory(e) {
  const income_container = document.querySelector(".income_category_list");
  const spend_container = document.querySelector(".spend_category_list");
  const category_list = JSON.parse(localStorage.getItem("categoryList"));
  let category_type;
  if (window.event.keyCode == 13) {
    if (e.id == "income_category_input") {
      category_type = "income";
    }
    else {
      category_type = "spend";
    }
    const new_category = {
      id: CATEGORY_LIST.length + 1,
      type: category_type,
      name: e.value
    }
    console.log(new_category);
    category_list.push(new_category);

    localStorage.setItem("categoryList",JSON.stringify(category_list));

    income_container.innerHTML = "";
    spend_container.innerHTML = "";
    displayCategory(JSON.parse(localStorage.getItem("categoryList")));
  }
}
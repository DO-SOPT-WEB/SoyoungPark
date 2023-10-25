const CATEGORY_LIST = [
  {
    type: "spend",
    name: "식비"
  },
  {
    type: "spend",
    name: "쇼핑"
  },
  {
    type: "income",
    name: "용돈"
  },
  {
    type: "income",
    name: "월급"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  displayCategory(CATEGORY_LIST);
});

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
//коментарии
"use strict";

//ДОМАШКА
/*
1. Изучить теорию
2. Решить задачу:
*/
/*
Пишем форму поиска, которая открывается по клику на иконку
а закрывается по клику на любое место страницы, кроме самой формы.
Также, закрыть форму можно по клавише эскейп (Esc) на клавиатуре.
Для поля ввода поискового запроса добавляем счетчик символов.
*/

const searchIcon = document.querySelector(".search__icon");
const searchForm = document.querySelector(".search__form");

document.addEventListener("click", clickEvent);
document.addEventListener("keyup", clickEsk);

function clickEvent(event) {
  if (event.target.closest(".search__icon")) {
    searchForm.classList.toggle("active");
  } else if (!event.target.closest(".search__form"))
    searchForm.classList.remove("active");
  console.log("remove");
}

function clickEsk(event) {
  if (event.key === "Escape") {
    searchForm.classList.remove("active");
  }
}

const searchInput = document.querySelector(".search__input");
const searchInputLimit = searchInput.getAttribute("maxlength");
const span = document.querySelector(".search__counter span");
const searchButton = document.querySelector(".search__button");

const searchGoogle = "https://www.google.com/search?q=";

searchInput.addEventListener("input", function () {
  const searchValue = searchInput.value;

  span.innerHTML = searchInputLimit - searchValue.length;
  searchButton.setAttribute("href", searchGoogle + searchValue);
});

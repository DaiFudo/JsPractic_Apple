"use strict";
document.body.style.backgroundImage = "url(../img/apple_true.jpg)"; // Меняем фон

let ad = document.getElementsByClassName('adv')[0];                 // Удалить рекламу со страницы
ad.remove();                                      


let text = document.getElementsByClassName('title')[0];       // Заменить текст
text.textContent='Мы продаём только оригинальную технику Apple!';


// Поменяли местами два элемента
let menu = document.getElementsByClassName("menu")[0],
  menuItem = document.getElementsByClassName("menu-item"),
  menuItemLi = document.createElement("li");
    menu.insertBefore(menuItem[2],menuItem[1]);
// Добавляем новый li, с классом и текстом
menuItemLi.classList.add('menu-item');
menuItemLi.textContent="Пятый элемент";
menu.appendChild(menuItemLi);

let promptforApple = document.querySelector("#prompt"),
qwe = prompt("Как вы относитесь к технике Apple?");
promptforApple.textContent=qwe;




// Отношение к технике Apple

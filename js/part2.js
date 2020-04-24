"use strict";
let menu = document.getElementsByClassName("menu")[0],
    menuItem = document.getElementsByClassName("menu-item"),
    body = document.getElementById('body'),
    adv = document.getElementsByClassName('adv')[0],
    title = document.getElementById('title'),
    promptForApple = document.querySelector("#prompt"),
    menuItemLi = document.createElement('li');
    

document.body.style.backgroundImage='url(../img/apple_true.jpg)';
title.textContent="Мы продаём только оригинальтую технику Apple.";
adv.remove();
menu.insertBefore(menuItem[2], menuItem[1]);
menuItemLi.classList.add("menu-item");
menuItemLi.textContent = "Пятый элемент";
menu.appendChild(menuItemLi);

let youTurn = prompt('Ваше отношение к технике Apple?');
promptForApple.textContent=youTurn;

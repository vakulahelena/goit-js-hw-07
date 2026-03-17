// З використанням властивостей і методів DOM-елементів, напиши скрипт, який:
// Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).

const ul = document.querySelector('#categories');

const li = ul.querySelectorAll('li.item');
console.log("Number of categories: ", li.length);

li.forEach(el => { 
    const title = el.querySelector("h2").textContent;
    console.log(`Category: ${title}`);
    const items = el.querySelectorAll('ul>li').length;
    console.log(`Elements: ${items}`);
});


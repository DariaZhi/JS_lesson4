// 1. Написать функцию, которая принимает на вход 3 параметра: название тега, название цвета, содержимое. Функция должна сформировать необходимый тег, добавить необходимый стиль с цветом и внести содержимое. Попробовать попользоваться такой функцией в коде программы (не отправлять созданную разметку на страницу)


function createElement(name = 'div', content = '', color = 'false') {
    const tagElement = document.createElement(name);
    tagElement.innerHTML = content;
    if (color) {
        tagElement.style.color = color;
    }
    return tagElement;
}

document.body.append(createElement('p', 'blablabla', 'blue'));

// 2. Создать с помощью js абзац (тег p). Добавить в него контент. Добавить к нему стили: размер 36px, жирный шрифт. Добавить абзац с текстом на страницу.

const pElement = document.createElement('p');
pElement.append('Существуют также другие методы поиска элементов по тегу, классу и так далее. На данный момент, они скорее исторические, так как querySelector более чем эффективен.');
pElement.style.fontSize = '36px';
pElement.style.fontWeight = 'bold';
document.body.append(pElement);


// 3. Вставить в страницу (в html документ) тег <select>. С помощью js добавить в этот select опции (option) под годы от 1960 по 2020.

const selectElement = document.querySelector('#birthYear');

for (let i = 1960; i <= 2020; i++) {
    const optionElement = document.createElement('option');
    optionElement.textContent = i;
    selectElement.append(optionElement);
}


// 4. Вставить в страницу (в html документ) ul.
// Предусмотреть в коде следующий массив
// [{
//     name: "Женя",
//     order: true
// },
// {
//     name: "Кристина",
//     order: true
// },
// {
//     name: "Павел",
//     order: false
// },
// {
//     name: "Виолетта",
//     order: false
// },
// {
//     name: "Костя",
//     order: true
// }];

// Перебирать массив, для каждой ячейки массива создать li, наполнить li текстом:
// - Клиент Женя оплатил заказ
// - Клиент Павел отменил заказ
// ... остальные li с контентом

// Маска получается такой: "Клиент ИМЯ СТАТУС заказ", где имя - свойство объекта (а объект тут это i- ячейка массива), статус зависит от от свойства order, если true, то оплатил, если false, то отменил

const ulElement = document.createElement('ul');
document.body.append(ulElement);

const array = [
    { name: "Женя", order: true },
    { name: "Кристина", order: true },
    { name: "Павел", order: false },
    { name: "Виолетта", order: false },
    { name: "Костя", order: true }
];


for (let prop of array) {
    const liElement = document.createElement('li');
    if (prop.order) {
        liElement.textContent = `Клиент ${prop.name} оплатил заказ`;
    }
    else {
        liElement.textContent = `Клиент ${prop.name} отменил заказ`;
    }
    ulElement.append(liElement);
}





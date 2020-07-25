// var _ = require('lodash');

// var array = [1,2,3,4,5,6,7,8];
// console.log('answer', _.without(array, 3))

const boxes = document.querySelectorAll('.box');
console.log(boxes);
boxes.forEach(box => {
    box.classList.toggle('grow');
    console.log(box);
});

//navigation
const section = document.querySelectorAll('section');
console.log(section);
section.forEach(element => {
    let navTitle = element.id;
    let idTitle = [];
    idTitle.push(navTitle)
    console.log(idTitle);
});

const nav = document.querySelector('ul');
const navLi = document.createElement('li');
const a = document.createElement('a');
a.setAttribute('href', "#");
navLi.append(a);
nav.insertAdjacentElement('afterbegin', navLi);
console.log(nav);


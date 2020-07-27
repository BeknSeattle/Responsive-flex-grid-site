// var _ = require('lodash');
// var array = [1,2,3,4,5,6,7,8];
// console.log('answer', _.without(array, 3))

const boxes = document.querySelectorAll('.box');
boxes.forEach(box => {
    box.classList.toggle('grow');
});

//navigation
const sections = document.querySelectorAll('section');
const nav = document.querySelector('ul');
//populating the navigation through creation of <section>
for (const section of sections){
    const navTitle = String(section.id);
    const a = document.createElement('a');
    const navLi = document.createElement('li');
    a.setAttribute('href', "#" + navTitle);
    a.append(navTitle);
    navLi.append(a);
    nav.append(navLi)
}
//selecting the last child to push on the right side of the navigation bar
const linknavBaby = nav.lastElementChild;
if(linknavBaby){
    linknavBaby.classList.add('push');
}

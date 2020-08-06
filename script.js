// var _ = require('lodash');
// var array = [1,2,3,4,5,6,7,8];
// console.log('answer', _.without(array, 3))


const timeIn = performance.now();
const boxes = document.querySelectorAll('.box');
boxes.forEach(box => {
    box.classList.toggle('grow');
});

//navigation
const sections = document.querySelectorAll('section');
const nav = document.querySelector('ul');
//populating the navigation through creation of <section>
for (const section of sections){
    const navTitle = section.id;
    const a = document.createElement('a');
    let navLi = document.createElement('li');
    a.setAttribute('href', "#" + navTitle);
    a.append(navTitle);
    navLi.append(a);
    nav.append(navLi)
}
//selecting the last child to push on the right side of the navigation bar when the browser size is larger than 900 px only
const linknavBaby = nav.lastElementChild;
window.addEventListener('resize', () => {
    if(window.innerWidth > 600){
        linknavBaby.classList.add('push');
        nav.classList.add('main-nav');
        nav.classList.remove('mobile');
    }else if(window.innerWidth < 600) {
        nav.classList.remove('main-nav');
        nav.classList.add('mobile');
        linknavBaby.classList.remove('push');
    }
});
const timeOut = performance.now();
console.log('this app took ' + (timeOut - timeIn) + ' milliseconds.');
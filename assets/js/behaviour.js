// HEADER SCROLLING
let header = document.querySelector('.header');

window.addEventListener('scroll', function() {
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('scrolling-active', windowPosition);
});

// SLIDER
let count = 2;
let labels = document.querySelectorAll('.manual-btn');

document.getElementById('radio1').checked = true;

function setSlider() {
    document.getElementById('radio' + count).checked = true;
    count++;
    if(count > 4)
        count = 1;
}

let intervalID = setInterval(setSlider, 4000);

for(let i = 0; i < labels.length; i++) {
    let label = labels[i];
    label.addEventListener('click', function() {
        clearInterval(intervalID);
        count = i + 1;
        document.getElementById('radio' + count).checked = true;
        count++;
        if(count > 4)
            count = 1;
        intervalID = setInterval(setSlider, 4000);
    });
}

// OPEN NAV
let menuNavBTN = document.querySelector('.menu-nav');
let headerNav = document.querySelector('.header-nav');
let headerNavClose = document.querySelector('.header-nav-close');

menuNavBTN.onclick = function() {
    headerNav.style.transform = "translateY(0)";
    headerNav.style.opacity = 1;
}

headerNavClose.onclick = function() {
    headerNav.style.transform = "translateY(-100%)";
    headerNav.style.opacity = 0;
}

// FOOTER
let contactWraps = document.querySelectorAll('.footer-contact__wrap');

for(let i = 0; i < contactWraps.length; i++) {
    let contactWrap = contactWraps[i];
    contactWrap.addEventListener('click', function() {
        let contactDesc = document.querySelector(`.footer-contact__wrap:nth-child(${i + 1}) .footer-contact__desc`);
        let contactIcon = document.querySelector(`.footer-contact__wrap:nth-child(${i + 1}) .footer-contact__title i`);

        let isOpenContactDesc = contactDesc.style.display === 'block';
        if(!isOpenContactDesc) {
            contactDesc.style.display = 'block';
            contactIcon.style.transform = 'rotate(180deg)'
        }
        else {
            contactDesc.style.display = 'none';
            contactIcon.style.transform = 'rotate(0)'
        }
    })
}
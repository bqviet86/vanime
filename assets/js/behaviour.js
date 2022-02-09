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
let boDy = document.querySelector('body');
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

// OPEN CATEGORY-WRAP
let navItems = document.querySelectorAll('.nav-item');

for(let i = 0; i < navItems.length; i++) {
    let navItem = navItems[i];
    navItem.onclick = function() {
        let categoryWrap = document.querySelector(`.nav-item:nth-child(${i + 1}) .category-wrap`);

        let isOpenCategoryWrap = categoryWrap.style.display === 'flex';

        if(!isOpenCategoryWrap) {
            categoryWrap.style.display = 'flex';
            categoryWrap.style.transform = 'scale(1)';
        }
        else {
            categoryWrap.style.display = 'none';
            categoryWrap.style.transform = 'scale(0)';
        }

        headerNavClose.onclick = function() {
            headerNav.style.transform = "translateY(-100%)";
            headerNav.style.opacity = 0;
            categoryWrap.style.display = 'none';
        }
    }
}

// FOOTER
let contactTitles = document.querySelectorAll('.footer-contact__title');

for(let i = 0; i < contactTitles.length; i++) {
    let contactTitle = contactTitles[i];
    contactTitle.addEventListener('click', function() {
        if(boDy.offsetWidth <= 735) {
            let contactDesc = document.querySelector(`.footer-contact__wrap:nth-child(${i + 1}) .footer-contact__desc`);
            let contactIcon = document.querySelector(`.footer-contact__wrap:nth-child(${i + 1}) .footer-contact__title i`);
    
            let isOpenContactDesc = contactDesc.style.display === 'block';
            if(!isOpenContactDesc) {
                contactDesc.style.display = 'block';
                contactIcon.style.transform = 'rotate(90deg)'
            }
            else {
                contactDesc.style.display = 'none';
                contactIcon.style.transform = 'rotate(0)'
            }
        }
    })
}
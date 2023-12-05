
// Hamburger menu button.

const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open_menu");
const closeMenuBtn = document.querySelector(".close_menu");

function toggleMenu() {
    menu.classList.toggle("menu_opened");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);

const menuLinks = document.querySelectorAll('.menu a[href^="#"]');

// Intersection Observer of the Target of View Port.

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const id = entry.target.getAttribute("id");
        const menuLink = document.querySelector(`.menu a[href="#${id}"]`)

        if(entry.isIntersecting){
            document.querySelector(".menu a.selected").classList.remove("selected");
            menuLink.classList.add("selected");
        } 
    });
}, {rootMargin: "-30% 0px -70% 0px"});


menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", function(){
        menu.classList.remove("menu_opened");
    })
    const hash = menuLink.getAttribute("href");
    const target = document.querySelector(hash);
    if(target){
        observer.observe(target);
    }
})

// HOME section animated text

// Capture of the DOM element with the ID that we defined in the HTML.
const text = document.getElementById("animate-text");
let str = text.innerHTML;
text.innerHTML = "";

// We declare a variable in which we will assign a value to be the time in ms that the setTimeout function will last.
const speed = 350;
let i = 0;

// This function cycles through all the characters in our text
const typeWriter = () => {
  if (i < str.length) {
    text.innerHTML += str.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
};

// Here we execute the function
setTimeout(typeWriter, speed);

// Redirection to social networks.

function linkedinLink(){
    window.open('https://www.linkedin.com/in/dylanmoraa/?locale=en_US', '_blank');
}

function linkedEmail(){
    window.open('mailto:dylan.mora.acuna@gmail.com');
}

function projectCodeUsersLoguin(){
    window.open('https://github.com/dmoraac/LoginUsers-NodeJS-MySql.git', '_blank');
}

function projectCodeWebInventory(){
    window.open('https://github.com/dmoraac/Web-Inventory--NodeJS---MySQL-.git', '_blank');
}

function projectCodeBasicCalculator(){
    window.open('https://github.com/dmoraac/Calculadora-B-sica.git', '_blank');
}

function projectCodeDigitalClock(){
    window.open('https://github.com/dmoraac/Reloj-Digital.git', '_blank');
}

function projectCodePortfolioWeb(){
    window.open('https://github.com/dmoraac/Portfolio-web-Dylan-Mora.git', '_blank');
}

function translateToSpanish(){
    location.href = 'index_ES.html';
}

function translateToEnglish(){
    location.href = 'index.html';
}

function downloadCVEnglish(){
    window.open('/src/documents/CV_Dylan_Mora_En.pdf', '_blank');
}

function downloadCVSpanish(){
    window.open('/src/documents/CV_Dylan_Mora_Es.pdf', '_blank');
}

// Automatic Copyright Year Update

const yearSpan = document.querySelector('#currentYear');
const currentYear = new Date();
yearSpan.innerHTML = currentYear.getFullYear();
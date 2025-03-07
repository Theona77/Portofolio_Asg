/*=============== TYPING ===============*/ 
var typed = new Typed(".typing",{
    strings:["Web Designer", "Web Developer", "Graphic Designer", "Illustrator"],
    typeSpeed: 100,
    BackSpeed:50,
    loop:true
})



/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')

/*======= MENU SHOW ======*/
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*======= MENU HIDDEN ======*/
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('bg-header')
    : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SWIPER POPULAR ===============*/
const skillsSwiper = new Swiper('.skills__content', {
    // Optional parameters
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        768: {
            centeredSlides: false,
        }
    }
});

/*=============== CHOOSE FAQ ===============*/
const faqItems = document.querySelectorAll('.choose__faq-item')

//1. Select each item
faqItems.forEach((item) =>{
    const faqHeader = item.querySelector('.choose__faq-header')

    //2. Select each button click
    faqHeader.addEventListener('click', () =>{
        // 7. Select the current faq-open class
        const openItem = document.querySelector('.faq-open')

        //5. Call the toggleItem function
        toggleItem(item)

        //8. Remove the faq-open class from other items
        if(openItem && openItem != item){
            toggleItem(openItem)
        }
    })
})

//3. Chreate function to display the content
const toggleItem = (item) =>{
    //3.1. Select each faq content
    const faqContent = item.querySelector('.choose__faq-content')

    // 6. If the same item contains the faq-open class, remove
    if(item.classList.contains('faq-open')){
        faqContent.removeAttribute('style')
        item.classList.remove('faq-open')
    } else {
        //4. Add max-height to the content and add the faq-open class
        faqContent.style.height = faqContent.scrollHeight + 'px'
        item.classList.add('faq-open')
    }

    
}


/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = ()=>{
    const scrollUp = document.getElementByID('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                                            : scrollUp.classList.remove('show-scroll')
                                    
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollY = window.pageYOffset
    
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
                    sectionTop = current.offsetTop - 58,
                    sectionId = current.getAttribute('id')
                    sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        } else {
            sectionClass.classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () =>{
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,

})

sr.reveal('.about__container, .skills__container, .portofolio__container, .join__bg, .footer__container')
sr.reveal('.about__image', {origin: 'bottom'})
sr.reveal('.abo__container', {origin: 'bottom'})
sr.reveal('.choose__image, .services__image', {origin: 'left'})
sr.reveal('.choose__content, .services__content', {origin: 'right'})
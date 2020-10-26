/*============================== SCROLL REVEAL =============================*/ 
/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('#home img',{});
sr.reveal('#home h4',{delay: 100}); 
sr.reveal('#home p',{delay: 200}); 
sr.reveal('#home button',{delay: 300}); 


/*SCROLL ABOUT*/
sr.reveal('#about h3',{}); 
sr.reveal('#about p',{delay: 100}); 

/*SCROLL SKILLS*/
sr.reveal('.column h3',{}); 
sr.reveal('.info-list',{delay: 200}); 
sr.reveal('.skill-bars',{delay: 200});

/*SCROLL WORK*/
sr.reveal('#work h3',{}); 
sr.reveal('.w-container',{delay: 200}); 

/*SCROLL PROJECTS*/
sr.reveal('#projects h3',{}); 
sr.reveal('.box',{delay: 200}); 
sr.reveal('.box2',{delay: 200}); 



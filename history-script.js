gsap.from('.header', {duration: 1,delay:0.5 , y:'-100%', ease:'bounce'});


//-------------------------Burger Menu--------------------
const burger = document.querySelector('.burger i');
const nav = document.querySelector('.navbar');


function toggleNav() {
    burger.classList.toggle('uil-bars');
    burger.classList.toggle('uil-times');
    nav.classList.toggle('nav-active');
    
}

// Calling the function after click event occurs
burger.addEventListener('click', function() {
    toggleNav();
});




//------------------------------Progress Bar------------------------------
document.addEventListener(
  "scroll",
  function() {
    var scrollTop =
      document.documentElement["scrollTop"] || document.body["scrollTop"];
    var scrollBottom =
      (document.documentElement["scrollHeight"] ||
        document.body["scrollHeight"]) - document.documentElement.clientHeight;
    scrollPercent = scrollTop / scrollBottom * 100 + "%";
    document
      .getElementById("_progress")
      .style.setProperty("--scroll", scrollPercent);
  },
  { passive: true }
);





//------------------Popups---------------------------
const openPop1 = document.querySelector('.popup-trigger-1')
const openPop2 = document.querySelector('.popup-trigger-2')
const openPop3 = document.querySelector('.popup-trigger-3')
const openPop4 = document.querySelector('.popup-trigger-4')
const openPop5 = document.querySelector('.popup-trigger-5')
const openPop6 = document.querySelector('.popup-trigger-6')
const openPop7 = document.querySelector('.popup-trigger-7')
const openPop8 = document.querySelector('.popup-trigger-8')

var openPop = [openPop1, openPop2, openPop3, openPop4, openPop5, openPop6, openPop7, openPop8]

const popup = document.querySelector('#popup')
const closePop = document.querySelector('.closePop')
const overlay = document.querySelector('.bg-overlay')

for (let i=1; i<=8; i++){
  document.addEventListener('mouseup', function(e) {
    if (!popup.contains(e.target) && !openPop[i-1].contains(e.target)) {
        popup.style.display = 'none';
        overlay.style.display = 'none';
        document.body.style.overflowY = "auto";
        for (let i=1; i<=8; i++){
          popup.children[i].style.display = 'none';
        }
    }
  });

  openPop[i-1].addEventListener('click', function() {
    overlay.style.display = 'block';
    popup.style.display = 'block';
    document.body.style.overflowY = "hidden";
  })

  closePop.addEventListener('click', function() {
    overlay.style.display = 'none';
    popup.style.display = 'none';
    document.body.style.overflowY = "auto";
    for (let i=1; i<=8; i++){
      popup.children[i].style.display = 'none';
    }
  })


  openPop[i-1].addEventListener('click', function(){
    popup.children[i].style.display = 'block';
  })
}
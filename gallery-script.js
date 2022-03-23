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




//----------------------------------Image Gallery-----------------------------

let i = 0;

const images = [
    '/Images/Events/carousel/1.jpg',
    '/Images/Events/carousel/2.jpg',
    '/Images/Events/carousel/3.jpeg',
    '/Images/Events/carousel/4.jpg',
    '/Images/Events/carousel/5.jpg',
    '/Images/Events/carousel/6.jpg',
    '/Images/Events/carousel/7.jpg',
    '/Images/Events/carousel/8.jpg'
]

function thumbnails(x){
  document.slide.src = images[x];
}

function nextImage(){
    if(i<images.length-1){
        i++;
    }else{
        i=0;
    }
    document.slide.src = images[i];
}

function prevImage(){
    document.slide.src = images[i];
    if(i>0){
        i--;
    }else{
        i = images.length-1;
    }
    document.slide.src = images[i];
}
gsap.from('.header', {duration: 1,delay:0.5 , y:'-100%', ease:'bounce'});

gsap.from('#parks_p', {duration:1, x:'100vw',delay:0.1, ease:'power2.in'});
gsap.from('#stud_p', {duration:1, x:'100vw', ease:'power2.in'});
gsap.from('#pop_p', {duration:1, x:'-100vw',delay:0.1, ease:'power2.in'});
gsap.from('#uni_p', {duration:1, x:'-100vw', ease:'power2.in'});



//-------------------------------------Reveal content while scrolling-----------------------------------
function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}

window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();


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



//-------------------------------------Random quotes-----------------------------------
const ediquotes = [
	{ 
		"quote" : "I always feel that when I come to Edinburgh, in many ways I am coming home.", 
		"source" : "~Alan Rickman~" 
	},
	{
		"quote" : "This is a city of shifting light, of changing skies, of sudden vistas. A city so beautiful it breaks the heart again and again.", 
		"source" : "~Alexander McCall Smith~"
	},
	{
		"quote" : "I haven’t even been here an hour and already, Edinburgh is the city of my dreams.", 
		"source" : "~Jacqueline E. Smith~"
	},
	{
		"quote" : "Edinburgh isn’t so much a city, more a way of life… I doubt I’ll ever tire of exploring Edinburgh, on foot or in print.", 
		"source" : "~Ian Rankin~"
	},
	{
		"quote" : "What I loved about Edinburgh was being able to walk to work through a beautiful place.", 
		"source" : "~Roger Allam~"
	},
	{
		"quote" : "Edinburgh is my favourite city. We’ll be doing a lot of children’s theatre and galleries.", 
		"source" : "~Carol Ann Duffy~"
	},
	{
		"quote" : "There’s no leaving Edinburgh, No shifting it around: it stays with you, always.", 
		"source" : "~Alan Bold~"
	},
	{
		"quote" : "Edinburgh is a hotbed of genius.", 
		"source" : "~Tobias Smollett~"
	},
	{
		"quote" : "The Scots think of it as their capital; they’re too possessive, Edinburgh belongs to the world.", 
		"source" : "~Richard Demarco~"
	},
	{
		"quote" : "I want to hang out in Edinburgh with my friends and eat fish and chips wrapped in newspaper.", 
		"source" : "~Shirley Manson~"
	}
]

function randomQuote() {
  let random = ediquotes[Math.floor(Math.random() * ediquotes.length)];
  quote.innerText = `“${random.quote}.”`;
  author.innerText = random.source;
}

randomQuote();

document.querySelector("#generator").addEventListener('click', randomQuote);








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



//    https://alvarotrigo.com/blog/css-animations-scroll/    <-- animation on scroll








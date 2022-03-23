gsap.from('.header', {duration: 1,delay:0.5 , y:'-100%', ease:'bounce'});


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
  

//-------------------------Burger Menu--------------------------
const burger = document.querySelector('.burger i');
const nav = document.querySelector('.navbar');


function toggleNav() {
    burger.classList.toggle('uil-bars');
    burger.classList.toggle('uil-times');
    nav.classList.toggle('nav-active');
    
}

burger.addEventListener('click', function() {
    toggleNav();
});


//-----------------------------------------------------------------Contact Form-------------------------------------------

window.addEventListener('load', () => {
    const form = document.forms['form'];
    let html = document.getElementById("verifyText");
    
    form.addEventListener('submit', (event) => {
        
        const name = form.elements['first-name'];
        const surname = form.elements['surname'];
        const mail = form.elements['e-mail'];
        const phone = form.elements['phone'];

        let isValid = true;

        //Name Validation
        if (name.value.trim().length === 0) {	
            document.getElementById("verifyName").innerHTML = "Name is missing";
            isValid = false;
        }else{
            document.getElementById("verifyName").innerHTML = "";
            document.getElementById("successText").innerHTML = "";
        }

        //Surname Validation
        if (surname.value.trim().length === 0) {	
            document.getElementById("verifySurname").innerHTML = "Surname is missing";
            isValid = false;
        }else{
            document.getElementById("verifySurname").innerHTML = "";
            document.getElementById("successText").innerHTML = "";
        }

        //E-mail Validation
        const gmail_re = /^[a-z0-9\.]+@gmail\.com$/i;
    
        if (mail.value.trim().length === 0) {
            document.getElementById("verifyMail").innerHTML = "E-mail is missing";
                document.getElementById("successText").innerHTML = "";
            isValid = false;
        } else if (!gmail_re.test(mail.value)) {
            document.getElementById("verifyMail").innerHTML = "E-mail is not valid";
                document.getElementById("successText").innerHTML = "";
            isValid = false;
        }else{
            document.getElementById("verifyMail").innerHTML = "";
            document.getElementById("successText").innerHTML = "";
        }

        //Phone Confirmation
        const phone_re = /^\d{3,5}[- ]?\d{5,}$/;

        if (phone.value.trim().length === 0) {			
            document.getElementById("verifyPhone").innerHTML ="Phone is missing";
                document.getElementById("successText").innerHTML = "";
            isValid = false;
        } else if (!phone_re.test(phone.value)) {	
            document.getElementById("verifyPhone").innerHTML = "Phone is not valid";
                document.getElementById("successText").innerHTML = "";
            isValid = false;
        }else{
            document.getElementById("verifyPhone").innerHTML = "";
            document.getElementById("successText").innerHTML = "";
        }

        
        //Validation Text
        if (!isValid){
            event.preventDefault();
        }else{
            html.innerHTML = "";
            document.getElementById("verifyName").innerHTML = "";
            document.getElementById("verifySurname").innerHTML = "";
            document.getElementById("verifyMail").innerHTML = "";
            document.getElementById("verifyPhone").innerHTML = "";
            document.getElementById("successText").innerHTML = "Your message has been sent!";
            event.preventDefault();
        }
    })

})
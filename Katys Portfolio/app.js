const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');
const navLogo = document.querySelector('#navbar_logo');

//Display mobile menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);

// Show active menu when scroll
const highlightMenu = () => {
  const elem = document.querySelector('.highlight'); //to highlight the page areas
  const homeMenu = document.querySelector('#home-page'); //to call on the page id
  const aboutMenu = document.querySelector('#about-page');
  const skillsMenu = document.querySelector('#skills-page');

  //to show where abouts the user is actually positioned at
  let scrollPos = window.scrollY;
  console.log(scrollPos);

  //adds the highlights class to menu items
  if(window.innerWidth > 960 && scrollPos < 600){/*to only highlight when on desktop view as it will be unnecessary for mobile when its hidden in the hamburger menu and to change after 600 px past the previous page area*/
  homeMenu.classList.add('highlight');
  aboutMenu.classList.remove('highlight');//so wehn you scroll back up it removes the class from about and adds it to the home
  return;
  } else if (window.innerWidth > 960 && scrollPos < 1400){
    aboutMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    skillsMenu.classList.remove('highlight');//makes sure only the about class has the highlight
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2345){
    aboutMenu.classList.remove('highlight');
    skillsMenu.classList.add('highlight');
    return;
  }

  if((elem & window.innerWidth <960 && scrollPos <600) || elem){
    elem.classList.remove('highlight');//removes the highlight from the logo and mobile nav
  }
}

window.addEventListener('scroll', highlightMenu);//the above rules work when scrolling
window.addEventListener('click', highlightMenu);//the above rules work when the link is clicked

//close mobile menu when clicking on link
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if(window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
}
menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);




/*Contact Form*/ //the following code means that it wont be directed to the form spree email sent window
var form = document.getElementById("my-form");
/*var status = document.getElementById("status");

// Success and error functions for after the form is submitted
 function success() {
   form.reset();
   status.classList.add('success');
   status.innerHTML = "Thanks!";
 }
 function error() {
 status.classList.add('error');
   status.innerHTML = "Oops! There was a problem.";
 }

//handle the form submission event
form.addEventListener("submit", function (ev){
  ev.preventDefault();
  var data = new FormData(form);
  ajax(form.method, form.action, data, success, error);
});
});

//helper function for an AJAX request
function ajax(method, url, data, success, error){
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function (){
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200){
      success(xhr.response, xhr.responseType);
    } else{
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}*/

   async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("my-form-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        status.innerHTML = "Thanks for your submission!";
        form.reset()
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
    }
    form.addEventListener("submit", handleSubmit)

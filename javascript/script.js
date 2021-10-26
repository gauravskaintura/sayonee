window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  }
  else {
    document.getElementById("navbar").style.top = "-60px";
  }
}


let facebook = document.querySelector('#facebook')
let instagram = document.querySelector('#instagram')
let twitter = document.querySelector('#twitter')
let sm_name = document.querySelector('.socialmedia-name')
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('#navbar');

// facebook hover animation 
facebook.addEventListener('mouseover',()=>{
    sm_name.innerHTML="facebook"
    // sm_name.style.color="blue"
    sm_name.style.opacity = "1"
})
facebook.addEventListener('mouseout',()=>{
    sm_name.style.opacity = "0"
})

// instagram hover animation 
instagram.addEventListener('mouseover',()=>{
  sm_name.innerHTML="instagram"
  sm_name.style.opacity = "1"
})
instagram.addEventListener('mouseout',()=>{
  sm_name.style.opacity = "0"
})

// twitter hover animation 
twitter.addEventListener('mouseover',()=>{
  sm_name.innerHTML="twitter"
  sm_name.style.opacity = "1"
  // sm_name.style.color="blue"

})
twitter.addEventListener('mouseout',()=>{
  sm_name.style.opacity = "0"
})

menu.onclick = () =>{

  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');

}



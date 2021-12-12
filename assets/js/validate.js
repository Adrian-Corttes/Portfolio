"use strict";

const form = document.querySelector('#form');
const email = document.querySelector('#email');
const errorMessage = document.querySelector('.error-message');
const sentMessage = document.querySelector('.sent-message');

form.addEventListener("submit", e => {
   e.preventDefault();
   let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

   if(!emailRegex.test(email.value)){
      errorMessage.style.display = 'block';
   }
   else{
      sentMessage.style.display = 'block';
   }
})

 
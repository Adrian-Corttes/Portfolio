const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_i4z7wmh';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar Mensaje';
      alert('Your message has been sent. Thank you!');
    }, (err) => {
      btn.value = 'Enviar Mensaje';
      alert(JSON.stringify(err));
    });
});
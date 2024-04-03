const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_twpoi2f';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Se a enviado tu mensaje');
      form.reset();
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});
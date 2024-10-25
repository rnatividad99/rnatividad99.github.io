document.addEventListener('DOMContentLoaded', function() {
  emailjs.init("sUyADb8v1bhtxCxoo");
  console.log(emailjs);
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Send email using EmailJS
  emailjs.sendForm('service_oxzd5ok', 'template_32lplaf', this)
      .then(function() {
          showMessage('success', 'Your message has been sent successfully!');
          
          document.getElementById('contactForm').reset();
      }, function(error) {
          showMessage('error', 'Failed to send the message. Please try again later.');
      });
});

function showMessage(type, message) {
  const formMessage = document.getElementById('formMessage');
  formMessage.innerHTML = `<div class="alert alert-${type}">${message}</div>`;
  
  setTimeout(() => {
      formMessage.innerHTML = '';
  }, 3000);
}

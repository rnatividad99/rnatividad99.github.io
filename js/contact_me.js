document.addEventListener('DOMContentLoaded', function() {
  // Initialize EmailJS with your Public Key
  emailjs.init("sUyADb8v1bhtxCxoo");
  console.log(emailjs); // Check if EmailJS is loaded
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Send email using EmailJS
  emailjs.sendForm('service_oxzd5ok', 'template_32lplaf', this)
      .then(function() {
          alert('Email sent successfully!');
          
          // Clear the form fields after a successful email submission
          document.getElementById('contactForm').reset();
      }, function(error) {
          alert('Failed to send email: ' + JSON.stringify(error));
      });
});

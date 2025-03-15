// This Email Function uses EmailJS API -->> https://dashboard.emailjs.com/

document.addEventListener("DOMContentLoaded", function () {
         
    document.querySelector("#emailSendButton").onclick = () => {
        var templateParams = {
            name: document.querySelector('#name').value,
            email: document.querySelector('#email').value,
            subject: document.querySelector('#subject').value,
            message: document.querySelector('#message').value
        }; 

        emailjs.send('service_z86y3rb', 'template_kysmiza', templateParams)
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
           alert("Mail Sent! Thank you so much for reaching out.");
           document.querySelector('#myForm').reset();
           
        }, function(error) {
           console.log('FAILED...', error);
           alert("Oops! Sorry, something went wrong. Please try again.");
        });

    }
    

});
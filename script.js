document.getElementById('lead-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Logic to send data to your CRM or email provider goes here
    console.log("Lead captured:", { name, email });

    alert('Thank you, ' + name + '! Your blueprint is on its way.');
    
    // Optional: Redirect to a thank you page
    // window.location.href = 'thank-you.html';
});

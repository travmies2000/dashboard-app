document.getElementById('leadForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const leadData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value
    };

    // Replace YOUR_WEBHOOK_URL with your Make/Zapier endpoint
    fetch('YOUR_WEBHOOK_URL', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(leadData)
    })
    .then(() => {
        window.location.href = 'thank-you.html'; // Redirect to next step
    })
    .catch(error => console.error('Error:', error));
});

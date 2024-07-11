function start() {
    document.getElementById('landing-page').classList.add('hidden');
    document.getElementById('main-page').classList.remove('hidden');
}
document.addEventListener('DOMContentLoaded', function() {
    const imageContainer = document.querySelector('.cake-images ');
    const images = imageContainer.querySelectorAll('.cake-images img');
    const launchingButton = document.getElementById('launching-button');
    const launchingDate = document.getElementById('launching-date');
    const datePlaceholder = document.getElementById('date-placeholder');

    // Example: Set launch date (replace with your actual date)
    const launchDate = new Date('2024-12-31');
    // Example: Dynamically adjust spacing
    function setSpacing(spacing) {
        imageContainer.style.gap = spacing + 'px';
    }

    // Set initial spacing
    setSpacing(20);

    // Example: Change spacing on window resize (or any other event)
    window.addEventListener('resize', function() {
        const newSpacing = window.innerWidth / 50; // Adjust formula as needed
        setSpacing(newSpacing);
    });
    const isDailyCustomer = true; // Change this based on your logic
    
    if (isDailyCustomer) {
        const specialOffer = document.querySelector('.special-offer');
        specialOffer.classList.remove('hidden');
    }
    launchingButton.addEventListener('click', function() {
        // Redirect to launching page (replace with actual redirection code if needed)
        // Example: window.location.href = 'launching-page.html';

        // Display launching date
        datePlaceholder.textContent = launchDate.toDateString();
        launchingDate.classList.remove('hidden');
    });
});

function toggleInfo(element) {
    const info = element.querySelector('.info');
    info.classList.toggle('active');
}


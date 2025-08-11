document.addEventListener('DOMContentLoaded', function() {
    // Toggle dive maps
    const infoButtons = document.querySelectorAll('.more-info');
    
    infoButtons.forEach(button => {
        button.addEventListener('click', function() {
            const diveMap = this.nextElementSibling;
            diveMap.classList.toggle('hidden');
            
            if (diveMap.classList.contains('hidden')) {
                this.textContent = 'Show Dive Map';
            } else {
                this.textContent = 'Hide Dive Map';
                // In a real project, you would load a map here
                diveMap.innerHTML = '<p>Dive map would be displayed here with depth contours and entry points.</p>';
            }
        });
    });
    
    // Toggle contact info
    const contactBtn = document.getElementById('contact-btn');
    const contactInfo = document.getElementById('contact-info');
    
    contactBtn.addEventListener('click', function() {
        contactInfo.classList.toggle('hidden');
        
        if (contactInfo.classList.contains('hidden')) {
            this.textContent = 'Contact Dive Operators';
        } else {
            this.textContent = 'Hide Contact Info';
        }
    });
    
    // Smooth scrolling for navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 20,
                behavior: 'smooth'
            });
        });
    });
    
    // Add some interactive features
    const diveSites = document.querySelectorAll('.dive-site');
    
    diveSites.forEach(site => {
        site.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
            this.style.transition = 'all 0.3s ease';
        });
        
        site.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        });
    });
});
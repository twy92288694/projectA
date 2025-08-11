document.addEventListener('DOMContentLoaded', function() {
    // // Back to Top Button
    // const backToTopButton = document.getElementById('backToTop');
    
    // window.addEventListener('scroll', function() {
    //     if (window.pageYOffset > 300) {
    //         backToTopButton.classList.add('visible');
    //     } else {
    //         backToTopButton.classList.remove('visible');
    //     }
    // });
    
    // backToTopButton.addEventListener('click', function(e) {
    //     e.preventDefault();
    //     window.scrollTo({
    //         top: 0,
    //         behavior: 'smooth'
    //     });
    // });
    
    // // Tab Functionality
    // const tabButtons = document.querySelectorAll('.tab-btn');
    // const tabContents = document.querySelectorAll('.tab-content');
    
    // tabButtons.forEach(button => {
    //     button.addEventListener('click', function() {
    //         // Remove active class from all buttons and contents
    //         tabButtons.forEach(btn => btn.classList.remove('active'));
    //         tabContents.forEach(content => content.classList.remove('active'));
            
    //         // Add active class to clicked button
    //         this.classList.add('active');
            
    //         // Show corresponding content
    //         const tabId = this.getAttribute('data-tab');
    //         document.getElementById(tabId).classList.add('active');
    //     });
    // });
    
    // // Smooth Scrolling for Navigation Links
    // document.querySelectorAll('nav a').forEach(anchor => {
    //     anchor.addEventListener('click', function(e) {
    //         e.preventDefault();
            
    //         const targetId = this.getAttribute('href');
    //         if (targetId === '#') return;
            
    //         const targetElement = document.querySelector(targetId);
    //         if (targetElement) {
    //             window.scrollTo({
    //                 top: targetElement.offsetTop - 80,
    //                 behavior: 'smooth'
    //             });
    //         }
    //     });
    // });
    
    // // Mobile Menu Toggle (would need additional HTML/CSS for full functionality)
    // const mobileMenu = document.querySelector('.mobile-menu');
    // const navLinks = document.querySelector('.nav-links');
    
    // if (mobileMenu && navLinks) {
    //     mobileMenu.addEventListener('click', function() {
    //         navLinks.classList.toggle('active');
    //     });
    // }
    
//     // Gallery Lightbox (would need additional HTML/CSS for full functionality)
//     const galleryItems = document.querySelectorAll('.gallery-item');
    
//     galleryItems.forEach(item => {
//         item.addEventListener('click', function() {
//             // This would open a lightbox with the clicked image
//             // Implementation would require additional HTML/CSS
//             console.log('Gallery item clicked - would open lightbox');
//         });
//     });
// });
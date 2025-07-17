// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const menuItems = document.querySelector('.menu-items');
    
    if (mobileMenuToggle && menuItems) {
        mobileMenuToggle.addEventListener('click', function() {
            menuItems.classList.toggle('active');
            // Update aria-expanded state
            const isExpanded = menuItems.classList.contains('active');
            mobileMenuToggle.setAttribute('aria-expanded', isExpanded);
        });
    }
});

// Existing profile toggle function
function toggleProfile(){
    const icon = document.getElementById('profileToggle');
    const section = document.getElementById('profileCard');

    if(section.classList.contains('hidden')){
        section.classList.remove('hidden');
        icon.classList.remove('hidden');
    }
    else{
        section.classList.add('hidden');
        icon.classList.add('hidden'); 
    }
}
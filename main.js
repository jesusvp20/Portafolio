document.addEventListener('DOMContentLoaded', () => {

    document.querySelectorAll('.nav-item').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if(targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-item');

    function activateMenuItem() {
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if(window.scrollY >= sectionTop - 150 && 
               window.scrollY < sectionTop + sectionHeight - 150) {
                currentSection = section.id;
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if(item.getAttribute('href') === `#${currentSection}`) {
                item.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', activateMenuItem);
    window.dispatchEvent(new Event('scroll'));
});
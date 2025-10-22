// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const mainNav = document.getElementById('main-nav');
const header = document.getElementById('header');

if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
}

// Close menu when clicking on links
const navLinks = document.querySelectorAll('.main-nav a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mainNav.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
    });
}, observerOptions);

// Apply animations to elements
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(element => {
        observer.observe(element);
    });
});

// Highlight pe servicii din servicii.html
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.03)';
        card.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.2)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
        card.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    });
});

// Pop-up la trimite mesaj în contact.html
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Verifică dacă toate câmpurile sunt completate
        const nume = document.getElementById('nume').value;
        const email = document.getElementById('email').value;
        const telefon = document.getElementById('telefon').value;
        const mesaj = document.getElementById('mesaj').value;

        if (nume && email && telefon && mesaj) {
            // Crează pop-up
            const popup = document.createElement('div');
            popup.className = 'popup';
            popup.innerHTML = `
                <div class="popup-content">
                    <span class="popup-close">&times;</span>
                    <h3>✓ Mesaj trimis cu succes!</h3>
                    <p>Vă mulțumim pentru mesaj, <strong>${nume}</strong>!</p>
                    <p>Vă vom contacta în curând la <strong>${email}</strong> sau <strong>${telefon}</strong>.</p>
                </div>
            `;

            document.body.appendChild(popup);

            // Stilizare pop-up
            popup.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.7);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 1000;
                animation: fadeIn 0.3s ease;
            `;

            const popupContent = popup.querySelector('.popup-content');
            popupContent.style.cssText = `
                background: white;
                padding: 40px;
                border-radius: 10px;
                box-shadow: 0 10px 50px rgba(0, 0, 0, 0.3);
                text-align: center;
                position: relative;
                max-width: 500px;
                animation: slideIn 0.3s ease;
            `;

            const closeBtn = popup.querySelector('.popup-close');
            closeBtn.style.cssText = `
                position: absolute;
                top: 15px;
                right: 20px;
                font-size: 30px;
                cursor: pointer;
                color: #666;
                transition: color 0.3s;
            `;

            closeBtn.addEventListener('mouseenter', () => {
                closeBtn.style.color = '#000';
            });

            closeBtn.addEventListener('mouseleave', () => {
                closeBtn.style.color = '#666';
            });

            // Închide pop-up
            closeBtn.addEventListener('click', () => {
                popup.style.animation = 'fadeOut 0.3s ease';
                setTimeout(() => {
                    document.body.removeChild(popup);
                    contactForm.reset();
                }, 300);
            });

            // Închide pop-up la click pe fundal
            popup.addEventListener('click', (e) => {
                if (e.target === popup) {
                    popup.style.animation = 'fadeOut 0.3s ease';
                    setTimeout(() => {
                        document.body.removeChild(popup);
                        contactForm.reset();
                    }, 300);
                }
            });
        }
    });
}

// Animații CSS pentru pop-up
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
    
    @keyframes slideIn {
        from { transform: translateY(-50px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
    }
    
    .popup-content h3 {
        color: #2c3e50;
        margin-bottom: 20px;
        font-size: 24px;
    }
    
    .popup-content p {
        color: #555;
        line-height: 1.6;
        margin: 10px 0;
    }
`;
document.head.appendChild(style);

// Smooth scroll pentru link-uri
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
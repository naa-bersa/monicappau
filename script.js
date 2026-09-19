document.addEventListener('DOMContentLoaded', () => {

    /* =========================
       MOBILE NAVIGATION
    ========================= */

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const closeMenu = document.getElementById('close-menu');

if (hamburger && navMenu && closeMenu) {

    hamburger.addEventListener('click', () => {
        navMenu.classList.add('active');
    });

    closeMenu.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });

    // Close menu when a navigation link is clicked
    const navLinks = document.querySelectorAll('#nav-menu ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    /* =========================
       ACTIVE PAGE
    ========================= */

    const currentPage = window.location.pathname.split('/').pop();

    navLinks.forEach(link => {

        const linkPage = link.getAttribute('href').split('/').pop();

        if (
            linkPage === currentPage ||
            (currentPage === '' && linkPage === 'index.html')
        ) {
            link.classList.add('active');
        }

    });
}


    /* =========================
       ABOUT PAGE - VALUE CARDS
    ========================= */

    const cards = document.querySelectorAll('.value-card');

    function revealCards() {
        const windowHeight = window.innerHeight;

        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;

            if (cardTop < windowHeight - 100) {
                card.classList.add('visible');
            }
        });
    }

    if (cards.length > 0) {
        window.addEventListener('scroll', revealCards);
        window.addEventListener('load', revealCards);
        revealCards();
    }


    /* =========================
       CASE STUDY MODAL
    ========================= */

    const caseBlocks = document.querySelectorAll('.case-block');
    const overlay = document.getElementById('case-study-overlay');
    const iframe = document.getElementById('framer-iframe');
    const closeBtn = document.getElementById('close-iframe');

    if (caseBlocks.length > 0 && overlay && iframe && closeBtn) {

        // Open case study
        caseBlocks.forEach(block => {

            block.addEventListener('click', () => {

                const link = block.getAttribute('data-framer-link');

                if (!link) return;

                iframe.src = link;
                overlay.style.display = 'block';

                // Prevent background scrolling
                document.body.style.overflow = 'hidden';
            });

        });


        // Close case study
        closeBtn.addEventListener('click', () => {

            iframe.src = '';
            overlay.style.display = 'none';

            document.body.style.overflow = '';
        });


        // Close when clicking outside the modal
        overlay.addEventListener('click', (event) => {

            if (event.target === overlay) {

                iframe.src = '';
                overlay.style.display = 'none';

                document.body.style.overflow = '';
            }

        });

    }


    /* =========================
       PLAYFUL PENCIL CURSOR
    ========================= */

    const pencil = document.querySelector('.cursor-pencil');

    if (pencil && window.innerWidth > 768) {

        let mouseX = 0;
        let mouseY = 0;

        let pencilX = 0;
        let pencilY = 0;

        document.addEventListener('mousemove', (event) => {

            mouseX = event.clientX;
            mouseY = event.clientY;

        });


        function animatePencil() {

            // Smooth movement
            pencilX += (mouseX - pencilX) * 0.15;
            pencilY += (mouseY - pencilY) * 0.15;

            pencil.style.transform =
                `translate3d(${pencilX}px, ${pencilY}px, 0) rotate(-25deg)`;

            requestAnimationFrame(animatePencil);
        }

        animatePencil();
    }

});
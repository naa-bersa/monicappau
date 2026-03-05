
// MOBILE NAV TOGGLE
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const closeMenu = document.getElementById('close-menu');

    if(!hamburger || !navMenu || !closeMenu) return;

    closeMenu.style.display = 'none';

    hamburger.addEventListener('click', () => {
        navMenu.classList.add('active');
        hamburger.style.display = 'none';
        closeMenu.style.display = 'block';
    });

    closeMenu.addEventListener('click', () => {
        navMenu.classList.remove('active');
        closeMenu.style.display = 'none';
        hamburger.style.display = 'block';
    });

    // Close nav when clicking links
    const navLinks = document.querySelectorAll('#nav-menu ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            closeMenu.style.display = 'none';
            hamburger.style.display = 'block';
        });
    });
});



const cards = document.querySelectorAll('.value-card');

function revealCards() {
    const windowHeight = window.innerHeight;
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if(cardTop < windowHeight - 100) {
            card.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', revealCards);
window.addEventListener('load', revealCards);


// Select all case blocks
const caseBlocks = document.querySelectorAll('.case-block');

// Select modal overlay and iframe
const overlay = document.getElementById('case-study-overlay');
const framerIframe = document.getElementById('framer-iframe');
const closeBtn = document.getElementById('close-iframe');

// Open modal with the correct Framer link
caseBlocks.forEach(block => {
  block.addEventListener('click', () => {
    const link = block.getAttribute('data-framer-link');
    if(link) {
      framerIframe.src = link;
      overlay.style.display = 'flex'; // show the modal
    }
  });
});

// Close button
closeBtn.addEventListener('click', () => {
  framerIframe.src = '';
  overlay.style.display = 'none'; // hide the modal
});

// Optional: click outside iframe to close modal
overlay.addEventListener('click', e => {
  if(e.target === overlay) {
    framerIframe.src = '';
    overlay.style.display = 'none';
  }
});

const iframe = document.getElementById("framer-iframe");

iframe.addEventListener("click", () => {
  if (iframe.src) {
    window.open(iframe.src, "_blank");
  }
});

const openFull = document.getElementById("open-full");

caseBlocks.forEach(block => {
  block.addEventListener('click', () => {
    const link = block.getAttribute('data-framer-link');

    iframe.src = link;
    openFull.href = link;
    overlay.style.display = 'block';
  });
});
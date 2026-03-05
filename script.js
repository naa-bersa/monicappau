// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const closeMenu = document.getElementById('close-menu');
hamburger?.addEventListener('click', ()=>navMenu.classList.toggle('active'));
closeMenu?.addEventListener('click', ()=>navMenu.classList.remove('active'));

// Intro animations
// window.addEventListener('load', () => {
//     const introTitle = document.querySelector('.intro-title');
//     const introDetails = document.querySelector('.intro-details');

//     setTimeout(()=>introTitle.classList.add('fade-in'), 200);
//     setTimeout(()=>introDetails.classList.add('fade-in'), 600);
// });

const navLinks = document.querySelectorAll('#nav-menu ul li a');

navLinks.forEach(link => {
  const linkHref = link.getAttribute('href');
  // Get current page name from URL
  const currentPage = window.location.pathname.split("/").pop();

  if (linkHref === currentPage) {
    link.classList.add('active'); // underline stays on current page
  }
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
// Modal elements for image/text modal
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const closeBtn = document.getElementById('close');

// Modal elements for iframe project viewer
const projectViewer = document.getElementById('project-viewer');
const projectFrame = document.getElementById('project-frame');
const closeViewer = document.getElementById('close-viewer');

document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('click', () => {
        const projectURL = item.getAttribute('data-link');

        if (projectURL) {
            // Open iframe modal for projects with data-link
            projectFrame.src = projectURL;
            projectViewer.style.display = 'block';

            // Make sure image modal is closed
            modal.style.display = 'none';
            modalImg.src = '';
            modalTitle.textContent = '';
            modalDesc.textContent = '';
        } else {
            // Open image/text modal for projects without data-link
            modal.style.display = 'block';
            modalImg.src = item.getAttribute('data-img');
            modalTitle.textContent = item.getAttribute('data-title');
            modalDesc.textContent = item.getAttribute('data-desc');

            // Make sure iframe modal is closed
            projectViewer.style.display = 'none';
            projectFrame.src = '';
        }
    });
});

// Close handlers for image/text modal
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Close handler for iframe modal
closeViewer.addEventListener('click', () => {
    projectViewer.style.display = 'none';
    projectFrame.src = "";
});

document.addEventListener("DOMContentLoaded", () => {
    const hero = document.querySelector('.hero');
    const images = [
        'images/final_project.jpg',
        'images/rideshare.png',
        'images/Apple_MacBook_Air_M1_Mockup_v01.png',
        'images/cover_1.png'
    ];
    let currentImage = 0;

    function changeBackground() {
        hero.style.backgroundImage = `url('${images[currentImage]}')`;
        currentImage = (currentImage + 1) % images.length;
    }

    changeBackground();
    setInterval(changeBackground, 5000);
});
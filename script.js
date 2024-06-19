const gallery = document.querySelector('.gallery');

gallery.addEventListener('mouseover', () => {
    gallery.style.animationPlayState = 'paused';
});

gallery.addEventListener('mouseout', () => {
    gallery.style.animationPlayState = 'running';
});
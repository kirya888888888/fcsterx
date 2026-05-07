const musicBtn = document.getElementById('musicBtn');
const bgMusic = document.getElementById('bgMusic');

const playMusic = () => {
    bgMusic.play().catch(() => {
        console.log('Автопроигрывание заблокировано браузером');
    });
};

window.addEventListener('load', () => {
    setTimeout(playMusic, 100);
});

document.addEventListener('click', () => {
    if (bgMusic.paused) {
        playMusic();
    }
}, { once: true });

musicBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    
    if (bgMusic.paused) {
        bgMusic.play();
        musicBtn.textContent = '🎶';
        musicBtn.classList.add('playing');
    } else {
        bgMusic.pause();
        musicBtn.textContent = '🎵';
        musicBtn.classList.remove('playing');
    }
});

bgMusic.addEventListener('play', () => {
    musicBtn.textContent = '🎶';
    musicBtn.classList.add('playing');
});

bgMusic.addEventListener('pause', () => {
    musicBtn.textContent = '🎵';
    musicBtn.classList.remove('playing');
});
document.addEventListener('DOMContentLoaded', function() {
    const musicBtn = document.getElementById('musicBtn');
    const bgMusic = document.getElementById('bgMusic');

    if (!musicBtn || !bgMusic) {
        console.error('Музыкальные элементы не найдены');
        return;
    }

    // Установка громкости
    bgMusic.volume = 0.5;

    // Функция для включения музыки
    function playMusic() {
        bgMusic.play().then(() => {
            musicBtn.textContent = '🎶';
            musicBtn.classList.add('playing');
        }).catch((error) => {
            console.log('Ошибка при проигрывании:', error);
        });
    }

    // Функция для выключения музыки
    function stopMusic() {
        bgMusic.pause();
        musicBtn.textContent = '🎵';
        musicBtn.classList.remove('playing');
    }

    // Клик по кнопке музыки
    musicBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        if (bgMusic.paused) {
            playMusic();
        } else {
            stopMusic();
        }
    });

    // Попытка автопроигрывания при загрузке
    window.addEventListener('load', function() {
        setTimeout(playMusic, 500);
    });

    // Попытка проигрывания при первом клике
    document.addEventListener('click', function startPlayOnClick() {
        if (bgMusic.paused) {
            playMusic();
        }
        document.removeEventListener('click', startPlayOnClick);
    });

    // Обновление иконки при изменении состояния
    bgMusic.addEventListener('play', function() {
        musicBtn.textContent = '🎶';
        musicBtn.classList.add('playing');
    });

    bgMusic.addEventListener('pause', function() {
        musicBtn.textContent = '🎵';
        musicBtn.classList.remove('playing');
    });
});
const video = document.getElementById('meuVideo');


video.addEventListener('play', () => {
    video.classList.add('playing');
});


video.addEventListener('pause', () => {
    video.classList.remove('playing');
});

video.addEventListener('ended', () => {
    video.classList.remove('playing');
});
const audio = document.getElementById('meuAudio');


audio.addEventListener('play', () => {
    audio.classList.add('playing');
});


audio.addEventListener('pause', () => {
    audio.classList.remove('playing');
});

audio.addEventListener('ended', () => {
    audio.classList.remove('playing');
});

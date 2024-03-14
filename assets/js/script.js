document.addEventListener('DOMContentLoaded', function () {
    particlesJS.load('particles-js', '/assets/js/particles.json', function () {
        console.log('Particles.js loaded...');
    });
});

let currentMemeIndex = 0;
let memeData = null;

function fetchMemeData() {
    fetch(' https://meme-api.com/gimme/20')
        .then(response => response.json())
        .then(data => {
            memeData = data;
            updateMemePreview();
        })
        .catch(error => {
            console.error('Error fetching meme data:', error);
        });
}

function updateMemePreview() {
    const memeElement = document.getElementById('meme');
    if (memeData && memeData.memes && memeData.memes.length > 0) {
        memeElement.src = memeData.memes[currentMemeIndex].url;
        currentMemeIndex = (currentMemeIndex + 1) % memeData.memes.length;
    } else {
        console.error('Invalid meme data:', memeData);
    }
}

fetchMemeData();

setInterval(updateMemePreview, 10000);


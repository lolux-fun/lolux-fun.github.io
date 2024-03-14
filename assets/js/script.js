let currentMemeIndex = 0;
let memeData = null;

function fetchMemeData() {
    fetch(' https://meme-api.com/gimme/50')
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
        const tempImage = new Image();
        tempImage.onload = function () {
            const width = tempImage.width;
            const height = tempImage.height;

            memeElement.src = memeData.memes[currentMemeIndex].url;
            memeElement.width = width;
            memeElement.height = height;

            currentMemeIndex = (currentMemeIndex + 1) % memeData.memes.length;
        };
        tempImage.src = memeData.memes[currentMemeIndex].url;
    } else {
        console.error('Invalid meme data:', memeData);
    }
}



document.addEventListener('DOMContentLoaded', function () {
    particlesJS.load('particles-js', '/assets/js/particles.json', function () {
    });
    console.log("LOL");
    console.log("LOLux");
    fetchMemeData();
    setInterval(updateMemePreview, 10000);
});






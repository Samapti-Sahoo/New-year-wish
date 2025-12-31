
function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (6 + Math.random() * 6) + 's';
  heart.style.transform = `translateY(100vh) rotate(45deg) scale(${0.8 + Math.random()*0.8})`;
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 12000);
}


function createStar() {
  const star = document.createElement('div');
  star.className = 'star';
  star.style.left = Math.random() * 100 + 'vw';
  star.style.top = Math.random() * 100 + 'vh';
  star.style.animationDelay = (Math.random() * 4) + 's';
  document.body.appendChild(star);
  setTimeout(() => star.remove(), 8000);
}


for (let i = 0; i < 36; i++) createStar();
for (let i = 0; i < 16; i++) createHeart();


setInterval(createHeart, 400);
setInterval(createStar, 600);


const cta = document.querySelector('.cta a');
cta.addEventListener('click', (e) => {
  e.preventDefault();
  cta.style.transform = 'scale(1.06)';
  setTimeout(() => cta.style.transform = 'scale(1)', 200);
});
function openVideo() {
  const modal = document.getElementById("videoModal");
  const video = document.getElementById("kissVideo");
  modal.style.display = "block";
  video.play();
}

function closeVideo() {
  const modal = document.getElementById("videoModal");
  const video = document.getElementById("kissVideo");
  modal.style.display = "none";
  video.pause();
  video.currentTime = 0; // reset to start
}

// Close modal if user clicks outside the video box
window.onclick = function(event) {
  const modal = document.getElementById("videoModal");
  if (event.target === modal) {
    closeVideo();
  }
}

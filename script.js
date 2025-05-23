//your JS code here. If required.
const soundButtons = document.querySelectorAll(".btn");
const stopButton = document.querySelector(".stop");

let currentAudio = null;

soundButtons.forEach(button => {
  button.addEventListener("click", () => {
    const soundName = button.getAttribute("data-sound");

    // Stop current audio if playing
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    currentAudio = new Audio(`sounds/${soundName}.mp3`);
    currentAudio.play();
  });
});

stopButton.addEventListener("click", () => {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  }
});
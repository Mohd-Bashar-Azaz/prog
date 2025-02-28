const video = document.getElementById("main-video");
const playButton = document.querySelector(".play");
const rewindButton = document.querySelector(".fast-rewind");
const fastForwardButton = document.querySelector(".fast-forward");
const volumeIcon = document.querySelector(".volume i");
const volumeRange = document.getElementById("volume_range");
const progressBar = document.querySelector(".progress-bar");
const progressArea = document.querySelector(".progress-area");
const currentTimeEl = document.querySelector(".current");
const durationTimeEl = document.querySelector(".duration");
const settingsBtn = document.querySelector(".settingsBtn");
const settingsMenu = document.querySelector(".settings");
const speedOptions = document.querySelectorAll(".playback li");
const pictureInPictureButton = document.querySelector(".picture_in_picture");
const fullscreenButton = document.querySelector(".fullscreen");

playButton.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    playButton.textContent = "pause";
  } else {
    video.pause();
    playButton.textContent = "play_arrow";
  }
});

rewindButton.addEventListener("click", () => {
  video.currentTime -= 10;
});

fastForwardButton.addEventListener("click", () => {
  video.currentTime += 10;
});

volumeRange.addEventListener("input", (e) => {
  video.volume = e.target.value / 100;
  if (video.volume === 0) {
    volumeIcon.textContent = "volume_off";
  } else if (video.volume < 0.5) {
    volumeIcon.textContent = "volume_down";
  } else {
    volumeIcon.textContent = "volume_up";
  }
});

video.addEventListener("loadedmetadata", () => {
  durationTimeEl.textContent = formatTime(video.duration);
});

video.addEventListener("timeupdate", () => {
  const { currentTime, duration } = video;
  progressBar.style.width = `${(currentTime / duration) * 100}%`;
  currentTimeEl.textContent = formatTime(currentTime);
});

progressArea.addEventListener("click", (e) => {
  const { duration } = video;
  const clickX = e.offsetX;
  const width = progressArea.clientWidth;
  video.currentTime = (clickX / width) * duration;
});

settingsBtn.addEventListener("click", () => {
  settingsMenu.classList.toggle("show");
});

speedOptions.forEach((option) => {
  option.addEventListener("click", () => {
    video.playbackRate = option.getAttribute("data-speed");
    speedOptions.forEach((opt) => opt.classList.remove("active"));
    option.classList.add("active");
    settingsMenu.classList.remove("show");
  });
});

pictureInPictureButton.addEventListener("click", async () => {
  if (document.pictureInPictureElement) {
    document.exitPictureInPicture();
  } else {
    try {
      await video.requestPictureInPicture();
    } catch (error) {
      console.error(error);
    }
  }
});

fullscreenButton.addEventListener("click", () => {
  if (!document.fullscreenElement) {
    video.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
});

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

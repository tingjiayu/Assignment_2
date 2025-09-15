const bgmPlayer = new Tone.Player({
  url: "childmemory.wav",
  loop: true,
  autostart: false,
}).toDestination();

const clickPlayer = new Tone.Player({
  url: "turnonmusic.wav",
  loop: false,
  autostart: false,
}).toDestination();

const overlay = document.getElementById("overlay");
const listenButton = document.getElementById("listenButton");

let isFullClear = false;
let isBgmPlaying = false;

document.body.addEventListener("click", async (e) => {
  if (isFullClear) return;

  console.log("Screen clicked at:", Date.now());

  await Tone.start();

  clickPlayer.stop();
  clickPlayer.start();

  const x = e.clientX;
  const y = e.clientY;

  overlay.style.transition = "mask 1s ease, -webkit-mask 1s ease";
  overlay.style.webkitMaskImage = `radial-gradient(circle 0px at ${x}px ${y}px, transparent 0%, black 100%)`;
  overlay.style.maskImage = `radial-gradient(circle 0px at ${x}px ${y}px, transparent 0%, black 100%)`;

  requestAnimationFrame(() => {
    overlay.style.webkitMaskImage = `radial-gradient(circle 200px at ${x}px ${y}px, transparent 70%, black 100%)`;
    overlay.style.maskImage = `radial-gradient(circle 200px at ${x}px ${y}px, transparent 70%, black 100%)`;
  });
});

listenButton.addEventListener("click", async () => {
  console.log("Listen button clicked at:", Date.now());

  await Tone.start();

  clickPlayer.stop();

  if (!isBgmPlaying) {
    bgmPlayer.volume.value = -20;
    bgmPlayer.start();
    bgmPlayer.volume.rampTo(-6, 2);

    overlay.style.transition = "opacity 2.5s ease";
    overlay.style.opacity = "0";
    overlay.style.pointerEvents = "none";

    isFullClear = true;
    isBgmPlaying = true;
  } else {
    bgmPlayer.stop();
    isBgmPlaying = false;
  }
});

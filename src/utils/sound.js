export const playSound = (sound, volume = null) => {
  const audio = new Audio(`/sounds/${sound}`);

  if (volume !== null) {
    audio.volume = volume;
  }

  audio.play();
};

export function setupButton(element) {
  element.addEventListener('click', () => {
    const vid = document.querySelector('video');

    // Check if the video has been loaded
    if (vid.readyState != 4) {
      return;
    }

    vid.style.display = 'block'
    vid.play()
    vid.addEventListener('ended', () => {
      window.location.reload();
    })
  })
}

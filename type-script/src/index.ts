interface VideoPlayerElements {
  videoPlayer: HTMLVideoElement
  playButton: HTMLButtonElement
  stopButton: HTMLButtonElement
}

interface VideoPlayerProtocols {
  playToggle(): void
  stop(): void
  iniciarEvento(): void
}

export default class VideoPlayer implements VideoPlayerProtocols {
  private videoPlayer: HTMLVideoElement
  private playButton: HTMLButtonElement
  private stopButton: HTMLButtonElement

  constructor(videoPlayerElements: VideoPlayerElements) {
    this.videoPlayer = videoPlayerElements.videoPlayer
    this.playButton = videoPlayerElements.playButton
    this.stopButton = videoPlayerElements.stopButton
  }

  playToggle(): void {
    if (this.videoPlayer.paused) {
      this.videoPlayer.play()
      this.playButton.innerHTML = 'Pause'
    } else {
      this.videoPlayer.pause()
      this.playButton.innerHTML = 'Play'
    }
  }

  stop(): void {
    this.videoPlayer.pause()
    this.videoPlayer.currentTime = 0
    this.playButton.innerHTML = 'Play'
  }

  iniciarEvento(): void {
    this.playButton.addEventListener('click', () => {
      this.playToggle()
    })

    this.stopButton.addEventListener('click', () => {
      this.stop()
    })
  }
}

const videoPlayer = new VideoPlayer({
  videoPlayer: document.querySelector('.video') as HTMLVideoElement,
  playButton: document.querySelector('.play') as HTMLButtonElement,
  stopButton: document.querySelector('.stop') as HTMLButtonElement,
})

videoPlayer.iniciarEvento()

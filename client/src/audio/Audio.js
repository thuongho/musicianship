class Audio {
  // AudioContext need to initialize to work with web audio api
  static context = new (window.AudioContext || window.webkitAudioContext)();

  // master volume control
  static masterGainNode = Audio.context.createGain();
}

export default Audio;

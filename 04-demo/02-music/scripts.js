const playButton = document.getElementById('play');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

const audioContext = new (window.AudioContext || window.webkitAudioContext)();
let sourceNode = null;

const playAudio = (url) => {
  if (sourceNode) {
    sourceNode.stop();
  }

  fetch(url)
    .then((response) => response.arrayBuffer())
    .then((arrayBuffer) => audioContext.decodeAudioData(arrayBuffer))
    .then((audioBuffer) => {
      sourceNode = audioContext.createBufferSource();
      sourceNode.buffer = audioBuffer;
      sourceNode.connect(audioContext.destination);
      sourceNode.start();

      playButton.textContent = '暂停';
      sourceNode.onended = () => {
        playButton.textContent = '播放';
      };
    })
    .catch((error) => {
      console.error('播放音频时出错：', error);
    });
};

playButton.addEventListener('click', () => {
  if (audioContext.state === 'suspended') {
    audioContext.resume();
    playButton.textContent = '暂停';
  } else if (audioContext.state === 'running') {
    audioContext.suspend();
    playButton.textContent = '播放';
  } else {
    playAudio('https://soundcloud.com/soundcloud-shine/sets/breakers-fun-spring-pop?si=e59820b379e540079d60e400692ea5a0&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing');
  }
});

// 您可以添加其他事件监听器，以实现上一曲和下一曲功能

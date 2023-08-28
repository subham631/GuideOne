// Function to play the alarm sound
function playAlarmSound() {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioContext = new AudioContext();
  
    const oscillator = audioContext.createOscillator();
    oscillator.type = 'square';
    oscillator.frequency.setValueAtTime(400, audioContext.currentTime);
  
    const gainNode = audioContext.createGain();
    gainNode.gain.setValueAtTime(1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.55);
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
  
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.55);
  }
  
  // Attach the playAlarmSound function to each button
  const alarmButtons = document.querySelectorAll('.alarm-button');
  alarmButtons.forEach(button => {
    button.addEventListener('click', () => {
      playAlarmSound();
    });
  });
  
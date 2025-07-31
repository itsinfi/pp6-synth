const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function updateLabel(id, value) {
    document.getElementById(id).innerText = value;
}

function playNote() {
    const now = audioCtx.currentTime;
    const freq = parseFloat(document.getElementById('freq').value);

    // Envelope values
    const fAttack = parseFloat(document.getElementById('fAttack').value);
    const fSustain = parseFloat(document.getElementById('fSustain').value);
    const fDR = parseFloat(document.getElementById('fDR').value);

    const aAttack = parseFloat(document.getElementById('aAttack').value);
    const aSustain = parseFloat(document.getElementById('aSustain').value);
    const aDR = parseFloat(document.getElementById('aDR').value);

    // Oscillator
    const osc = audioCtx.createOscillator();
    osc.type = 'square';
    osc.frequency.setValueAtTime(freq, now);

    // Filter
    const filter = audioCtx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.Q.value = 24;

    // Filter envelope
    filter.frequency.setValueAtTime(100, now);
    filter.frequency.linearRampToValueAtTime(fSustain, now + fAttack);
    filter.frequency.linearRampToValueAtTime(100, now + fAttack + fDR);

    // Amplifier
    const amp = audioCtx.createGain();
    amp.gain.setValueAtTime(0.0001, now);
    amp.gain.linearRampToValueAtTime(aSustain, now + aAttack);
    amp.gain.linearRampToValueAtTime(0.0001, now + aAttack + aDR);

    // Connections
    osc.connect(filter);
    filter.connect(amp);
    amp.connect(audioCtx.destination);

    osc.start(now);
    osc.stop(now + Math.max(fAttack + fDR, aAttack + aDR) + 0.1);
}
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../public/audio');
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

// 52-byte silent WAV file data
const wavHex = '524946462c00000057415645666d74201000000001000100401f0000401f00000100080064617461080000008080808080808080';
const buffer = Buffer.from(wavHex, 'hex');

fs.writeFileSync(path.join(dir, 'click.mp3'), buffer);
fs.writeFileSync(path.join(dir, 'too_high.mp3'), buffer);
fs.writeFileSync(path.join(dir, 'too_low.mp3'), buffer);
fs.writeFileSync(path.join(dir, 'success.mp3'), buffer);
fs.writeFileSync(path.join(dir, 'bg_music.mp3'), buffer);

console.log('Dummy audio files created successfully!');

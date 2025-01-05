const canvas = document.getElementById('sineWave');
const ctx = canvas.getContext('2d');

// Set canvas dimensions
canvas.width = window.innerWidth;
canvas.height = 200; // Match the height in CSS

// Sine wave properties
let wave = {
  y: canvas.height / 2, // Center the wave vertically
  length: 0.04, // Adjust wave length
  amplitude: 90, // Adjust wave height
  frequency: 0.01, // Adjust wave speed
};

let increment = wave.frequency;

// Animation loop
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
  ctx.beginPath();
  ctx.moveTo(0, wave.y); // Start wave at left side

  for (let i = 0; i < canvas.width; i++) {
    ctx.lineTo(
      i,
      wave.y + Math.sin(i * wave.length + increment) * wave.amplitude
    );
  }

  ctx.strokeStyle = 'rgba(255, 255, 255, 1)'; // White wave color
  ctx.lineWidth = 10; // Thicker wave line
  ctx.stroke();

  increment += wave.frequency; // Increment to animate the wave
  requestAnimationFrame(animate); // Call animation loop
}

// Adjust canvas size on resize
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = 200; // Match the height in CSS
  wave.y = canvas.height / 2; // Re-center wave
});

// Start the animation
animate();

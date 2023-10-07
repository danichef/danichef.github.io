// Create a Stats.js instance
var stats = new Stats();

// Set the mode (0: fps, 1: ms, 2: mb, 3+: custom)
stats.setMode(0);

// Position the stats widget on the page
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';

// Append the stats widget to the body
document.body.appendChild(stats.domElement);

// Function to update the stats
var updateStats = function() {
    stats.begin();
    // Your code to measure performance here
    stats.end();

    // Request the next frame for continuous monitoring
    requestAnimationFrame(updateStats);
};

// Start monitoring
updateStats();

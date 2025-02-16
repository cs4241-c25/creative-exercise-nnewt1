const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Polygon size and position variables that can be changed by changePolygon
let polySize = 100;
let polyX = 100;
let polyY = 100;

// Need a function to draw polygons, a function to draw gradient polygons, function to change a polygon, and function to initialize all drawings on the canvas at the end.

// Function to draw a polygon
function drawPolygon(ctx, sides, x, y, size, color) {
    ctx.beginPath();
    // Equilateral polygons for simplicity in formulaic creation
    for (let i = 0; i < sides; i++) {
        ctx.lineTo(x + size * Math.cos(i * 2 * Math.PI / sides), y + size * Math.sin(i * 2 * Math.PI / sides));
    }
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
}

// Function to draw a gradient polygon
function drawGradientPolygon(ctx, sides, x, y, size, color1, color2) {
    let gradient = ctx.createLinearGradient(x, y, x + size, y + size);
    gradient.addColorStop(0, color1);
    gradient.addColorStop(1, color2);
    ctx.fillStyle = gradient;
    drawPolygon(ctx, sides, x, y, size, gradient);
}

// Function to initialize all drawings on the canvas
function init() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Draw a couple polygons
    drawPolygon(ctx, 6, polyX, polyY, polySize, 'blue');
    drawPolygon(ctx, 3, polyX + 200, polyY, polySize, 'green');
    // Draw a gradient polygon
    drawGradientPolygon(ctx, 6, polyX + 400, polyY, polySize, 'red', 'yellow');
}

// Function to change a polygon
function changePolygon() {
    polySize = Math.random() * 100 + 50;
    polyX = Math.random() * 500;
    polyY = Math.random() * 500;
    init();
}

init();
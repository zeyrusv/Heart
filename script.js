const lights = ['red', 'yellow', 'green'];
let currentLightIndex = 0;

function changeLight() {
    // Reset all lights to gray
    lights.forEach(light => {
        document.getElementById(light).className = 'light';
    });

    // Turn on the current light
    const currentLight = lights[currentLightIndex];
    document.getElementById(currentLight).classList.add(currentLight);

    // Move to the next light
    currentLightIndex = (currentLightIndex + 1) % lights.length;

    // Set a random timer between 6 to 9 seconds
    const timer = Math.floor(Math.random() * 4 + 6) * 1000;
    setTimeout(changeLight, timer);
}

// Start the traffic light cycle
changeLight();
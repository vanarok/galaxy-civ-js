import {debugMode, themeSettings} from "../configs";

export function updateDevOverlay(p, planets) {
    planetCoords(p, planets)
}

function planetCoords(p, planets) {
    if (!debugMode) return

    // Draw coords
    for (let i = 0; i < planets.length; i++) {
        const planet = planets[i];
        p.fill('transparent');
        p.stroke(themeSettings.secondaryColor);
        p.rect(Number(planet.x) - 26, Number(planet.y) + 8, 60, 26);
        p.noStroke();
        p.textSize(10);
        p.fill(themeSettings.colorText);
        p.text(`id:${i}`, Number(planet.x) - 10, Number(planet.y) + 18);
        p.text(`x:${planet.x}, y:${planet.y}`, Number(planet.x) - 24, Number(planet.y) + 28);
    }
}

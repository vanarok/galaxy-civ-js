import {graphicsSettings, themeSettings} from "../configs";
import {updateDevOverlay} from "./updateDevOverlay";

let state = {
    fps: 0
}

export function ui(p, state) {
    // TODO: исправить баг когда элементы рендерется за краем экрана
    p.background(themeSettings.backgroundColor);
    p.frameRate(graphicsSettings.fpsLimit);
    updateMap(p, state.systems)
    updateDevOverlay(p, state.systems)
    updateFPS(p)
    updateEpoch(p, state.gameEpoch)
}

function updateMap(p, systems) {
    // Create roads
    for (let i = 0; i < systems.length; i++) {
        const system = systems[i];
        // Draw connections to neighbors
        for (let j = 0; j < system.neighbors.length; j++) {
            const neighborIndex = system.neighbors[j];
            const neighbor = systems[neighborIndex];
            p.stroke(themeSettings.primaryColor);
            p.line(system.x, system.y, neighbor.x, neighbor.y); // Draw a line between the current system and its neighbor
        }
    }
    // Create systems
    for (let i = 0; i < systems.length; i++) {
        const planet = systems[i];
        if (planet.owned) {
            p.fill(planet.owned.color);
            p.ellipse(planet.x, planet.y, planet.radius * 2);
        } else {
            p.fill(planet.color);
        }
    }

}

let prevMillis = 0;

function updateFPS(p) {
    if (p.millis() - prevMillis > 1000) {
        prevMillis = p.millis();
        state.fps = p.frameRate().toFixed(0);
    }
    p.textSize(12); // Размер шрифта.
    p.noStroke();
    p.fill(themeSettings.fpsTextColor);
    p.text('FPS:' + state.fps, 2, 10);
}

function updateEpoch(p, epoch) {
    p.textSize(20); // Размер шрифта.
    p.fill(themeSettings.colorText);
    p.text('Epoch:' + epoch, 50, 80);
}

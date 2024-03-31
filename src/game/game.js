import {
    civilizations,
    numPlanets,
    planetMaxRadius,
    planetMinDistance,
    planetMinRadius,
    planetWayLength
} from "../configs";

export function game(p, state) {
    generateSystems(p, state.systems);
    createCivs(p, state.systems);

    state.gameIsReady = true;
}

// TODO(bug): планеты не должны появляться слишком близко рядом друг с другом, но они появляются
function generateSystems(p, systems) {
    for (let i = 0; i < numPlanets; i++) {
        let x, y, valid = false;
        let maxAttempts = 50; // Ограничитель попыток
        let attempts = 0;

        // Поиск валидных координат планеты
        while (!valid && attempts < maxAttempts) {
            x = p.random(p.width).toFixed();
            y = p.random(p.height).toFixed();
            valid = true;

            for (let other of systems) {
                let distance = p.dist(x, y, other.x, other.y);
                if (distance < planetMinDistance) {
                    valid = false;
                    break;
                }
            }

            attempts++;
        }

        // Прерывание,  если достигнуто максимальное количество попыток
        if (attempts >= maxAttempts) {
            break;
        }

        // Создание планеты
        let radius = p.random(planetMinRadius, planetMaxRadius);
        systems.push({id: i, x, y, radius, color: "white"});

        // Добавление информации о соседних планетах
        let neighbors = findNeighbors(systems, x, y);
        systems[i].neighbors = neighbors;
    }
}

function findNeighbors(systems, x, y) {
    let neighbors = [];
    for (let planet of systems) {
        if (planet.x !== x || planet.y !== y) {
            let distance = Math.sqrt((planet.x - x) ** 2 + (planet.y - y) ** 2);
            if (distance < planetWayLength) {
                neighbors.push(planet.id);
            }
        }
    }
    return neighbors;
}

const getRandomPlanetSystems = (p, planetSystems) => {
    const randomPlanetSystems = [];
    for (let i = 0; i < civilizations.length; i++) {
        randomPlanetSystems.push(p.random(planetSystems));
    }
    return randomPlanetSystems;
};

// TODO: create five civilizations on random planets and paint planets (one civ - one planet)
function createCivs(p, planetSystems) {
    const randomPlanetSystems = getRandomPlanetSystems(p, planetSystems);

    for (let i = 0; i < randomPlanetSystems.length; i++) {
        randomPlanetSystems[i].owned = civilizations[i];
    }
}

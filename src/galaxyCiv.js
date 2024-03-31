import {ui} from "./ui/ui";
import {game} from "./game/game";

let state = {
    gameIsReady: false,
    systems: [],
    gameEpoch: 0
}

let timer = 1000;
let nextChange = timer; //syncs the timer and change rate
export const galaxyCiv = (p) => {
    // Calling p5.js functions, using the variable 'p'
    p.setup = () => {
        p.createCanvas(window.innerWidth, window.innerHeight);
        game(p, state)
    }

    p.draw = () => {
        if (p.millis() > nextChange) {
            state.gameEpoch = state.gameEpoch + 1;
            nextChange = p.millis() + timer;
        }

        ui(p, state)
    }

    p.windowResized = () => {
        p.resizeCanvas(window.innerWidth, window.innerHeight)
    }
}

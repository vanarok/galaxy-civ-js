import chroma from "chroma-js";

export const commonSettings = {}

export const debugMode = false
export const graphicsSettings = {
    fpsLimit: 30
}

export const themeSettings = {
    backgroundColor: 'transparent',
    primaryColor: chroma("gray").hex(),
    secondaryColor: chroma("lightgray").hex(),
    colorText: chroma("gray").hex(),
    colorTextInverted: chroma("white").hex(),
    fpsTextColor: chroma("purple").brighten(1).hex()
}
// TODO: use material colors instead colors
export let civilizations = [
    {
        name: 'Groxes',
        color: chroma("blue").brighten().hex()
    },
    {
        name: 'Cronoses',
        color: chroma("red").brighten().hex()
    },
    {
        name: 'Hades',
        color: chroma("green").brighten().hex()
    },
    {
        name: 'Vulcans', color: chroma("orange").brighten().hex(),
    },
    {
        name: 'Tritons',
        color: chroma("purple").brighten().hex()
    }
];
export let planetMaxRadius = 5;
export let planetMinRadius = 5;
export let planetMinDistance = 100;
export let planetMaxDistance = 320;
export const planetWayLength = 200;
export let epochLength = 1000;
export let numPlanets = 100;

// Import a module that was installed with npm
import p5 from 'p5'
// Import a variable from a JavaScript file from the project folder
import { galaxyCiv } from './galaxyCiv.js'
// Import CSS styles in JavaScript
import './assets/index.css'

// Initialize p5.js
// p5 requires two arguments: new p5(sketch function, target DOM element)
new p5(galaxyCiv, document.getElementById('galaxy-civ'))

// Enable live reload while developing (https://esbuild.github.io/api/#live-reload)
if (process.env.NODE_ENV !== 'production') {
  new EventSource('/esbuild').addEventListener('change', () =>
    location.reload(),
  )
}

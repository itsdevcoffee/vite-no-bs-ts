import 'normalize.css'
import './assets/styles/main.css'

import { setupGameCanvas } from './app'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
	<canvas id="game-canvas"></canvas>
`

setupGameCanvas(document.querySelector<HTMLCanvasElement>('#game-canvas')!)

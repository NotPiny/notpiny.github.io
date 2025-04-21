import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupButton } from './button.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Super Cool Thingy</h1>
    <div class="card">
      <button id="counter" type="button">See Inside</button>
    </div>
    <video id="video" width="320" height="240" style="display:none" src="https://github.com/ShatteredDisk/rickroll/raw/refs/heads/master/rickroll.mp4"></video>
  </div>
`

setupButton(document.querySelector('#counter'))

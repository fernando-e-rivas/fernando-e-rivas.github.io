import "./modules/template7.min.js";
import Perspective from "./components/perspective.js";
import appData from "./db/app-data.js";

window.customElements.define('mr-perspective', Perspective);

const app = document.getElementById('app');
const template = document.getElementById('template');
const compiled = Template7(template.innerHTML).compile();
const compiledRendered = compiled(appData);

app.innerHTML = compiledRendered;
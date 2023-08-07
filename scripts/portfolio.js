import "./modules/template7.min.js";
import Perspective from "./components/perspective.js";
import inabima from "./projects/inabima.js";

window.customElements.define('mr-perspective', Perspective);

const data = {
  projects: [
    inabima,
  ],
};

const app = document.getElementById('app');
const template = document.getElementById('template');
const compiled = Template7(template.innerHTML).compile();
const compiledRendered = compiled(data);

app.innerHTML = compiledRendered;
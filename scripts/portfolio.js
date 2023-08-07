import "./modules/template7.min.js";
import Perspective from "./components/perspective.js";

window.customElements.define('mr-perspective', Perspective);

import projects from "./db/projects.js";

const data = {
  projects,
};

const app = document.getElementById('app');
const template = document.getElementById('template');
const compiled = Template7(template.innerHTML).compile();
const compiledRendered = compiled(data);

app.innerHTML = compiledRendered;
import "./modules/template7.min.js";
import Navbar from "./components/navbar.js";
import inabima from "./projects/inabima.js";

window.customElements.define('mr-navbar', Navbar);

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
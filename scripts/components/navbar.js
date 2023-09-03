const routes = [
  {
    name: "Hoja de Vida",
    url: '/',
    value: 'resume',
  },
  {
    name: "Portafolio",
    url: '/portfolio.html',
    value: 'portfolio',
  },
  {
    name: "Project",
    url: '/project.html',
    value: 'project',
  },
]

export default class Navbar extends HTMLElement {
  constructor() {
    super();
  };

  updateComponent() {
    const current = this.getAttribute(`mr-current-route`);
    
    let links = '';

    routes.forEach(item => {
      links += `
      <li>
        <a ${item.value !== current ? `href="${item.url}"` : '' }>${item.name}</a>
      </li>
      `
    })

    this.innerHTML = `
    <nav>
      <a href="/" class="branding">
        <img src="img/logo.svg" alt="Logo Arcad" />
      </a>
      <ul>
        ${links}
      </ul>
    </nav>
    `;
  };

  connectedCallback() {
    this.updateComponent();
  };

  static get observedAttributes() {
    return [
      'mr-current-route',
    ];
  };

  attributeChangedCallback() {
    this.updateComponent();
  };
}
export default class Perspective extends HTMLElement {
  constructor() {
    super();
  };

  updateComponent() {
    const bgcolor = this.getAttribute(`mr-bgcolor`);
    const position = this.getAttribute(`mr-position`);
    const size = this.getAttribute(`mr-size`);
    const url = this.getAttribute(`mr-url`);

    this.style.backgroundImage = `url("${ url }")`,
    this.style.backgroundPosition = `${ position || "top" }`;
    this.style.backgroundColor = `${ bgcolor || "#444" }`;
    this.style.width = `${ 200 * size || 1 }`;
    this.style.width = `${ 300 * size || 1 }`;
  };

  connectedCallback() {
    this.updateComponent();
  };

  static get observedAttributes() {
    return [
      'mr-bgcolor',
      'mr-position',
      'mr-size',
      'mr-url',
    ];
  };

  attributeChangedCallback(prop) {
    this.updateComponent();
  };
}
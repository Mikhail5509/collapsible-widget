class Collapsible {
  constructor(selector) {
    this.container = document.querySelector(selector);
    this.header = this.container.querySelector('.collapsible-header');
    this.content = this.container.querySelector('.collapsible-content');

    this.init();
  }

  init() {
    this.header.addEventListener('click', () => {
      this.content.classList.toggle('open');
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new Collapsible('.collapsible');
});

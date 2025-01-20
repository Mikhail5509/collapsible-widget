class Collapsible {
  constructor(selector) {
    this.container = document.querySelector(selector);
    this.header = this.container.querySelector('.collapsible-header');
    this.content = this.container.querySelector('.collapsible-content');

    this.init();
  }

  init() {
    this.header.addEventListener('click', () => {
      const isOpen = this.content.classList.contains('open');

      if (isOpen) {
        this.content.classList.remove('open');
      } else {
        this.content.classList.add('open');
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new Collapsible('.collapsible');
});

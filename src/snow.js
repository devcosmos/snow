
export default class Snow {
  icon;

  countSnowflake;
  showSnowflakes;
  $snowflakesBox;

  windowInnerWidth = window.innerWidth;

  constructor(config = {}) {
    const {
      iconColor = '#a6e7ff',
      iconSize = 15,
      icon = `<svg fill="${iconColor}" xmlns="http://www.w3.org/2000/svg" width="${iconSize}px" height="${iconSize}px" viewBox="0 0 50 50"><path d="M24.97-.03A2 2 0 0 0 23 2v4.17l-1.9-1.89a2 2 0 0 0-1.43-.6 2 2 0 0 0-1.39 3.43L23 11.83v9.7l-8.4-4.85-1.74-6.46a2 2 0 0 0-1.9-1.51A2 2 0 0 0 9 11.25l.7 2.6-3.64-2.1a2 2 0 0 0-.95-.28 2 2 0 0 0-1.05 3.75l3.63 2.1-2.57.69a2 2 0 1 0 1.04 3.86l6.43-1.72L21.02 25l-8.41 4.85-6.4-1.72a2 2 0 0 0-.6-.07A2 2 0 0 0 5.18 32l2.53.67-3.64 2.1a2 2 0 1 0 2 3.47l3.63-2.1-.67 2.5a2 2 0 1 0 3.87 1.04l1.7-6.36L23 28.5v9.68l-4.68 4.68a2 2 0 1 0 2.83 2.83L23 43.83V48a2 2 0 1 0 4 0v-4.17l1.88 1.87a2 2 0 1 0 2.82-2.83l-4.7-4.7v-9.7l8.4 4.85 1.74 6.46A2 2 0 1 0 41 38.75l-.7-2.6 3.64 2.1a2 2 0 1 0 2-3.47l-3.64-2.1 2.56-.68a2 2 0 0 0-.5-3.94 2 2 0 0 0-.54.07l-6.41 1.72-8.38-4.83 8.43-4.86 6.38 1.7a2 2 0 1 0 1.03-3.85l-2.5-.68 3.57-2.05a2 2 0 0 0-.91-3.75 2 2 0 0 0-1.1.28l-3.64 2.1.7-2.6a2 2 0 0 0-2.03-2.54 2 2 0 0 0-1.84 1.51l-1.73 6.46L27 21.57v-9.74l4.72-4.72a2 2 0 1 0-2.83-2.83L27 6.18V2a2 2 0 0 0-2.03-2.03z"/></svg>`,
      showSnowflakes = true,
    } = config;

    this.icon = icon;
    this.showSnowflakes = showSnowflakes;
    this.countSnowflake = this.windowInnerWidth > 1024 ? 70 : 30;
  
    this.init();
  }

  init() {
    // CREATE ELEMENTS ON THE PAGE
    this.$snowflakesBox = document.createElement('div');

    this.$snowflakesBox.className = 'snowflakes-box';

    // APPEND ELEMENTS ON THE PAGE
    if (this.showSnowflakes == true) {
      document.body.appendChild(this.$snowflakesBox);
    }

    this.createSnowflakes();
  }

  // CREATE SNOWFLAKES
  createSnowflakes() {
    for (let i = 0; i < this.countSnowflake; i++) {
      const snowflake = document.createElement('span');
      
      snowflake.className = 'snowflake';
      snowflake.innerHTML = this.icon;
      setTimeout(() => {
        this.$snowflakesBox.appendChild(snowflake);
      }, i * 150);
    }
  }
}

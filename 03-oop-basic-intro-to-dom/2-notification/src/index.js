export default class NotificationMessage {
  constructor(name = 'Some title', {
    duration = 1000,
    type = 'success',
    target = document.getElementById('root')
  }) {
    this.name = name;
    this.duration = duration;
    this.type = type;
    this.target = target;
    this.render();
    this.initEventListeners();
  }

  initEventListeners() {

  }

  render() {
    const element = document.createElement('div');

    element.innerHTML = this.template;
    this.element = element.firstElementChild;
  }

  show() {
    if(isActive) {
      this.destroy();
    }

    this.target.append(this.element);
    isActive = true;

    setTimeout(() => {
      this.destroy();
    }, this.duration)
  }

  get template() {
    return `
     <div class="notification ${this.type}" style="--value:${this.duration}ms">
      <div class="timer"></div>
      <div class="inner-wrapper">
        <div class="notification-header">
          ${this.type}
        </div>
        <div class="notification-body">
          ${this.name}
        </div>
      </div>
    </div>
    `;
  }

  remove () {
    this.element.remove();
  }

  destroy() {
    this.remove();
    isActive = null;
  }
}

let isActive = false;

export default class NotificationMessage {
  static isActive;

  constructor(name = 'Some title', {
    duration = 1000,
    type = 'success',
  } = {}) {

    if (NotificationMessage.isActive) {
        NotificationMessage.isActive.remove();
    }

    this.name = name;
    this.duration = duration;
    this.type = type;

    this.render();
  }


  render() {
    const element = document.createElement('div');

    element.innerHTML = this.template;
    this.element = element.firstElementChild;
  }

  show(target = document.body) {
    target.append(this.element);
    NotificationMessage.isActive = this.element;

    setTimeout(() => {
      this.destroy();
    }, this.duration);

    return this.element;
  }

  get template() {
    return `
     <div class="notification ${this.type}" style="--value:${this.duration}ms">
      <div class="timer"></div>
      <div class="inner-wrapper">
        <div class="notification-header">Notification</div>
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
    NotificationMessage.isActive = null;
  }
}


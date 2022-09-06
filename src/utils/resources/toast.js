import {action, observable, makeObservable} from 'mobx';

export default new (class Toast {
  constructor() {
    makeObservable(this, {
      message: observable,
      timeout: observable,
      push: action,
      remove: action,
    });
  }
  message = '';
  timeout = 3000;
  push(message, timeout) {
    this.timeout = timeout || 3000;
    this.message = message || '';
  }
  remove() {
    this.message = '';
    this.timeout = 3000;
  }
})();

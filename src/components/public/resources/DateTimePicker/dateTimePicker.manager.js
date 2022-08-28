import { action, makeObservable, observable } from "mobx"

export const datetimeManager = new (class {
  constructor() {
    makeObservable(this, {
      _status: observable,
      close: action,
      open: action
    })
  }

  _status = false;
  open = () => {
    this._status = true;
  }
  close = () => {
    this._status = false;
  }
})

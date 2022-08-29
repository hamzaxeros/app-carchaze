import {observable, action, makeObservable, runInAction} from 'mobx';
import {colors} from '../../theme';
export default new (class {
  constructor() {
    makeObservable(this, {
      _loading: observable,
      _type: observable,
      _color: observable,
      _platform: observable,
      _loading_dev: observable,

      open: action,
      close: action,
    });
  }

  example = {
    type: {
      box: 'string',
      full: 'string',
    },
    loaderColor: 'string',
    platform: {
      android: 'string',
      ios: 'string',
      native: 'string',
    },
  };
  _loading = false;
  _loading_dev = false;
  _type = 'full';
  _platform = 'native';
  _color = colors.basic_loader_color;

  /**
   * @typedef {object} OpenType
   * @property {'box' | 'full'} [type]
   * @property {string} [loaderColor]
   * @property {'native' | 'android' | 'ios'} [platform]
   */
  /**
   * @function
   * @param {OpenType} [params]
   */
  open = (params) => {
    const {type, loaderColor, platform} = params || {};

    this._type = type || 'full';
    this._color = loaderColor || this._color;
    this._platform = platform || 'native';
    this._loading_dev = true;
    this._loading = true;
  }

  close() {
    this._loading_dev = false;
    setTimeout(() => {
      runInAction(() => {
        this._loading = false;
        this._platform = 'native';
        this._color = colors.basic_loader_color;
        this._type = 'box';
      });
    }, 250);
  }
})();

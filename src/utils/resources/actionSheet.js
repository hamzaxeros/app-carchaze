import {action, observable, makeObservable, runInAction} from 'mobx';
import {colors} from '../../theme';
export default new (class {
  constructor() {
    makeObservable(this, {
      _data: observable,
      _cancelButton: observable,
      _show: observable,
      _cancelButtonText: observable,
      _disabledBackClose: observable,
      _desc: observable,
      _title: observable,
      _cancelButtonColor: observable,

      open: action,
      close: action,
    });
  }

  example = {
    title: 'string',
    desc: 'string',
    cancelButtonText: 'string',
    showCancelButton: Boolean,
    disableBackPress: Boolean,
    cancelButtonColor: 'string',
    data: [
      {
        icon: 'string',
        color: 'string',
        align: 'left', // 'left' | 'right' | 'center'
        customIcon: () => null,
        title: 'string',
        customComponent: () => null,
        onPress: () => null,
      },
    ],
  };
  _data = [];
  _cancelButton = true;
  _cancelButtonText = 'Cancel';
  _disabledBackClose = false;
  _show = false;
  _title = '';
  _desc = '';
  _cancelButtonColor = 'red';

  /**
   * @typedef {object} ActionSheetButtonObj
   * @property {string} [icon] Button Icon as a string from - Ionicons - this will work if customComponent property not passed
   * @property {()=>JSX.Element} [customIcon] Button Icon as a Component 
   * @property {string} title
   * @property {'left' | 'right' | 'center'} [align]
   * @property {()=>JSX.Element} [customComponent]
   * @property {Function} onPress
   */

  /**
   * @typedef {object} OpenTypes
   * @property {string} [desc]
   * @property {string} title
   * @property {string} [cancelButtonText]
   * @property {boolean} [showCancelButton]
   * @property {boolean} [disableBackPress]
   * @property {string} [cancelButtonColor]
   * @property {Array<ActionSheetButtonObj>} buttons
   */

  /**
   * 
   * @param {OpenTypes} [params] 
   */
  open(params) {
    const {
      buttons,
      desc,
      title,
      cancelButtonText = 'Cancel',
      showCancelButton = true,
      disableBackPress = false,
      cancelButtonColor = 'red',
    } = params || {}

    this._data = buttons || [];
    this._show = true;
    this._title = title || '';
    this._desc = desc || '';
    this._cancelButtonColor = cancelButtonColor;
    this._disabledBackClose = disableBackPress;
    this._cancelButtonText = cancelButtonText ;
    this._cancelButton = showCancelButton;
  }
  close() {
    this._show = false;
    setTimeout(() => {
      runInAction(() => {
        this._data = [];
        this._title = '';
        this._desc = '';
        this._cancelButton = true;
        this._cancelButtonText = 'Cancel';
        this._disabledBackClose = false;
        this._cancelButtonColor = colors.error;
      });
    }, 500);
  }
})();

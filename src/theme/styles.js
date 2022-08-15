import _colors from './colors';
import _typography from './typography';

const colors = _colors['default'];
const typography = _typography['default'];

export const globalStyle = {
  mainContainer: {
    backgroundColor: '#F2F2F7',
    height: '100%',
  },
  safeAreaContainer: {
    height: '100%',
    backgroundColor: '#FFF',
  },
  itemSmallHeading: {
    marginLeft: 16,
    marginRight: 16,
    marginTop: 44,
    marginBottom: 10,
    fontFamily: typography.font.s_f_pro.textR,
    fontSize: 13,
    color: 'grey',
    textAlign: 'left',
    backgroundColor: 'transparent',
  },
  fullTopLine: {
    borderTopWidth: 1,
    borderTopColor: colors.basic_border_color,
  },
  fullBottomLine: {
    borderBottomWidth: 1,
    borderBottomColor: colors.basic_border_color,
  },
  fullTopBottomLine: {
    borderBottomWidth: 1,
    borderBottomColor: colors.basic_border_color,
    borderTopWidth: 1,
    borderTopColor: colors.basic_border_color,
  },
  marginL: {
    marginLeft: 16,
  },
  marginR: {
    marginRight: 16,
  },
  marginH: {
    marginHorizontal: 16,
  },
  marginT44: {
    marginTop: 44,
  },
  marginB44: {
    marginBottom: 44,
  },
  marginVT44: {
    marginVertical: 44,
  },
  marginT16: {
    marginTop: 16,
  },
  marginB16: {
    marginBottom: 16,
  },
  marginVT16: {
    marginVertical: 16,
  },
  marginT10: {
    marginTop: 10,
  },
  marginB10: {
    marginBottom: 10,
  },
  marginVT10: {
    marginVertical: 10,
  },
};

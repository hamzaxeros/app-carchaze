import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
  StyleProp,
  TextStyle,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors, typography} from '../../../theme';

/**
 * @typedef {object} TouchableCustomButtonTypes
 * @property {string} title
 * @property {string} [leftIconName] Take icon from Ionicons site - {@link https://ionic.io/ionicons/v4}
 * @property {React.ReactNode} [leftIconComponent]
 * @property {string} [rightIconName]
 * @property {React.ReactNode} [rightIconComponent]
 * @property {"outlined" | "fill" | "transparent"} [theme]
 * @property {boolean} [disabled]
 * @property {string | number } [margin]
 * @property {string | number } [marginH]
 * @property {string | number } [marginT]
 * @property {string | number } [marginB]
 * @property {string | number } [marginR]
 * @property {string | number } [marginL]
 * @property {string | number } [marginV]
 * @property {boolean} [noRadius]
 * @property {TextStyle} [textStyle]
 * @property {string | number} [height]
 * @property {string | number} [width]
 *
 * @typedef {TouchableOpacityProps & TouchableCustomButtonTypes} TouchableButtonTypes
 */

/**
 * @param {TouchableButtonTypes} props
 * @returns {JSX.Element}
 */
const TouchableButton = props => {
  const {
    leftIconComponent,
    leftIconName,
    children,
    title = '',
    rightIconComponent,
    rightIconName,
    theme = 'fill',
    disabled = false,
    margin,
    marginH,
    marginV,
    marginL,marginR,marginT,marginB,
    noRadius = false,
    textStyle,
    height,
    width
  } = props;

  const textColor =
    theme === 'fill'
      ? '#fff'
      : disabled
      ? colors.disabled_color
      : colors.basic_color;

  const customStyle = {
    marginLeft: marginL,
    marginRight:marginR,
    marginTop:marginT,
    marginBottom:marginB,
    marginHorizontal: marginH,
    marginVertical: marginV,
    margin: margin,
    borderRadius: noRadius ? 0 : 8,
    height: height || 50,
    width,
    backgroundColor:
      theme === 'outlined' || theme === 'transparent'
        ? 'transparent'
        : disabled
        ? colors.disabled_color
        : colors.basic_color,
    borderColor:
      theme === 'fill' || theme === 'outlined'
        ? disabled
          ? colors.disabled_color
          : colors.basic_color
        : 'transparent',
  };
  const textCustomStyle = {
    color: textColor,
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      {...props}
      style={{
        ...styles.containerOfTouchableOpacity,
        ...customStyle,
        // @ts-ignore
        ...props.style,
      }}
    >
      {leftIconComponent ||
        (leftIconName && (
          <Ionicons
            name={leftIconName}
            style={{...styles.leftIcon, ...textCustomStyle}}
          />
        ))}
      {children || (
        <Text style={{...styles.buttonTitle, ...textCustomStyle, ...textStyle}}>
          {title}
        </Text>
      )}
      {rightIconComponent ||
        (rightIconName && (
          <Ionicons
            name={rightIconName}
            style={{...styles.rightIcon, ...textCustomStyle}}
          />
        ))}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerOfTouchableOpacity: {
    backgroundColor: colors.basic_color,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    borderWidth: 1,
  },
  buttonTitle: {
    color: '#FFF',
    fontFamily: typography.font.s_f_pro.textS,
    fontSize: typography.size.font.md,
    textAlign: 'center',
  },
  leftIcon: {
    fontSize: typography.size.font.md + 2,
    marginRight: 8,
  },
  rightIcon: {
    fontSize: typography.size.font.md + 2,
    marginLeft: 8,
  },
});

export default TouchableButton;

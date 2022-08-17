import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  TouchableOpacityProps,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {Icons} from '..';
import {colors, effects, globalStyle, typography} from '../../../theme';

/**
 * @typedef {object} SingleRowPresserType
 * @property {'full' | "with-margin" | 'none'} [lineTop] Default - none
 * @property {'full' | "with-margin" | 'none'} [lineBottom] Default - none
 * @property {'right' | 'bottom' | 'none' | 'top' | 'left'} [arrow] Default - right
 * @property {string} [leftIcon]
 * @property {string} [leftText]
 * @property {React.ReactNode} [leftComponent]
 * @property {StyleProp<TextStyle>} [leftIconStyle]
 * @property {StyleProp<TextStyle>} [leftTextStyle]
 * @property {StyleProp<ViewStyle>} [contentContainerStyle]
 * @property {React.ReactNode} [rightComponent]
 * @property {string} [rightText]
 * @property {string} [leftTextColor] Default - #000
 * @property {string} [rightTextColor] Default - #000
 * @property {number} [leftTextSize]
 * @property {number} [minHeight] Default - 44
 *
 *
 * @typedef {TouchableOpacityProps & SingleRowPresserType} SingleRowPresserIProps
 */

/**
 * @param {SingleRowPresserIProps} props
 * @returns
 */
const SingleRowPresser = props => {
  const {
    lineTop = 'none',
    lineBottom = 'none',
    arrow = 'right',
    leftIcon,
    leftText,
    leftTextSize = typography.size.font.md,
    leftTextColor = '#000',
    rightTextColor = '#000',
    leftComponent,
    leftIconStyle,
    leftTextStyle,
    contentContainerStyle,
    rightText,
    rightComponent,
    minHeight = 44,
  } = props;

  const customContainer = {
    minHeight: minHeight,
    borderBottomWidth:
      lineBottom === 'full' ? typography.size.border.height : undefined,
    borderTopWidth:
      lineTop === 'full' ? typography.size.border.height : undefined,
  };
  const topBorder = {
    ...(lineTop === 'with-margin' ? globalStyle.marginL : {}),
  };
  const bottomMargin = {
    ...(lineBottom === 'with-margin' ? globalStyle.marginL : {}),
  };
  const customLeftTextStyle = {
    color: leftTextColor,
    fontSize: leftTextSize,
  };
  const rightTextStyle = {
    color: rightTextColor,
  };

  return (
    <View
      style={{
        ...styles.container,
        ...customContainer,
        // @ts-ignore
        ...contentContainerStyle,
      }}
    >
      {lineTop === 'with-margin' ? (
        <View style={{...styles.borderWithMargin, ...topBorder}} />
      ) : (
        <></>
      )}
      <TouchableOpacity
        {...props}
        // @ts-ignore
        style={{...styles.touchContainer, ...props.style, minHeight}}
        activeOpacity={effects.touchable_opacity}
      >
        <View style={styles.leftView}>
          {leftIcon ? (
            <IonIcons
              name={leftIcon}
              style={[styles.leftIconStyle, leftIconStyle]}
            />
          ) : (
            <></>
          )}
          {leftComponent ||
            (leftText ? (
              <Text
                style={[styles.leftText, customLeftTextStyle, leftTextStyle]}
              >
                {leftText}
              </Text>
            ) : (
              <></>
            ))}
        </View>
        <View style={styles.rightView}>
          {rightComponent ||
            (rightText ? (
              <Text style={{...styles.rightText, ...rightTextStyle}}>
                {rightText}
              </Text>
            ) : (
              <></>
            ))}
          {arrow !== 'none' ? (
            <Icons.Arrow style={styles.rightArrow} iconDirection={arrow} />
          ) : (
            <></>
          )}
        </View>
      </TouchableOpacity>
      {lineBottom === 'with-margin' ? (
        <View style={{...styles.borderWithMargin, ...bottomMargin}} />
      ) : (
        <></>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: colors.basic_border_color,
    backgroundColor: '#fff',
  },
  touchContainer: {
    paddingHorizontal: 16,
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  borderWithMargin: {
    height: typography.size.border.height,
    backgroundColor: colors.basic_border_color,
  },
  leftText: {
    textAlign: 'left',
    color: '#000',
    fontFamily: typography.font.s_f_pro.textR,
  },
  leftView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  rightView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  rightText: {
    fontSize: 14,
    textAlign: 'right',
    color: '#000',
    fontFamily: typography.font.s_f_pro.textR,
  },
  rightArrow: {
    marginLeft: 6,
  },
  leftIconStyle: {
    marginRight: 6,
    fontSize: 17,
  },
});

export default SingleRowPresser;

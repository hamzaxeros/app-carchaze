import React from 'react';
import {colors, typography} from '../../../../theme';

/**
 * @typedef {object} InputType
 * @property {boolean} [ml_t_border] Top border Enable margin left - Default False
 * @property {number} [cml_t_border] Enable Top border Margin left with custom margin
 * @property {number} [cml_b_border] Enable Bottom border Margin left with custom margin
 * @property {boolean} [ml_b_border] Bottom border Enable margin left - Default False
 * @property {string} [heading] Default - Undefined
 * @property {React.CSSProperties} [headingStyle] Custom styling Header Text
 * @property {boolean} [dimHeading] Default - False
 * @property {boolean} [mt_heading] Setting heading margin Top - Default False,
 * @property {boolean} [mb_heading] Setting heading margin Bottom - Default False,
 * @property {boolean} [mr_heading] Setting heading margin Right - Default False,
 * @property {boolean} [ml_heading] Setting heading margin Left - Default False,
 * @property {number} [cmt_heading] Setting Custom margin Top for heading,
 * @property {number} [cmb_heading] Setting Custom margin Bottom for heading,
 * @property {number} [cmr_heading] Setting Custom margin Right for heading,
 * @property {number} [cml_heading] Setting Custom margin Left for heading,
 * @property {number} [cmb_input_view] Setting custom Margin Bottom for Input View only
 * @property {number} [cmt_input_view] Setting custom Margin Top for Input View only
 * @property {number} [cml_input_view] Setting custom Margin Left for Input View only
 * @property {number} [cmr_input_view] Setting custom Margin Right for Input View only
 * @property {string} [leftTitle] Input left title like placeholder alternative
 * @property {number} [leftTitleWidth] Width of left title - Default 100
 * @property {string} [leftTitleColor] Color of width - Default #000
 * @property {number} [leftTitleFontSize] Font size of left title - Default 17
 * @property {number} [inputFontSize] Font size of Text Input - Default 17
 * @property {boolean} [multiline] To access as textarea input
 *
 *
 * @typedef {React.InputHTMLAttributes<HTMLInputElement> & {options: InputType}} InputIProps
 *
 */

/**
 * Make sure you pass the options parameter must even if you don't wanna use option just empty object like; - options={{}}
 * @param {InputIProps} props
 * @returns
 */
const Input = props => {
  const {
    leftTitle,
    leftTitleWidth = 100,
    leftTitleColor = '#000',
    leftTitleFontSize = typography.size.font.md,
    inputFontSize = typography.size.font.md,
    dimHeading,
    heading,
    headingStyle,
    mt_heading,
    mb_heading,
    mr_heading,
    ml_heading,
    cmt_heading,
    cmb_heading,
    cml_heading,
    cmr_heading,

    cmb_input_view,
    cmt_input_view,
    cml_input_view,
    cmr_input_view,

    ml_t_border,
    cml_t_border,
    cml_b_border,
    ml_b_border,
  } = props?.options || {};

  const headingTextStyle = {
    marginLeft: cml_heading || ml_heading ? 16 : undefined,
    marginRight: cmr_heading || mr_heading ? 16 : undefined,
    marginTop: cmt_heading || mt_heading ? 44 : undefined,
    marginBottom: cmb_heading || mb_heading ? 10 : undefined,
    fontFamily: dimHeading ? 'text-r' : 'text-s',
    fontSize: 13,
    color: dimHeading ? 'grey' : '#000',
    backgroundColor: 'transparent',
  };
  const inputWrapper = {
    marginTop: cmt_input_view,
    marginBottom: cmb_input_view,
    marginLeft: cml_input_view,
    marginRight: cmr_input_view,
    backgroundCOlor:'#fff',
  };
  const customTopBorderStyle = {
    marginLeft: cml_t_border || 16,
  };
  const customBottomBorderStyle = {
    marginLeft: cml_b_border || 16,
  };
  const inputWrapperView = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: props.options.multiline !== undefined ? 'flex-start' : 'center',
    backgroundColor: '#fff',
    borderColor: colors.basic_border_color,
  };
  const leftTitleStyle = {
    fontSize: leftTitleFontSize,
    color: leftTitleColor,
    marginLeft: 16,
    paddingTop: props.options.multiline !== undefined ? 9 : undefined,
    marginRight: 0,
    fontFamily: 'text-r',
    width: leftTitleWidth,
  };
  const textInputStyle = {
    border:'none',
    fontSize: inputFontSize,
    color: '#000',
    fontFamily: 'text-r',
    marginLeft: 0,
    paddingRight: 16,
    height: props.options.multiline ? 300: 44,
    flex: 1,
    paddingLeft: leftTitle ? undefined : 16,
    minHeight: props.options.multiline ? 44 : undefined,
    maxHeight: props.options.multiline ? 150 : undefined,
    paddingTop: props.options.multiline ? 10 :0,
    paddingBottom: props.options.multiline ? 10 :0
  };

  return (
    <div>
      {/* Heading */}
      {heading !== undefined ? (
        <p
          style={{
            ...headingTextStyle,
            ...headingStyle,
            
          }}
        >
          {heading}
        </p>
      ) : null}

      {/* Input Wrapper */}
      <div style={inputWrapper}>
        {/* Border Top */}
        {ml_t_border || cml_t_border ? (
          <div className='input--borderingStyle' style={{ ...customTopBorderStyle }} />
        ) : null}
        <div
          // @ts-ignore
          style={inputWrapperView}
        >
          {leftTitle ? <p style={leftTitleStyle}>{leftTitle}</p> : null}
          <input
            {...props}
            style={{
              ...textInputStyle,
              // @ts-ignore
              ...props.style,
            }}
          />
        </div>
        {/* Border Bottom */}
        {ml_b_border || cml_b_border ? (
          <div className='input--borderingStyle' style={{ ...customBottomBorderStyle }} />
        ) : null}
      </div>
    </div>
  );
};


export default Input;

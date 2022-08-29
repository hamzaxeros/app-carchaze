import React from 'react';
import LottieView from 'react-lottie';
import { colors } from './../../../../theme';
import IosLoaderData from "./../../../../assets/json/iosRedLoader.json";


/**
 * @typedef {object} IosLoaderType
 * @property {number} [size]
 * @property {React.CSSProperties | {}} [style]
 * @property {string} [color]
 * @property {number} [speed]
 */

/**
 * @function
 * @param {IosLoaderType} props
 * @return {JSX.Element}
 */
const IosLoader = ({
  size = 30,
  style = {},
  color = colors.basic_loader_color,
  speed,
}) => {
  return (
    <>
      <LottieView
        options={{
        loop: true,
        autoplay: true,
        animationData: IosLoaderData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      }}
      height={size}
      width={size}
        style={{
          ...{width: size, height: size},
          ...(style || {}),
        }}
        speed={speed || 4}
        // resizeMode="contain"
        // autoPlay={true}
        // autoSize={false}
        // loop={true}
        // colorFilters={[
        //   {
        //     keypath: 'top',
        //     color: color,
        //   },
        //   {
        //     keypath: 'top-left',
        //     color: color,
        //   },
        //   {
        //     keypath: 'left',
        //     color: color,
        //   },
        //   {
        //     keypath: 'bottom-left',
        //     color: color,
        //   },
        //   {
        //     keypath: 'bottom',
        //     color: color,
        //   },
        //   {
        //     keypath: 'bottom-right',
        //     color: color,
        //   },
        //   {
        //     keypath: 'right',
        //     color: color,
        //   },
        //   {
        //     keypath: 'top-right',
        //     color: color,
        //   },
        // ]}
      />
    </>
  );
};

export default IosLoader;



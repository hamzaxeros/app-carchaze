import React from 'react';
import {observer} from 'mobx-react';
import {loader, platform  } from '../../../../utils';
import {colors, effects} from "../../../../theme"
// import {useAnimate} from '../../../../hooks';
import IosLoader from './IosLoader';
import AndroidLoader from './AndroidLoader';

const Loader = observer(() => {
  const isBoxType = loader._type === 'box' ? true : false;
  // const Fade = useAnimate.fade();
  const AndroidLoaderComponent = () => {
    return <AndroidLoader size={isBoxType ? 60 : 80} color={loader._color} />;
  };
  const IosLoaderComponent = () => {
    return <IosLoader size={isBoxType ? 35 : 47} color={loader._color} />;
  };

  // React.useEffect(() => {
  //   if (loader._loading_dev) {
  //     Fade.start();
  //   } else {
  //     Fade.reverse();
  //   }
  // }, [loader._loading_dev]);
  return (
    <>
      {loader._loading ? (
        <>
          <div
            className='loader--backContainer'
            style={{
              ...{
                backgroundColor: isBoxType
                  ? colors.modal_sheet_bg_color
                  : colors.modal_sheet_light_bg_color,
                // opacity: Fade.value,
              },
            }}
          />
          <div className='loader--backContainer'>
            <div
              className='loader--frontContainer'
              style={{
                ...{
                  backgroundColor: isBoxType
                    ? colors.popup_dark_color          
                    : 'transparent',
                  width: isBoxType ? 250 : undefined,
                  height: isBoxType ? 160 : undefined,
                  borderRadius: isBoxType ? 15 : undefined,
                  ...(isBoxType ? effects.popup_shadow : {}),
                },
              }}>
              {loader._platform === 'native' ? (
                <>
                  {!(platform.OS() === "OS X" || platform.OS() === "iOS") ? (
                    <AndroidLoaderComponent />
                  ) : (
                    <IosLoaderComponent />
                  )}
                </>
              ) : loader._platform === 'android' ? (
                <AndroidLoaderComponent />
              ) : (
                <IosLoaderComponent />
              )}
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
});

export default Loader;

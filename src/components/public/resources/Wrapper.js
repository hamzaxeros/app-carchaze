import React from 'react';
import {observer} from 'mobx-react';
// import { cameraWrapper } from '../../utils';

const Wrapper = observer(() => {
  return (
    <>
      {/* {cameraWrapper._visibility && (
        <div style={styles.container}>
          <cameraWrapper._children />
        </div>
      )} */}
    </>
  );
});

const styles = {
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
}

export default Wrapper;

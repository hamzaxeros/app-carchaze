/**
 * VehiclePhotos
 * @module 🔗:src/pages/Host/Manager/Basic/VehiclePhotos/VehiclePhotos.jsx
 * 
 * @author Meer Mustan <mustan@carchaze.com>
 * @copyright CarChaze 2022
 * @version 0.2.0
 * @description Host Listed Vehicle Photots
 * 
 */

import React from "react";
import Button from "../../../../../components/public/resources/Button/Button";

const VehiclePhotos = (props) => {


  return (
    <React.Fragment>
      <div className="VehiclePhotos-outer mv-44">
        <div className="VehiclePhotos-content">
            <div className="VehiclePhotos-main_outer"></div>
            <div className="VehiclePhotos-photos">
              <div className="VehiclePhotos-photo"></div>
              <div className="VehiclePhotos-photo"></div>
              <div className="VehiclePhotos-photo"></div>
              <div className="VehiclePhotos-photo"></div>
              <div className="VehiclePhotos-photo"></div>
            </div>
        </div>
        <div className="VehiclePhotos-footer mt-44">
          <Button title={"Add photo"} />
        </div>

      </div>
    </React.Fragment>
  )
}

export default VehiclePhotos;
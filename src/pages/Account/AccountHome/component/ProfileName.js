/**
 * ProfileName
 * @module 🔗:src/pages/Account/component/ProfileName.js
 * 
 * @author Hamza Hussain <hamza@carchaze.com>
 * @version app.carchaze.com@0.1.0
 * @description Account profile row
 * 
 */
import React from 'react';
import dayjs from "dayjs"
import { Img } from 'react-image';

/**
 * @typedef {object} ProfileNameType
 * @property {string | string[]} imgSrc
 * @property {string} joinedDate
 * @property {number | string} totalTrips
 * @property {string} name
 * @typedef {React.HTMLProps & ProfileNameType} ProfileNameIProps
 */

/**
 * @param {ProfileNameIProps} props
 * @returns
 */
const ProfileName = (props) => {
  const {imgSrc, joinedDate, name, totalTrips} = props;

  return (
    <div className='account--profile_name--container'>
      {imgSrc ? (
        <Img src={imgSrc} className="account--profile_name--image" />
      ) : (
        <i  className="las la-user-circle account--profile_name--icon" />
      )}
      <div className='account--profile_name--rightView'>
        <p className='account--profile_name--nameText'>{name}</p>
        <p className='account--profile_name--joinedText'>Joined {dayjs(joinedDate).format('MMM YYYY')}</p>
        <p className='account--profile_name--tripText'>({totalTrips}) trips</p>
      </div>
    </div>
  );
}
export default ProfileName;



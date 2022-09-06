import {httpsCallable} from 'firebase/functions';
// import {colors} from '../../theme';
// import {loader} from '../../utils';
import {signInWithCustomToken, signOut, UserCredential} from 'firebase/auth';
import {getFirebaseAuth,getFirebaseFunction} from "./../../firebase"

/**
 * Send the OTP code to desired phone number
 *
 * @version 0.1.0
 * @function
 * @param {string} number
 * @param {'sms' | 'call'} [service]
 * @return {Promise<{status:(string|null) | string} | null>}
 */
export const signWithPhoneNumber = async (number, service) => {
  try {
    /** @type {any} */
    const func = await httpsCallable(getFirebaseFunction,'sendPhoneNumberOtp')({
      number,
      service,
    });
    return func.data;
  } catch (error) {
    // log.error(error.message);
    return null;
  }
};

/**
 * Verify the OTP code & Authenticate with custom of the desired phone number
 *
 * @version 0.1.0
 * @function
 * @param {string} number
 * @param {string} code
 * @param {string} deviceId
 * @param {'transfer'| 'auth'} [type]
 * @return {Promise<UserCredential | null>}
 */
export const verifyPhoneOtpAndAuthenticate = async (
  number,
  code,
  deviceId,
  type = 'auth',
) => {
  try {
    const func = await httpsCallable(getFirebaseFunction,'verifyPhoneNumberOtp')({
      number,
      code,
      device_id: deviceId,
      type,
    });
    /** @type {any} */
    const response = func.data;

    console.log(response)

    if (response?.codeStatus !== 'approved') {
      // toast.push('Your verification code is incorrect');
      window.alert("Your verification code is incorrect")
      console.log(response?.codeState)
      return null;
    }
    if (!response?.token) {
      // alertBox.push({
      //   title: 'Server Error',
      //   desc:
      //     'Sorry for the delay, We have some issues on our server side soon we will fix it. Report this error to Carchaze support',
      //   buttons: [{title: 'Report', onPress: id => alertBox.close(id)}],
      // });
      window.alert("Sorry for the delay, We have some issues on our server side soon we will fix it. Report this error to Carchaze support")
      return null;
    }
    if (type === 'transfer') {
      await signOut(getFirebaseAuth);
    }
    const signInResponse = await signInWithCustomToken(getFirebaseAuth,response?.token);

    return signInResponse;


  } catch (error) {
    // log.error(error.message);
    return null;
  }
};

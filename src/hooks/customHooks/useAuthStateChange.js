import {useEffect, useState} from 'react';
import {  onAuthStateChanged, User } from 'firebase/auth';
import {getFirebaseAuth,  } from "./../../firebase"

/**
 * To get authentication state change from firebase auth pkg
 *
 * @return {{loading: boolean, status: boolean, user: (User | null)}}
 *
 * @example
 * import React from 'react';
 * import useAuthStateChange from './useAuthStateChange';
 * 
 * const AuthComponent = () => {
 *   const {loading, user, status} = useAuthStateChange();
 * 
 *   return (
 *     <div>
 *       {loading ? (
 *         <p>Loading...</p>
 *       ) : status ? (
 *         <div>
 *           <p>You are Logged In</p>
 *           <p>{JSON.stringify(user)}</p>
 *         </div>
 *       ) : (
 *         <p>You are Logged Out</p>
 *       )}
 *     </div>
 *   );
 * };
 */
const useAuthStateChange = () => {
  const [loginStatus, ToggleLoggedInStatus] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    onAuthStateChanged(getFirebaseAuth, user => {
      if (user) {
        // @ts-ignore
        ToggleLoggedInStatus(true);
        // @ts-ignore
        setUserInfo(user);
      } else {
        // @ts-ignore
        ToggleLoggedInStatus(false);
        // @ts-ignore
        setUserInfo(user);
      }
    })
    
  }, []);

  return {
    loading: loginStatus === null ? true : false,
    status: loginStatus === true ? true : false,
    user: userInfo,
  };
};

export default useAuthStateChange;

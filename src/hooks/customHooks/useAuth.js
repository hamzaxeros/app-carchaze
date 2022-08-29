import { useEffect, useState } from "react";
import { getAuth, User } from "firebase/auth";
/**
 * To get authentication user info & status from firebase auth pkg
 *
 * @return {{status: boolean, user: (User | null)}}
 *
 * @example
 * import React from 'react';
 * import {View, Text} from 'react-native';
 * import useAuth from './useAuth';
 *
 * const AuthComponent = () => {
 *   const {user, status} = useAuth();
 *
 *   return (
 *     <div>
 *       {status ? (
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
const useAuth = () => {
	return {
		status: getAuth().currentUser?.uid ? true : false,
		user: getAuth().currentUser,
	};
};

export default useAuth;

// import {useEffect, useState} from 'react';
// import firestore from '@react-native-firebase/firestore';
// import {loader, navManager} from '../../utils';
// import useAuth from './useAuth';

// const useCheckCNICName = () => {
//   const {user, status} = useAuth();
//   const [nameStatus, setNameStatus] = useState(false);

//   /** Check that have this user already added there name or not */
//   const _haveAddedName = async () => {
//     const userDoc = firestore().collection('users').doc(user?.uid);
//     loader.open({type: 'box'});
//     const response = await userDoc.get();
//     // @ts-ignore
//     const fName = response.data()?.first_name;
//     // @ts-ignore
//     const lName = response.data()?.last_name;
//     if (fName && lName) {
//       setNameStatus(false);
//       // navManager.navigate(props, '/new-user');
//     } else {
//       setNameStatus(true);
//     }
//     loader.close();
//   };

//   useEffect(() => {
//     if (status) {
//       _haveAddedName();
//     }
//   }, [nameStatus]);

//   return {newNameScreen: nameStatus};
// };
// export default useCheckCNICName;

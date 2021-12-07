
// const firebaseConfig = {
//   apiKey: "AIzaSyB5-amIgctm_BZkbdkLIhIrYE9M_xtXQp0",
//   authDomain: "clone-1daef.firebaseapp.com",
//   projectId: "clone-1daef",
//   storageBucket: "clone-1daef.appspot.com",
//   messagingSenderId: "384498684874",
//   appId: "1:384498684874:web:c80dedf11093d62ae4f533",
//   measurementId: "G-0FMHF09RD6"
// };

//   const firebaseApp = firebase.initializeApp(firebaseConfig);

//   const db = firebaseApp.firestore();
//   const auth = firebase.auth();
  
//   export { db, auth };


import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyB5-amIgctm_BZkbdkLIhIrYE9M_xtXQp0",
  authDomain: "clone-1daef.firebaseapp.com",
  projectId: "clone-1daef",
  storageBucket: "clone-1daef.appspot.com",
  messagingSenderId: "384498684874",
  appId: "1:384498684874:web:c80dedf11093d62ae4f533",
  measurementId: "G-0FMHF09RD6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = firebase.auth()

export { db, auth };
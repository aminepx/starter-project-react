import firebase from 'firebase/app'
import 'firebase/auth'
// Your web app's Firebase configuration
var firebaseConfig = {
   
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const app = firebase.initializeApp(firebaseConfig);

  export default fireDB;
  export const auth=app.auth();
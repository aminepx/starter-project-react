import firebase from 'firebase/app'
import 'firebase/auth'
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCO0MJarbb40vnbJgG0rDYpO0eCWDarWHg",
  authDomain: "lms-appp.firebaseapp.com",
  databaseURL: "https://lms-appp-default-rtdb.firebaseio.com",
  projectId: "lms-appp",
  storageBucket: "lms-appp.appspot.com",
  messagingSenderId: "1071683555867",
  appId: "1:1071683555867:web:0dd9511aaf15640f7a9ebe"
  };

  const app = firebase.initializeApp(firebaseConfig);

  export default app;
  export const auth=app.auth();
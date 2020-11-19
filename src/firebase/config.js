import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCgokrqtIhgGyMtsCKQOFAIAZep5SSTTsg",
    authDomain: "reactnativefirebase-f7de2.firebaseapp.com",
    databaseURL: "https://reactnativefirebase-f7de2.firebaseio.com",
    projectId: "reactnativefirebase-f7de2",
    storageBucket: "reactnativefirebase-f7de2.appspot.com",
    messagingSenderId: "546845979990",
    appId: "1:546845979990:web:3690975a93e70e50b7d2f7",
    measurementId: "G-KCD1BQ77F5"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
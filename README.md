# React-native-firebase

Simplified Firebase authentication for React Native projects with Registration, login, read and write.

## Features
* Registration with email & password
* Login with emil and Password
* Handling persisted login credentials
* Navigation (react-native-navigation)
* Writing to Firestore Database
* Reading from Firestore Database
* Creating Firestore indices (for performance)

## How to use?

1. Clone this repo
```
git clone https://github.com/jaihan/react-native-firebase.git

```
2. Install dependenices

```
yarn install 
```
3. Go to src/firebase/config.js and replace FIREBASE_CONFIG with your own firebase config.
```
const firebaseConfig = {
    apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    authDomain: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    databaseURL: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    projectId: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    storageBucket: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    messagingSenderId: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    appId: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    measurementId: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
};
```
4. Run the project using expo
```
expo start
```





const prodConfig = {
    apiKey: 'AIzaSyDTU9y5XrGV7PzxPhh2SjOw0n5O4rVFPTQ',
    authDomain: 'egj-start.firebaseapp.com',
    databaseURL: 'https://egj-start.firebaseio.com',
    projectId: 'egj-start',
    storageBucket: 'egj-start.appspot.com',
    messagingSenderId: '482975891403',
    appId: '1:482975891403:web:b67a092381fcf3e714804e',
    measurementId: 'G-Z12GPJM2D0'
};

const devConfig = {
    apiKey: 'AIzaSyDTU9y5XrGV7PzxPhh2SjOw0n5O4rVFPTQ',
    authDomain: 'egj-start.firebaseapp.com',
    databaseURL: 'https://egj-start.firebaseio.com',
    projectId: 'egj-start',
    storageBucket: 'egj-start.appspot.com',
    messagingSenderId: '482975891403',
    appId: '1:482975891403:web:b67a092381fcf3e714804e',
    measurementId: 'G-Z12GPJM2D0'
};

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

export default config;

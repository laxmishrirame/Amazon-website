

import { initializeApp } from 'firebase/app';
import { getAuth} from 'firebase/auth';


const firebaseApp = initializeApp({  

    apiKey: "AIzaSyAWWqR5NFPaw-_70fuYYE31jT9UsAARYPg",
    authDomain: "fir-b6011.firebaseapp.com",
    projectId: "fir-b6011",
    storageBucket: "fir-b6011.appspot.com",
    messagingSenderId: "618294940565",
    appId: "1:618294940565:web:3e15687056803635b79c9c",
    measurementId: "G-3VVM8SL1DM"
});



const auth = getAuth();

export { auth };
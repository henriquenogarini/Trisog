import { initializeApp } from "firebase/app"
import { getAuth, Auth } from "firebase/auth"

const firebaseConfig = {

  apiKey: "AIzaSyBt_63SVVueJJH6VRNEcf51KsfcjSQWrq0",

  authDomain: "travelling-c5077.firebaseapp.com",

  projectId: "travelling-c5077",

  storageBucket: "travelling-c5077.appspot.com",

  messagingSenderId: "683974587285",

  appId: "1:683974587285:web:e7057bcfa56777a1c43c9c"

}


const app = initializeApp(firebaseConfig)
export const auth: Auth = getAuth(app)
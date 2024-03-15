import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

    apiKey: "AIzaSyDRZ46OuRQU_KmihKvkQaN7ttMFz3VrUiI",  
    authDomain: "reactfirebasetrial-b1055.firebaseapp.com",  
    projectId: "reactfirebasetrial-b1055",  
    storageBucket: "reactfirebasetrial-b1055.appspot.com",  
    messagingSenderId: "399566842288",  
    appId: "1:399566842288:web:30f272dc9b07f073278e75"  
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  const db =getFirestore(app);

  export{app};
  export{auth};
  export{db};
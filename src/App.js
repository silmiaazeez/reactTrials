import './App.css';
import { useState } from 'react';
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword,signOut } from "firebase/auth";
import { auth } from './config';

function App() {
    const signUp=() => {
       createUserWithEmailAndPassword(auth, username, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user.email);
          setUser(user);
          console.log(user);
         // console.log(auth.name);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode,errorMessage)
        });
  }

  const login=() => {
       signInWithEmailAndPassword(auth, loginUsername, loginPassword)
        .then((userCredential) => {
          const user = userCredential.user;
          setUser(user);
          console.log(user.email);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode,errorMessage)
        });
  }

  const logout=() => {
     signOut(auth)
        .then(() => {
          setUser("");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode,errorMessage)
        });
  }
 
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const [loginUsername,setLoginUsername]=useState("");
  const [loginPassword,setLoginPassword]=useState("");
  const [user,setUser]=useState("");

  return (
    <div className="App">
      {user ? <div>  <h1>{user.email}</h1> 
                    <button  className="App-button1" onClick={logout}> 
                        Log Out
                      </button>
               </div>
      :
      <div>    
      <div className="App-signup">  
      <h1>SignUp</h1>     
        <div >
         <input type="text" placeholder='Username' onChange={(e) => setUsername(e.target.value)} />
         </div><div>
         <input type="text" placeholder='Password'  onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button  className="App-button1" onClick={(signUp)}>
          Sign Up
        </button>
      </div>
      <div className="App-login">  
      <h1>Login</h1>     
        <div >
         <input type="text" placeholder='Username' onChange={(e) => setLoginUsername(e.target.value)} />
        </div><div>
         <input type="text" placeholder='Password'  onChange={(e) => setLoginPassword(e.target.value)} />
        </div>
        <button  className="App-button2" onClick={(login)}>
         Login
        </button>
      </div>
    </div>
    }
    </div>
  );
}

export default App;

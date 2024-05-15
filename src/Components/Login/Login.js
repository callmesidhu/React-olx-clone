import React, { useContext, useState } from 'react';
import Logo from '../../olx-logo.png';
import './Login.css';
import { FirebaseContext } from '../../store/firebaseContext';
import { useHistory } from 'react-router-dom';


export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const history = useHistory()
  const {firebase} = useContext(FirebaseContext)
  const handleLogin = (e)=>{
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
      history.push("/")
    }).catch((error)=>{
      alert(error.message)
    })
  }

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo} alt='' ></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            onChange={(e)=>setEmail(e.target.value)}
            name="email"
            defaultValue=""
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            onChange={(e)=>setPassword(e.target.value)}
            name="password"
            defaultValue=""
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a href='/signup'>Signup</a>
      </div>
    </div>
  );
}



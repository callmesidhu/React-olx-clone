import React, { useContext, useState } from 'react';
import Logo from '../../olx-logo.png';
import './Login.css';
import { FirebaseContext } from '../../store/Context';
import { useHistory } from 'react-router-dom';


export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const history = useHistory()
  const {firebase} = useContext(FirebaseContext)
  const handleLogin = (e)=>{
    e.preventDefault();

    if (!email || !password ) {
      alert("All fields are required!");
      return;
    }

    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
      history.push("/home")
    }).catch((error)=>{
      alert("Login Failed!!!")
    })
  }

  return (
    <div>
      <div className="loginParentDiv">
        
        <form onSubmit={handleLogin}>
        <img width="200px" height="200px" src={Logo} alt='' ></img>
        <br/>
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
        <a href='/signup' style={{color:'black'}}>Signup</a>
      </div>
    </div>
  );
}



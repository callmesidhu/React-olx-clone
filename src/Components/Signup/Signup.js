import React, {useContext, useState} from 'react';
import Logo from '../../olx-logo.png';
import './Signup.css';
import { FirebaseContext } from '../../store/Context';
import { useHistory } from 'react-router-dom';


export default function Signup() {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const {firebase} = useContext(FirebaseContext)
  const history = useHistory();


      
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !password || !username || !phone) {
      alert("All fields are required!");
      return;
    }
  
    try {
      console.log("Creating user with email and password...");
      const result = await firebase.auth().createUserWithEmailAndPassword(email, password);
      
      console.log("User created:", result.user.uid);
      


      console.log("Updating user profile...");
      await result.user.updateProfile({
        displayName: username
      });

      console.log("User profile updated");
      


      console.log("Adding user data to Firestore...");
      await firebase.firestore().collection('users').add({
        id: result.user.uid,
        username: username,
        phone: phone
      });

      console.log("User data added to Firestore");
  


      console.log("Redirecting to login page...");
      history.push("/login");

    } catch (error) {
      console.error("Error during registration:", error);
    }
  };
  

  





  
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" alt='' src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            id="fname"
            name="name"
            defaultValue="Sidharth"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="sidharthpunalur@gmail.com"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            name="phone"
            defaultValue=""
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            id="lname"
            name="password"
            defaultValue=""
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a href='/login' style={{color:'black'}}>Login</a>
      </div>
    </div>
  );
}

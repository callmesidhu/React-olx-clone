import React, { useContext } from 'react';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext, FirebaseContext } from '../../store/Context';
import { useHistory } from 'react-router-dom';

function Header() {
  const {user} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  const history = useHistory()

  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <a href='/home'>
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        </a>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          <b>{user ? `Welcome ${user.displayName}` : <a href='/login' style={{color:'black'}}>Login</a>}</b>
          <hr />
        </div>
        <b>{user && <span onClick={()=>{
             firebase.auth().signOut();
             history.push("/login")
        }} style={{color:'black',cursor:'grab'}}>Logout</span>}</b>


        <a href='/create'>
        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
        </a>
      </div>
    </div>
  );
}

export default Header;

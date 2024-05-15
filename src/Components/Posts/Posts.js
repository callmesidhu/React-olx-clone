import React, { useContext, useEffect, useState } from 'react';
import {FirebaseContext} from '../../store/Context'
import Heart from '../../assets/Heart';
import './Post.css';

function Posts() {

  const {firebase} = useContext(FirebaseContext)

  const [products,setProducts] = useState([])

  useEffect(()=>{
    firebase.firestore().collection('products').get().then((snapshot)=>{
      const allPost = snapshot.docs.map((product)=>{
        return{
          ...product.data(),
          id:product.id
        }

      })
      setProducts(allPost)
    })
  })

  return (
    <div className="postParentDiv">


      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
         
         
  {products.map(product=>{
   return(
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src={product.imageUrl} alt="Loading" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; {product.price}</p>
              <span className="kilometer">{product.category}</span>
              <p className="name">{product.name}</p>
            </div>
            <div className="date">
              <span>{product.createdAt}</span>
            </div>
          </div>
    )})}

        </div>
      </div>



      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
        {products.map(product=>{
   return(
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src={product.imageUrl} alt="Loading" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; {product.price}</p>
              <span className="kilometer">{product.category}</span>
              <p className="name">{product.name}</p>
            </div>
            <div className="date">
              <span>{product.createdAt}</span>
            </div>
          </div>
    )})}

        </div>
      </div>

      
    </div>
  );
}

export default Posts;

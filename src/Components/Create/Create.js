import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { AuthContext, FirebaseContext } from '../../store/Context';

const Create = () => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const { firebase } = useContext(FirebaseContext);
  const { user } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!image || !price || !category || !name) {
      alert("All fields are required!");
      return;
    }

    const uploadTask = firebase.storage().ref(`images/${image.name}`).put(image);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Handle progress if needed
      },
      (error) => {
        console.error("Image upload failed:", error);
        alert("Image upload failed!");
      },
      () => {
        // Get image URL after upload is complete
        uploadTask.snapshot.ref.getDownloadURL().then((url) => {
          firebase.firestore().collection('products').add({
            name,
            category,
            price,
            imageUrl: url,
            userId: user.uid,
            createdAt: new Date().toDateString() // Fixed date format method
          }).then(() => {
            alert("Product created successfully!");
          }).catch((error) => {
            console.error("Error adding product:", error);
            alert("Product creation failed!");
          });
        });
      }
    );
  };

  return (
    <Fragment>
      <Header />
      <div className="centerDiv">
        <form>
          <label htmlFor="fname">Name</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label htmlFor="category">Category</label>
          <br />
          <input
            className="input"
            type="text"
            id="category"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <br />
          <label htmlFor="price">Price</label>
          <br />
          <input
            className="input"
            type="number"
            id="price"
            name="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <br />
        </form>
        <br />
        <img width="200px" height="200px" src={image ? URL.createObjectURL(image) : ""} alt="Preview" />
        <form>
          <br />
          <input 
            type="file" 
            onChange={(e) => setImage(e.target.files[0])} 
          />
          <br />
          <button onClick={handleSubmit} className="uploadBtn">Upload and Submit</button>
        </form>
      </div>
    </Fragment>
  );
};

export default Create;

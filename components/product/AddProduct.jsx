import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

const AddProduct = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [imgUrl, setimgUrl] = useState('');
  const [description, setDescription] = useState('');

 const handleSubmit = (e) => {
   e.preventDefault();  
   console.log("Title:", title);
   console.log("Price:", price);
   console.log("Image Url:", imgUrl);
   console.log("Description:", description);
   // handle submit 
   const handleSubmit = (e)
  e.preventDefault();
   // create product object
   const product = {
    title: title,
    price: price,
    imgUrl: imgUrl,
    description: description,
   };
  // store form data in local storage
  // get existing product from local storage
  let products = JSON.parse(localStorage.getItem("products")) || [];

  // check if product is empty and add product
  //store product into local storage

  if (products.length > 0) {
    localStorage.setItem("products", JSON.stringify (products));}
    else {
      products.push(product);
  localStorage.setItem("product", JSON.stringify(products));}

  // clear form fields
  setTitle("");
  setPrice("");
  setDescription("");
  setimgUrl("");

 };

  return (
    <div className="container mt-5">
      <h1>Add New products</h1>
      <div>
      <form>
      <Form.Group className="mb-3" controlId="Enter Product Title">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter product title" value={title} onChange={(e) => setTitle(e.target.value)} />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Price</Form.Label>
        <Form.Control type="text" placeholder="Enter price" value={price} onChange={(e) => setPrice(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="imgUrl">
      <Form.Label>Image Url</Form.Label>
      <Form.Control type="Product Image Url" placeholder="Enter image Url" value={imgUrl} onChange={(e) => setimgUrl(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="Description">
      <Form.Label>Description</Form.Label>
      <Form.Control type="text" placeholder="Enter Product Description" value={description} onChange={(e) => setDescription(e.target.value)}/>
      </Form.Group>
      
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </form>
  
      </div>
    </div>
  )
}

export default AddProduct
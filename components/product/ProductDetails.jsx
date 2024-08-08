import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";

const ProductDetails = () => {
  const {id} = useParams();
  const [product, setProduct] = useState({});
  const fetchProduct = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);
  console.log("Product:", product);
  return (
    <div>
      <img src={product.thumbnail} alt="" />
      <h1>{product.title}</h1>
      <h2>Price</h2>
      <h1>This is extracted: {id}</h1>
      </div>
  );
};

export default ProductDetails
import ProductCard from "./ProductCard"
import { useState, useEffect } from "react"

const Products = () => {
  const styles = {
    grid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr 1fr",
      gap: "1rem",
    }
  }
 
  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const products = await response.json();
      setProducts(products.products);

    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProducts();
   }, []);



  return (
    <div className="container mt-4">
      <h1>Have a look at our Products</h1>

      <div style={styles.grid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      </div>
      
  )
}

export default Products
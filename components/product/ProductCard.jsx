import PropTypes from "prop-types"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductCard({product, func}) {
  return (
    <Card style={{ width: '18rem' }} onClick={func}>
      <Card.Img variant="top" src= {product.thumbnail||"https://cdn.dummyjson.com/products/images/beauty/Ess"}/>

      <Card.Body>

        <Card.Title>{product.title}</Card.Title>
        <Card.Title>Price: ${product.price} </Card.Title>
        <Card.Title>Rating: {product.rating} Stars</Card.Title>
        
        
        <Card.Text>
          {product.description.slice(0,100)}
        </Card.Text>
        <Button variant="primary">Get Me</Button>
      </Card.Body>
    </Card>

   
  );
}

ProductCard.propTypes = {
  func: PropTypes.any,
  product: PropTypes.shape({
    description: PropTypes.shape({
      slice: PropTypes.func
    }),
    price: PropTypes.any,
    rating: PropTypes.any,
    thumbnail: PropTypes.string,
    title: PropTypes.any,
    func: PropTypes.func
  })
}

export default ProductCard;
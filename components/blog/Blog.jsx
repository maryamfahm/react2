import { useEffect } from "react"

const Blog = () => {
  const fetchData = async () => {
    const data = JSON.parse(localStorage.getItem("products"));

    console.log("Product data", data);
  };
  
  // call fetchData
  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <div className="container mt-4">
      <h1>Welcome to Our Blog </h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus repellat provident, laudantium vero hic nulla maiores sint nesciunt veritatis fuga non saepe ab. Minima ipsum ea voluptatum incidunt amet corporis ullam unde voluptas, voluptatibus eos doloremque quod eius, quis nihil possimus maxime eum nulla laborum dolores tenetur a delectus iure culpa facere. Quidem excepturi recusandae ex sit voluptatibus veniam, et quod atque facilis tempore iste delectus, ab, omnis nobis dignissimos saepe quas maiores? Obcaecati explicabo distinctio voluptate nemo! Laudantium natus qui est ipsum repellendus voluptatibus, aspernatur officiis quasi quo iusto omnis rerum dolorem facilis magnam! Aliquid excepturi distinctio fugiat! Impedit delectus illo possimus, qui laborum iusto sunt. Nulla doloremque autem in delectus dolorum veniam tempora odit vero, voluptatibus iusto atque rerum recusandae repellendus itaque tenetur commodi accusantium alias placeat eos quos dicta? Similique, aperiam saepe voluptas eum culpa distinctio reprehenderit placeat obcaecati dolores velit voluptatibus ipsa incidunt illo autem animi?</p>
      </div>
  )
}

export default Blog
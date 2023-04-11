import axios from "axios";
import { useState, useEffect } from "react";

function Header() {
  return <h1>Farmers Market</h1>;
}

function ProductsNew() {}

function ProductsIndex(props) {
  console.log(props);
  return (
    <div id="products-index">
      <h1>All products</h1>
      {props.recipes.map((product) => (
        <div key={product.id} className="products">
          <h2>{product.name}</h2>
          <img src={product.image.url} alt="image link here" />
          <p>{product.supplier}</p>
          <button>More info</button>
        </div>
      ))}
    </div>
  );
}

function Footer() {
  return <p>Copyright 2023</p>;
}

function Content() {
  const [products, setProducts] = useState([]);

  const handleIndexProducts = () => {
    axios.get("http://localhost:3000/products.json").then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  };

  useEffect(handleIndexProducts, []);

  return (
    <div>
      <ProductsNew />
      <ProductsIndex />
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;

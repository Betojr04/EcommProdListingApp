import React from "react";
import ProdItem from "./ProdItem";
import prodImage from "./assets/prodImage.jpeg";

const ProdList = () => {
  const products = [
    {
      id: 1,
      name: "Iphone",
      imageUrl: prodImage,
      catgory: "random",
      description: "random description",
      price: 199.0
    },
    {
      id: 1,
      name: "Iphone",
      imageUrl: prodImage,
      catgory: "random",
      description: "random description",
      price: 199.0
    },
    {
      id: 1,
      name: "Iphone",
      imageUrl: prodImage,
      catgory: "random",
      description: "random description",
      price: 199.0
    },
    {
      id: 1,
      name: "Iphone",
      imageUrl: prodImage,
      catgory: "random",
      description: "random description",
      price: 199.0
    },
    {
      id: 1,
      name: "Iphone",
      imageUrl: prodImage,
      catgory: "random",
      description: "random description",
      price: 199.0
    },
    {
      id: 1,
      name: "Iphone",
      imageUrl: prodImage,
      catgory: "random",
      description: "random description",
      price: 199.0
    },
    {
      id: 1,
      name: "Iphone",
      imageUrl: prodImage,
      catgory: "random",
      description: "random description",
      price: 199.0
    },
    {
      id: 1,
      name: "Iphone",
      imageUrl: prodImage,
      catgory: "random",
      description: "random description",
      price: 199.0
    }
  ];
  return (
    <div>
      <h1>Products List:</h1>
      {products.map(product =>
        <ProdItem
          key={product.id}
          name={product.name}
          price={product.price}
          description={product.description}
          image={product.imageUrl}
          category={product.category}
        />
      )}
    </div>
  );
};
export default ProdList;

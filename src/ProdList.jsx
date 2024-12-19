import React from "react";
import ProdItem from "./ProdItem";
import prodImage from "./assets/prodImage.jpeg";

const ProdList = () => {
  const products = [
    {
      id: 1,
      name: "Iphone",
      imageUrl: prodImage,
      category: "random",
      description: "random description",
      price: 199.0
    },
    {
      id: 2,
      name: "Iphone",
      imageUrl: prodImage,
      category: "random",
      description: "random description",
      price: 199.0
    },
    {
      id: 3,
      name: "Iphone",
      imageUrl: prodImage,
      category: "random",
      description: "random description",
      price: 199.0
    },
    {
      id: 4,
      name: "Iphone",
      imageUrl: prodImage,
      category: "random",
      description: "random description",
      price: 199.0
    },
    {
      id: 5,
      name: "Iphone",
      imageUrl: prodImage,
      category: "random",
      description: "random description",
      price: 199.0
    },
    {
      id: 6,
      name: "Iphone",
      imageUrl: prodImage,
      category: "random",
      description: "random description",
      price: 199.0
    },
    {
      id: 7,
      name: "Iphone",
      imageUrl: prodImage,
      category: "random",
      description: "random description",
      price: 199.0
    },
    {
      id: 8,
      name: "Iphone",
      imageUrl: prodImage,
      category: "random",
      description: "random description",
      price: 199.0
    }
  ];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <h1>Products List:</h1>
      {products.map(product =>
        <ProdItem
          key={product.id}
          id={product.id}
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

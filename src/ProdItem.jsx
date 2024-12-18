const ProdItem = props => {
  return (
    <div>
      <h2>
        Name: {props.name}
      </h2>
      <img src={props.image} alt={props.name} />
      <p>
        Item Number: {props.id}
      </p>
      <h3>
        Price: {props.price}
      </h3>
      <p>
        Category: {props.category}
      </p>
      <p>
        Description: {props.description}
      </p>
    </div>
  );
};

export default ProdItem;

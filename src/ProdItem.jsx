import "./ProdList.css";
import "./ProdItem.css";

const ProdItem = props => {
  return (
    <div className="card-container">
      <h2 className="card-title">
        Name: {props.name}
      </h2>
      <img className="card-image" src={props.image} alt={props.name} />
      <p className="card-number">
        Item Number: {props.id}
      </p>
      <h3 className="card-price">
        Price: {props.price}
      </h3>
      <p className="card-category">
        Category: {props.category}
      </p>
      <p className="card-description">
        Description: {props.description}
      </p>
    </div>
  );
};

export default ProdItem;

import { Link } from "react-router-dom";

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-image">
        <img src={product.image} alt={product.name} />
      </Link>

      <div className="product-info">
        <span className="product-category">{product.category}</span>

        <Link
          to={`/product/${product.id}`}
          className="product-name"
        >
          <h3>{product.name}</h3>
        </Link>

        <p>{product.description}</p>

        <div className="product-bottom">
          <strong>₹{product.price.toLocaleString("en-IN")}</strong>

          <button
            className="add-small-btn"
            onClick={() => onAddToCart(product)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
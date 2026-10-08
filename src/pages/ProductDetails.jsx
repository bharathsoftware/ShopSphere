import { Link, useParams } from "react-router-dom";
import products from "../data/products";

function ProductDetails({ onAddToCart }) {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <section className="not-found">
        <h1>Product Not Found</h1>

        <Link to="/products" className="back-products">
          ← Back to Products
        </Link>
      </section>
    );
  }

  return (
    <section className="product-details">
      <div className="details-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="details-content">
        <span className="details-category">
          {product.category}
        </span>

        <h1>{product.name}</h1>

        <p className="details-description">
          {product.description}
        </p>

        <h2 className="details-price">
          ₹{product.price.toLocaleString("en-IN")}
        </h2>

        <button
          className="details-add-btn"
          onClick={() => onAddToCart(product)}
        >
          Add to Cart
        </button>

        <Link to="/products" className="back-products">
          ← Continue Shopping
        </Link>
      </div>
    </section>
  );
}

export default ProductDetails;
import { Link } from "react-router-dom";

function OrderSuccess() {
  return (
    <section className="success-page">
      <div className="success-card">
        <div className="success-icon">✓</div>

        <h1>Order Placed Successfully!</h1>

        <p>
          Thank you for shopping with ShopSphere.
          Your order has been successfully placed.
        </p>

        <Link to="/products" className="shop-btn">
          Continue Shopping
        </Link>
      </div>
    </section>
  );
}

export default OrderSuccess;
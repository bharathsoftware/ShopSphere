
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Checkout({ cart, onClear }) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    payment: "cod",
  });

  const [error, setError] = useState("");

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = subtotal === 0 || subtotal >= 2000 ? 0 : 99;
  const totalPrice = subtotal + shipping;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      setError("Your cart is empty. Add a product before checkout.");
      return;
    }

    onClear();
    navigate("/order-success");
  };

  if (cart.length === 0) {
    return (
      <section className="checkout-empty">
        <div className="checkout-empty-card">
          <span className="checkout-empty-icon">🛍️</span>
          <h1>Your cart is empty</h1>
          <p>Add some products before proceeding to checkout.</p>
          <button
            type="button"
            className="checkout-primary-btn"
            onClick={() => navigate("/products")}
          >
            Explore Products
          </button>
        </div>
      </section>
    );
  }

  return (
    <main className="checkout-page">
      <div className="checkout-container">
        <div className="checkout-heading">
          <p className="checkout-eyebrow">SHOPSPHERE CHECKOUT</p>
          <h1>Almost yours.</h1>
          <p>
            Complete your details and get your favourites delivered.
          </p>
        </div>

        <div className="checkout-progress">
          <span className="checkout-step completed">
            <span>✓</span> Shopping
          </span>
          <span className="checkout-progress-line" />
          <span className="checkout-step active">
            <span>2</span> Checkout
          </span>
          <span className="checkout-progress-line" />
          <span className="checkout-step">
            <span>3</span> Confirmation
          </span>
        </div>

        <form className="checkout-layout" onSubmit={handleSubmit}>
          <div className="checkout-main">
            {/* Contact information */}
            <section className="checkout-panel">
              <div className="checkout-panel-heading">
                <span className="checkout-number">01</span>
                <div>
                  <h2>Contact information</h2>
                  <p>How can we reach you about your order?</p>
                </div>
              </div>

              <div className="checkout-form-grid">
                <div className="checkout-field full-width">
                  <label htmlFor="name">Full name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={form.name}
                    onChange={handleChange}
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="checkout-field">
                  <label htmlFor="email">Email address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    autoComplete="email"
                    required
                  />
                </div>

                <div className="checkout-field">
                  <label htmlFor="phone">Phone number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="10-digit mobile number"
                    value={form.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                    pattern="[0-9]{10}"
                    title="Enter a 10-digit mobile number"
                    maxLength={10}
                    required
                  />
                </div>
              </div>
            </section>

            {/* Delivery address */}
            <section className="checkout-panel">
              <div className="checkout-panel-heading">
                <span className="checkout-number">02</span>
                <div>
                  <h2>Delivery address</h2>
                  <p>Where should we deliver your order?</p>
                </div>
              </div>

              <div className="checkout-form-grid">
                <div className="checkout-field full-width">
                  <label htmlFor="address">Street address</label>
                  <textarea
                    id="address"
                    name="address"
                    placeholder="House number, street, area"
                    value={form.address}
                    onChange={handleChange}
                    autoComplete="street-address"
                    rows={3}
                    required
                  />
                </div>

                <div className="checkout-field">
                  <label htmlFor="city">City</label>
                  <input
                    id="city"
                    name="city"
                    placeholder="Your city"
                    value={form.city}
                    onChange={handleChange}
                    autoComplete="address-level2"
                    required
                  />
                </div>

                <div className="checkout-field">
                  <label htmlFor="state">State</label>
                  <input
                    id="state"
                    name="state"
                    placeholder="Your state"
                    value={form.state}
                    onChange={handleChange}
                    autoComplete="address-level1"
                    required
                  />
                </div>

                <div className="checkout-field full-width">
                  <label htmlFor="pincode">PIN code</label>
                  <input
                    id="pincode"
                    name="pincode"
                    inputMode="numeric"
                    placeholder="6-digit PIN code"
                    value={form.pincode}
                    onChange={handleChange}
                    autoComplete="postal-code"
                    pattern="[0-9]{6}"
                    maxLength={6}
                    title="Enter a 6-digit PIN code"
                    required
                  />
                </div>
              </div>
            </section>

            {/* Payment method */}
            <section className="checkout-panel">
              <div className="checkout-panel-heading">
                <span className="checkout-number">03</span>
                <div>
                  <h2>Payment method</h2>
                  <p>Choose how you would like to pay.</p>
                </div>
              </div>

              <div className="checkout-payment-options">
                <label
                  className={`checkout-payment-option ${
                    form.payment === "cod" ? "selected" : ""
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={form.payment === "cod"}
                    onChange={handleChange}
                  />
                  <span className="checkout-payment-icon">💵</span>
                  <span className="checkout-payment-copy">
                    <strong>Cash on Delivery</strong>
                    <small>Pay when your order arrives</small>
                  </span>
                  <span className="checkout-payment-check">✓</span>
                </label>

                <label
                  className={`checkout-payment-option ${
                    form.payment === "online" ? "selected" : ""
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value="online"
                    checked={form.payment === "online"}
                    onChange={handleChange}
                  />
                  <span className="checkout-payment-icon">💳</span>
                  <span className="checkout-payment-copy">
                    <strong>Online Payment</strong>
                    <small>Demo option — no payment is processed</small>
                  </span>
                  <span className="checkout-payment-check">✓</span>
                </label>
              </div>
            </section>

            {error && <p className="checkout-error">{error}</p>}
          </div>

          {/* Order summary */}
          <aside className="checkout-summary">
            <div className="checkout-summary-heading">
              <div>
                <p className="checkout-eyebrow">YOUR ORDER</p>
                <h2>Order summary</h2>
              </div>
              <span className="checkout-item-count">
                {cart.reduce((count, item) => count + item.quantity, 0)} items
              </span>
            </div>

            <div className="checkout-products">
              {cart.map((item) => (
                <div className="checkout-product" key={item.id}>
                  <div className="checkout-product-image">
                    <img src={item.image} alt={item.name} />
                    <span>{item.quantity}</span>
                  </div>
                  <div className="checkout-product-info">
                    <h3>{item.name}</h3>
                    <p>Qty: {item.quantity}</p>
                  </div>
                  <strong>
                    ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                  </strong>
                </div>
              ))}
            </div>

            <div className="checkout-price-breakdown">
              <div>
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString("en-IN")}</span>
              </div>

              <div>
                <span>Delivery</span>
                <span className={shipping === 0 ? "free-shipping" : ""}>
                  {shipping === 0
                    ? "FREE"
                    : `₹${shipping.toLocaleString("en-IN")}`}
                </span>
              </div>

              {shipping > 0 && (
                <p className="checkout-shipping-note">
                  Free delivery on orders of ₹2,000 or more.
                </p>
              )}
            </div>

            <div className="checkout-grand-total">
              <span>Total to pay</span>
              <strong>₹{totalPrice.toLocaleString("en-IN")}</strong>
            </div>

            <button type="submit" className="checkout-primary-btn">
              Place Order <span>→</span>
            </button>

            <div className="checkout-trust-note">
              <span>🔒</span>
              <p>Your details are used for this demo checkout only.</p>
            </div>

            <button
              type="button"
              className="checkout-back-btn"
              onClick={() => navigate("/cart")}
            >
              ← Return to cart
            </button>
          </aside>
        </form>

        <p className="checkout-footer-note">
          ShopSphere · A simple, thoughtful shopping experience.
        </p>
      </div>
    </main>
  );
}

export default Checkout;

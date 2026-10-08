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
    pincode: "",
  });

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    onClear();
    navigate("/order-success");
  };

  return (
    <section className="checkout-page">
      <div className="checkout-card">
        <p className="section-label">CHECKOUT</p>

        <h1>Complete Your Order</h1>

        <form onSubmit={handleSubmit}>
          <label>Full Name</label>

          <input
            name="name"
            type="text"
            placeholder="Enter your name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <label>Email</label>

          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <label>Phone</label>

          <input
            name="phone"
            type="tel"
            placeholder="Enter phone number"
            value={form.phone}
            onChange={handleChange}
            required
          />

          <label>Address</label>

          <textarea
            name="address"
            placeholder="Enter delivery address"
            value={form.address}
            onChange={handleChange}
            required
          />

          <label>City</label>

          <input
            name="city"
            type="text"
            placeholder="Enter city"
            value={form.city}
            onChange={handleChange}
            required
          />

          <label>Pincode</label>

          <input
            name="pincode"
            type="text"
            placeholder="Enter pincode"
            value={form.pincode}
            onChange={handleChange}
            required
          />

          <div className="checkout-total">
            Total: ₹{totalPrice.toLocaleString("en-IN")}
          </div>

          <button type="submit" className="checkout-btn">
            Place Order
          </button>
        </form>
      </div>
    </section>
  );
}

export default Checkout;
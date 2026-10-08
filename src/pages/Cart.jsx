import { Link } from "react-router-dom";

function Cart({
  cart,
  onRemove,
  onClear,
  onIncrease,
  onDecrease,
}) {
  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const subtotal = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const delivery = subtotal > 0 ? 0 : 0;

  const total = subtotal + delivery;

  /* =====================================================
     EMPTY CART
  ===================================================== */

  if (cart.length === 0) {
    return (
      <main className="cart-page">

        <section className="cart-empty">

          <div className="empty-cart-icon">
            🛒
          </div>

          <h1>
            Your cart is empty
          </h1>

          <p>
            Looks like you haven't added anything
            to your cart yet.
          </p>

          <Link
            to="/products"
            className="continue-shopping-btn"
          >
            Start Shopping →
          </Link>

        </section>


        <footer>

          <div className="footer-content">

            <h2>
              ShopSphere
            </h2>

            <p>
              Modern shopping experience built with React.
            </p>

            <p className="copyright">
              © 2026 ShopSphere. All rights reserved.
            </p>

          </div>

        </footer>

      </main>
    );
  }


  /* =====================================================
     CART PAGE
  ===================================================== */

  return (
    <main className="cart-page">

      {/* ================================================
          HEADER
      ================================================ */}

      <section className="cart-page-header">

        <div>

          <span>
            SHOPPING CART
          </span>

          <h1>
            Your Cart
          </h1>

          <p>
            Review your selected products before checkout.
          </p>

        </div>

        <Link
          to="/products"
          className="back-shopping"
        >
          ← Continue Shopping
        </Link>

      </section>


      {/* ================================================
          CART CONTENT
      ================================================ */}

      <section className="cart-container">

        {/* ==============================================
            LEFT SIDE
        ============================================== */}

        <div className="cart-products">

          <div className="cart-products-header">

            <div>

              <h2>
                Shopping Bag
              </h2>

              <span>
                {totalItems}{" "}
                {totalItems === 1
                  ? "item"
                  : "items"}
              </span>

            </div>


            <button
              className="clear-cart-btn"
              onClick={onClear}
            >
              Clear Cart
            </button>

          </div>


          {/* ============================================
              PRODUCTS
          ============================================ */}

          <div className="cart-items">

            {cart.map((item) => (

              <div
                className="cart-item"
                key={item.id}
              >

                {/* IMAGE */}

                <Link
                  to={`/product/${item.id}`}
                  className="cart-item-image"
                >

                  <img
                    src={item.image}
                    alt={item.name}
                  />

                </Link>


                {/* PRODUCT INFO */}

                <div className="cart-item-info">

                  <span className="cart-item-category">
                    {item.category}
                  </span>

                  <Link
                    to={`/product/${item.id}`}
                    className="cart-item-name"
                  >
                    {item.name}
                  </Link>

                  <p>
                    {item.description}
                  </p>


                  <div className="cart-mobile-price">
                    ₹{item.price.toLocaleString("en-IN")}
                  </div>

                </div>


                {/* QUANTITY */}

                <div className="cart-quantity">

                  <span>
                    Quantity
                  </span>

                  <div className="quantity-box">

                    <button
                      onClick={() =>
                        onDecrease(item.id)
                      }
                    >
                      −
                    </button>

                    <strong>
                      {item.quantity}
                    </strong>

                    <button
                      onClick={() =>
                        onIncrease(item.id)
                      }
                    >
                      +
                    </button>

                  </div>

                </div>


                {/* PRICE */}

                <div className="cart-item-price">

                  <span>
                    Price
                  </span>

                  <strong>
                    ₹
                    {(
                      item.price *
                      item.quantity
                    ).toLocaleString("en-IN")}
                  </strong>

                </div>


                {/* REMOVE */}

                <button
                  className="remove-cart-item"
                  onClick={() =>
                    onRemove(item.id)
                  }
                  title="Remove item"
                >
                  ×
                </button>

              </div>

            ))}

          </div>

        </div>


        {/* ==============================================
            ORDER SUMMARY
        ============================================== */}

        <aside className="order-summary">

          <div className="summary-title">

            <h2>
              Order Summary
            </h2>

            <span>
              {totalItems} items
            </span>

          </div>


          <div className="summary-details">

            <div className="summary-row">

              <span>
                Subtotal
              </span>

              <strong>
                ₹{subtotal.toLocaleString("en-IN")}
              </strong>

            </div>


            <div className="summary-row">

              <span>
                Delivery
              </span>

              <strong className="free-delivery">
                FREE
              </strong>

            </div>


            <div className="summary-row">

              <span>
                Discount
              </span>

              <strong>
                ₹0
              </strong>

            </div>

          </div>


          <div className="summary-divider"></div>


          <div className="summary-total">

            <span>
              Total
            </span>

            <strong>
              ₹{total.toLocaleString("en-IN")}
            </strong>

          </div>


          <Link
            to="/checkout"
            className="checkout-btn"
          >
            Proceed to Checkout →
          </Link>


          <div className="secure-checkout">

            <span>
              🔒
            </span>

            <div>

              <strong>
                Secure Checkout
              </strong>

              <small>
                Your information is protected
              </small>

            </div>

          </div>


          <Link
            to="/products"
            className="summary-shopping"
          >
            ← Continue Shopping
          </Link>

        </aside>

      </section>


      {/* ================================================
          BENEFITS
      ================================================= */}

      <section className="cart-benefits">

        <div className="cart-benefit">

          <span>
            🚚
          </span>

          <div>

            <strong>
              Free Delivery
            </strong>

            <p>
              On every order
            </p>

          </div>

        </div>


        <div className="cart-benefit">

          <span>
            🔒
          </span>

          <div>

            <strong>
              Secure Payment
            </strong>

            <p>
              Safe & protected
            </p>

          </div>

        </div>


        <div className="cart-benefit">

          <span>
            ↩️
          </span>

          <div>

            <strong>
              Easy Returns
            </strong>

            <p>
              Hassle-free returns
            </p>

          </div>

        </div>


        <div className="cart-benefit">

          <span>
            💬
          </span>

          <div>

            <strong>
              Customer Support
            </strong>

            <p>
              We're here to help
            </p>

          </div>

        </div>

      </section>


      {/* ================================================
          FOOTER
      ================================================= */}

      <footer>

        <div className="footer-content">

          <h2>
            ShopSphere
          </h2>

          <p>
            Modern shopping experience built with React.
          </p>

          <p className="copyright">
            © 2026 ShopSphere. All rights reserved.
          </p>

        </div>

      </footer>

    </main>
  );
}

export default Cart;
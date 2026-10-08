import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import products from "./data/products";

import Products from "./pages/Products";
import Categories from "./pages/Categories";
import About from "./pages/About";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";

import "./App.css";


/* =====================================================
   HOME PAGE
===================================================== */

function Home({ addToCart }) {
  return (
    <>
      {/* =================================================
          HERO SECTION
      ================================================= */}

      <section className="hero">

        {/* LEFT SIDE */}

        <div className="hero-content">

          <span className="hero-tag">
            WELCOME TO SHOPSPHERE
          </span>

          <h1>
            Shop Smart.
            <br />
            Live Better.
          </h1>

          <p>
            Discover amazing products at great prices.
            <br />
            Simple shopping, fast delivery and quality products.
          </p>

          <div className="hero-buttons">

            <Link
              to="/products"
              className="shop-btn"
            >
              Shop Now →
            </Link>

            <Link
              to="/categories"
              className="explore-btn"
            >
              Explore Categories
            </Link>

          </div>

        </div>


        {/* =================================================
            RIGHT SHOPPING VISUAL
        ================================================= */}

        <div className="shopping-visual">

          {/* BACKGROUND CIRCLE */}

          <div className="shopping-circle circle-one"></div>

          <div className="shopping-circle circle-two"></div>


          {/* SHOPPING BAG */}

          <div className="shopping-bag">

            <div className="bag-handle"></div>

            <div className="bag-body">

              <span>
                SHOP
              </span>

              <strong>
                SPHERE
              </strong>

            </div>

          </div>


          {/* PRODUCT CARD 1 */}

          <div className="floating-product product-one">

            <img
              src={products[0].image}
              alt={products[0].name}
            />

            <div>
              <small>
                Electronics
              </small>

              <strong>
                Headphones
              </strong>
            </div>

          </div>


          {/* PRODUCT CARD 2 */}

          <div className="floating-product product-two">

            <img
              src={products[1].image}
              alt={products[1].name}
            />

            <div>
              <small>
                Accessories
              </small>

              <strong>
                Smart Watch
              </strong>
            </div>

          </div>


          {/* PRODUCT CARD 3 */}

          <div className="floating-product product-three">

            <img
              src={products[2].image}
              alt={products[2].name}
            />

            <div>
              <small>
                Fashion
              </small>

              <strong>
                Sneakers
              </strong>
            </div>

          </div>


          {/* SHOPPING BADGE */}

          <div className="shopping-badge">

            <span className="badge-icon">
              🛍️
            </span>

            <div>

              <small>
                Everything you need
              </small>

              <strong>
                In one place
              </strong>

            </div>

          </div>

        </div>

      </section>


      {/* =================================================
          CATEGORIES
      ================================================= */}

      <section className="categories">

        <div className="section-heading">

          <span>
            SHOP BY
          </span>

          <h2>
            Categories
          </h2>

        </div>


        <div className="category-grid">

          <Link
            to="/products?category=Fashion"
            className="category-card"
          >

            <div className="category-icon">
              👕
            </div>

            <h3>
              Fashion
            </h3>

            <p>
              Trendy styles
            </p>

          </Link>


          <Link
            to="/products?category=Electronics"
            className="category-card"
          >

            <div className="category-icon">
              💻
            </div>

            <h3>
              Electronics
            </h3>

            <p>
              Latest technology
            </p>

          </Link>


          <Link
            to="/products?category=Accessories"
            className="category-card"
          >

            <div className="category-icon">
              ⌚
            </div>

            <h3>
              Accessories
            </h3>

            <p>
              Complete your style
            </p>

          </Link>


          <Link
            to="/products?category=Home"
            className="category-card"
          >

            <div className="category-icon">
              🏠
            </div>

            <h3>
              Home
            </h3>

            <p>
              Make your home better
            </p>

          </Link>

        </div>

      </section>


      {/* =================================================
          FEATURED PRODUCTS
      ================================================= */}

      <section className="featured-section">

        <div className="section-heading">

          <span>
            OUR COLLECTION
          </span>

          <h2>
            Featured Products
          </h2>

        </div>


        <div className="product-grid">

          {products.slice(0, 4).map((product) => (

            <div
              className="product-card"
              key={product.id}
            >

              <Link
                to={`/product/${product.id}`}
                className="product-image"
              >

                <img
                  src={product.image}
                  alt={product.name}
                />

              </Link>


              <div className="product-info">

                <span className="product-category">
                  {product.category}
                </span>


                <Link
                  to={`/product/${product.id}`}
                  className="product-name"
                >

                  <h3>
                    {product.name}
                  </h3>

                </Link>


                <p>
                  {product.description}
                </p>


                <div className="product-bottom">

                  <strong>
                    ₹{product.price.toLocaleString("en-IN")}
                  </strong>


                  <button
                    className="add-small-btn"
                    onClick={() => addToCart(product)}
                  >
                    +
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>


        <div className="view-all">

          <Link
            to="/products"
            className="shop-btn"
          >
            View All Products →
          </Link>

        </div>

      </section>


      {/* =================================================
          ABOUT PREVIEW
      ================================================= */}

      <section className="about">

        <div className="about-content">

          <span>
            ABOUT SHOPSPHERE
          </span>

          <h2>
            Everything you need,
            <br />
            all in one place.
          </h2>

          <p>
            ShopSphere is a modern e-commerce platform
            designed to make online shopping simple,
            fast and enjoyable.
          </p>

          <Link
            to="/about"
            className="shop-btn"
          >
            Learn More →
          </Link>

        </div>

      </section>


      {/* =================================================
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

    </>
  );
}


/* =====================================================
   MAIN APP
===================================================== */

function App() {

  /* ===================================================
     CART
  =================================================== */

  const [cart, setCart] = useState(() => {

    const savedCart =
      localStorage.getItem("shopsphere-cart");

    return savedCart
      ? JSON.parse(savedCart)
      : [];

  });


  /* ===================================================
     USER
  =================================================== */

  const [user, setUser] = useState(() => {

    const savedUser =
      localStorage.getItem("shopsphere-user");

    return savedUser
      ? JSON.parse(savedUser)
      : null;

  });


  /* ===================================================
     SAVE CART
  =================================================== */

  useEffect(() => {

    localStorage.setItem(
      "shopsphere-cart",
      JSON.stringify(cart)
    );

  }, [cart]);


  /* ===================================================
     SAVE USER
  =================================================== */

  useEffect(() => {

    if (user) {

      localStorage.setItem(
        "shopsphere-user",
        JSON.stringify(user)
      );

    } else {

      localStorage.removeItem(
        "shopsphere-user"
      );

    }

  }, [user]);


  /* ===================================================
     LOGIN
  =================================================== */

  const handleLogin = (userData) => {

    setUser(userData);

  };


  /* ===================================================
     LOGOUT
  =================================================== */

  const handleLogout = () => {

    setUser(null);

    alert("You have been logged out.");

  };


  /* ===================================================
     ADD TO CART
  =================================================== */

  const addToCart = (product) => {

    setCart((currentCart) => {

      const existingProduct =
        currentCart.find(
          (item) => item.id === product.id
        );


      if (existingProduct) {

        return currentCart.map((item) =>

          item.id === product.id

            ? {
                ...item,
                quantity: item.quantity + 1,
              }

            : item

        );

      }


      return [

        ...currentCart,

        {
          ...product,
          quantity: 1,
        },

      ];

    });


    alert(
      `${product.name} added to cart!`
    );

  };


  /* ===================================================
     REMOVE FROM CART
  =================================================== */

  const removeFromCart = (id) => {

    setCart((currentCart) =>

      currentCart.filter(
        (item) => item.id !== id
      )

    );

  };


  /* ===================================================
     CLEAR CART
  =================================================== */

  const clearCart = () => {

    setCart([]);

  };


  /* ===================================================
     INCREASE
  =================================================== */

  const increaseQuantity = (id) => {

    setCart((currentCart) =>

      currentCart.map((item) =>

        item.id === id

          ? {
              ...item,
              quantity: item.quantity + 1,
            }

          : item

      )

    );

  };


  /* ===================================================
     DECREASE
  =================================================== */

  const decreaseQuantity = (id) => {

    setCart((currentCart) =>

      currentCart

        .map((item) =>

          item.id === id

            ? {
                ...item,
                quantity: item.quantity - 1,
              }

            : item

        )

        .filter(
          (item) => item.quantity > 0
        )

    );

  };


  /* ===================================================
     CART COUNT
  =================================================== */

  const cartCount = cart.reduce(

    (total, item) =>
      total + item.quantity,

    0

  );


  /* ===================================================
     APP
  =================================================== */

  return (

    <BrowserRouter>

      {/* =================================================
          NAVBAR
      ================================================= */}

      <header className="navbar">

        <Link
          to="/"
          className="logo"
        >
          ShopSphere
        </Link>


        <nav className="nav-links">

          <Link to="/">
            Home
          </Link>

          <Link to="/products">
            Products
          </Link>

          <Link to="/categories">
            Categories
          </Link>

          <Link to="/about">
            About
          </Link>

        </nav>


        <div className="nav-actions">

          {!user && (

            <Link
              to="/login"
              className="login-btn"
            >
              Login
            </Link>

          )}


          {user && (

            <>

              <span className="user-welcome">
                👤 {user.name}
              </span>

              <button
                className="logout-btn"
                onClick={handleLogout}
              >
                Logout
              </button>

            </>

          )}


          <Link
            to="/cart"
            className="cart-btn"
          >
            🛒 Cart ({cartCount})
          </Link>

        </div>

      </header>


      {/* =================================================
          ROUTES
      ================================================= */}

      <Routes>

        <Route
          path="/"
          element={
            <Home
              addToCart={addToCart}
            />
          }
        />

        <Route
          path="/products"
          element={
            <Products
              addToCart={addToCart}
            />
          }
        />

        <Route
          path="/categories"
          element={
            <Categories />
          }
        />

        <Route
          path="/about"
          element={
            <About />
          }
        />

        <Route
          path="/product/:id"
          element={
            <ProductDetails
              onAddToCart={addToCart}
            />
          }
        />

        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              onRemove={removeFromCart}
              onClear={clearCart}
              onIncrease={increaseQuantity}
              onDecrease={decreaseQuantity}
            />
          }
        />

        <Route
          path="/login"
          element={
            <Login
              onLogin={handleLogin}
            />
          }
        />

        <Route
          path="/checkout"
          element={
            <Checkout
              cart={cart}
              onClear={clearCart}
            />
          }
        />

        <Route
          path="/order-success"
          element={
            <OrderSuccess />
          }
        />

      </Routes>

    </BrowserRouter>

  );
}


export default App;
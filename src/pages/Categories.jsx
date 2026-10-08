import { Link } from "react-router-dom";

function Categories() {
  const categories = [
    {
      name: "Fashion",
      description: "Discover modern clothing, shoes and everyday style.",
      image:
        "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=900&q=85",
      category: "Fashion",
    },
    {
      name: "Electronics",
      description: "Explore smart gadgets, laptops and modern technology.",
      image:
        "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=900&q=85",
      category: "Electronics",
    },
    {
      name: "Accessories",
      description: "Complete your style with useful everyday accessories.",
      image:
        "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=900&q=85",
      category: "Accessories",
    },
    {
      name: "Home",
      description: "Discover products that make your home better.",
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=85",
      category: "Home",
    },
  ];

  return (
    <main className="categories-page">

      {/* =========================================
          PAGE HEADER
      ========================================= */}

      <section className="categories-header">

        <div className="categories-header-content">

          <span className="section-label">
            EXPLORE
          </span>

          <h1>
            Shop by Category
          </h1>

          <p>
            Find exactly what you are looking for.
          </p>

        </div>

      </section>


      {/* =========================================
          CATEGORY CARDS
      ========================================= */}

      <section className="categories-grid">

        {categories.map((category) => (

          <Link
            to={`/products?category=${category.category}`}
            className="modern-category-card"
            key={category.name}
          >

            {/* IMAGE */}

            <div className="category-image">

              <img
                src={category.image}
                alt={category.name}
              />

              <div className="category-image-overlay">
                <span>
                  Shop Now →
                </span>
              </div>

            </div>


            {/* CONTENT */}

            <div className="category-content">

              <div className="category-content-top">

                <h2>
                  {category.name}
                </h2>

                <span className="category-arrow">
                  →
                </span>

              </div>

              <p>
                {category.description}
              </p>

              <span className="category-link">
                Explore {category.name}
              </span>

            </div>

          </Link>

        ))}

      </section>


      {/* =========================================
          BOTTOM CTA
      ========================================= */}

      <section className="category-bottom">

        <div>

          <span>
            SHOP SMART
          </span>

          <h2>
            Everything you need,
            <br />
            all in one place.
          </h2>

          <p>
            Browse our complete collection and discover
            products made for your everyday lifestyle.
          </p>

          <Link
            to="/products"
            className="category-shop-btn"
          >
            View All Products →
          </Link>

        </div>

      </section>


      {/* =========================================
          FOOTER
      ========================================= */}

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

export default Categories;
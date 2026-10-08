import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Products({ addToCart }) {
  const [searchParams] = useSearchParams();

  const categoryFromUrl =
    searchParams.get("category") || "All";

  const [search, setSearch] = useState("");
  const [category, setCategory] =
    useState(categoryFromUrl);

  useEffect(() => {
    setCategory(categoryFromUrl);
  }, [categoryFromUrl]);

  const categories = [
    "All",
    "Electronics",
    "Fashion",
    "Accessories",
    "Home",
  ];

  const filteredProducts = products.filter((product) => {
    const searchText = search.toLowerCase().trim();

    const matchesSearch =
      product.name.toLowerCase().includes(searchText) ||
      product.category.toLowerCase().includes(searchText) ||
      product.description.toLowerCase().includes(searchText);

    const matchesCategory =
      category === "All" ||
      product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="products-page">

      {/* =========================================
          PAGE HEADER
      ========================================= */}

      <section className="page-header">

        <div className="page-header-content">

          <span>
            SHOP
          </span>

          <h1>
            All Products
          </h1>

          <p>
            Discover products selected for your
            everyday lifestyle.
          </p>

        </div>

      </section>


      {/* =========================================
          SEARCH SECTION
      ========================================= */}

      <section className="product-controls">

        <div className="search-box">

          <span className="search-icon">
            🔍
          </span>

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

          {search && (
            <button
              className="clear-search"
              onClick={() => setSearch("")}
            >
              ×
            </button>
          )}

        </div>


        {/* CATEGORY FILTER */}

        <div className="category-filter">

          <span className="filter-icon">
            ☰
          </span>

          <select
            value={category}
            onChange={(e) =>
              setCategory(e.target.value)
            }
          >

            {categories.map((item) => (
              <option
                key={item}
                value={item}
              >
                {item}
              </option>
            ))}

          </select>

        </div>

      </section>


      {/* =========================================
          CATEGORY QUICK FILTERS
      ========================================= */}

      <section className="category-chips">

        {categories.map((item) => (

          <button
            key={item}
            className={
              category === item
                ? "category-chip active"
                : "category-chip"
            }
            onClick={() =>
              setCategory(item)
            }
          >
            {item}
          </button>

        ))}

      </section>


      {/* =========================================
          RESULTS
      ========================================= */}

      <section className="products-results">

        <div className="results-top">

          <p>
            Showing{" "}
            <strong>
              {filteredProducts.length}
            </strong>{" "}
            products
          </p>

          {search && (
            <span>
              Search: "{search}"
            </span>
          )}

        </div>


        {filteredProducts.length > 0 ? (

          <div className="product-grid">

            {filteredProducts.map((product) => (

              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
              />

            ))}

          </div>

        ) : (

          /* =====================================
             NO RESULTS
          ===================================== */

          <div className="no-products">

            <div className="no-products-icon">
              🔍
            </div>

            <h2>
              No products found
            </h2>

            <p>
              Try searching with a different
              product name or category.
            </p>

            <button
              className="reset-search-btn"
              onClick={() => {
                setSearch("");
                setCategory("All");
              }}
            >
              View All Products
            </button>

          </div>

        )}

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

export default Products;
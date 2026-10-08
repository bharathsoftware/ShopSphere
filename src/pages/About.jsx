import { Link } from "react-router-dom";

function About() {
  return (
    <main className="about-page">

      {/* =========================================
          HERO
      ========================================= */}

      <section className="about-hero">

        <div className="about-hero-content">

          <span className="section-label">
            ABOUT SHOPSPHERE
          </span>

          <h1>
            Shopping made
            <br />
            <span>simple & better.</span>
          </h1>

          <p>
            ShopSphere is a modern e-commerce experience
            designed to make everyday shopping simple,
            fast and enjoyable.
          </p>

          <Link
            to="/products"
            className="about-shop-btn"
          >
            Explore Products →
          </Link>

        </div>


        <div className="about-hero-image">

          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85"
            alt="Modern shopping"
          />

          <div className="about-floating-card">

            <strong>
              100%
            </strong>

            <span>
              Modern Shopping
            </span>

          </div>

        </div>

      </section>


      {/* =========================================
          OUR STORY
      ========================================= */}

      <section className="about-story">

        <div className="about-story-image">

          <img
  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=85"
  alt="Online shopping experience"
/>

        </div>


        <div className="about-story-content">

          <span className="section-label">
            OUR STORY
          </span>

          <h2>
            Built for the way
            <br />
            you shop today.
          </h2>

          <p>
            ShopSphere was created with one simple idea:
            online shopping should be easy, clear and
            enjoyable.
          </p>

          <p>
            From discovering products to adding items
            to your cart, every part of the experience
            is designed with simplicity in mind.
          </p>

          <div className="about-stats">

            <div>
              <strong>8+</strong>
              <span>Products</span>
            </div>

            <div>
              <strong>4</strong>
              <span>Categories</span>
            </div>

            <div>
              <strong>100%</strong>
              <span>Responsive</span>
            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          WHY SHOPSPHERE
      ========================================= */}

      <section className="about-features-section">

        <div className="about-section-heading">

          <span className="section-label">
            WHY SHOPSPHERE
          </span>

          <h2>
            Designed around you.
          </h2>

          <p>
            Everything you need for a smooth and modern
            shopping experience.
          </p>

        </div>


        <div className="modern-about-features">

          <div className="modern-about-feature">

            <div className="about-feature-number">
              01
            </div>

            <div className="about-feature-icon">
              🛍️
            </div>

            <h3>
              Easy Shopping
            </h3>

            <p>
              Browse products easily with a clean,
              simple and intuitive interface.
            </p>

          </div>


          <div className="modern-about-feature">

            <div className="about-feature-number">
              02
            </div>

            <div className="about-feature-icon">
              ⚡
            </div>

            <h3>
              Fast Experience
            </h3>

            <p>
              Quickly find products and move through
              the shopping process without confusion.
            </p>

          </div>


          <div className="modern-about-feature">

            <div className="about-feature-number">
              03
            </div>

            <div className="about-feature-icon">
              📱
            </div>

            <h3>
              Responsive Design
            </h3>

            <p>
              Enjoy the same modern experience on
              desktop, tablet and mobile devices.
            </p>

          </div>


          <div className="modern-about-feature">

            <div className="about-feature-number">
              04
            </div>

            <div className="about-feature-icon">
              ⚛️
            </div>

            <h3>
              React Powered
            </h3>

            <p>
              Built with React and modern frontend
              development practices.
            </p>

          </div>

        </div>

      </section>


      {/* =========================================
          TECHNOLOGY
      ========================================= */}

      <section className="about-tech">

        <div className="about-tech-content">

          <span className="section-label">
            TECHNOLOGY
          </span>

          <h2>
            Built with modern
            <br />
            web technology.
          </h2>

          <p>
            ShopSphere demonstrates a modern frontend
            architecture using React, React Router,
            reusable components and responsive CSS.
          </p>

          <div className="tech-tags">

            <span>React.js</span>
            <span>JavaScript</span>
            <span>React Router</span>
            <span>CSS3</span>
            <span>Vite</span>

          </div>

        </div>


        <div className="about-tech-visual">

          <div className="tech-window">

            <div className="window-top">

              <span></span>
              <span></span>
              <span></span>

            </div>

            <div className="window-content">

              <div className="code-line large"></div>
              <div className="code-line"></div>
              <div className="code-line short"></div>
              <div className="code-line medium"></div>
              <div className="code-line"></div>
              <div className="code-line short"></div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          CTA
      ========================================= */}

      <section className="about-cta">

        <span>
          READY TO SHOP?
        </span>

        <h2>
          Find something
          <br />
          you'll love.
        </h2>

        <Link
          to="/products"
          className="about-cta-btn"
        >
          Start Shopping →
        </Link>

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

export default About;
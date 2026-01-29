import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />

      <section id="header">
        <div className="container">
          <div className="hero-wrapper">
            <div className="hero-text" data-aos="fade-up">
              <span>Natural Inner Beauty</span>
              <h1>
                Feed Your Skin,
                <br />
                Find Your Glow.
              </h1>
              <p>
                Enhance Your Radiance with Clean, Science-Driven Skincare –
                Cruelty-free, Sustainable and Enriched with Antioxidants.
              </p>
              <a href="#newsletter" className="nav-button">
                Shop Collection
              </a>
            </div>
            <div className="hero-img" data-aos="fade-left" data-aos-delay="200">
              <img src="/Hero.png" alt="Skincare Hero" />
            </div>
          </div>
        </div>
      </section>

      {/* Rating */}
      <section id="rating">
        <div className="container rating-wrapper" data-aos="fade-up">
          <div className="rate-item">
            <span className="rate-number">4.8</span>
            <p>4,300+ Ratings</p>
          </div>
          <div className="rate-item">
            <span className="rate-number">10k+</span>
            <p>Happy Clients</p>
          </div>
          <div className="rate-item">
            <span className="rate-number">1.7M</span>
            <p>Products Sold</p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="subtitle">Why Choose Us</span>
            <h1>Healthy Skin Means A Healthier You</h1>
          </div>

          <div className="benefits-grid">
            <div className="benefit-img" data-aos="fade-right">
              <img src="/Benefits.png" alt="Benefits" />
            </div>
            <div className="benefits-list">
              <div
                className="benefit-card"
                data-aos="fade-left"
                data-aos-delay="0"
              >
                <div className="benefit-icon">
                  <i className="fas fa-tint"></i>
                </div>
                <div>
                  <h3>Deep Hydration</h3>
                  <p>
                    Locks in moisture to keep skin supple, smooth and
                    comfortable throughout the day.
                  </p>
                </div>
              </div>
              <div
                className="benefit-card"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                <div className="benefit-icon">
                  <i className="fas fa-star-half-stroke"></i>
                </div>
                <div>
                  <h3>Radiance Boost</h3>
                  <p>
                    Enriched with natural antioxidants to revive dullness and
                    enhance your skin's natural glow.
                  </p>
                </div>
              </div>
              <div
                className="benefit-card"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                <div className="benefit-icon">
                  <i className="fas fa-heart"></i>
                </div>
                <div>
                  <h3>Skin Barrier Support</h3>
                  <p>
                    Strengthens your skin barrier for long-lasting protection
                    and comfort.
                  </p>
                </div>
              </div>
              <div
                className="benefit-card"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <div className="benefit-icon">
                  <i className="fas fa-leaf"></i>
                </div>
                <div>
                  <h3>Eco-Friendly Care</h3>
                  <p>
                    Sustainably sourced ingredients that are safe for you and
                    the planet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="products">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="subtitle">Our Collection</span>
            <h1>Check Out Our Products</h1>
          </div>

          <div className="products-grid">
            <div className="product-card" data-aos="zoom-in" data-aos-delay="0">
              <div className="product-icon">
                <i className="fas fa-pump-soap"></i>
              </div>
              <p>Cream</p>
            </div>
            <div
              className="product-card"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="product-icon">
                <i className="fas fa-eye-dropper"></i>
              </div>
              <p>Serum</p>
            </div>
            <div
              className="product-card"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="product-icon">
                <i className="fas fa-pump-soap"></i>
              </div>
              <p>Lotion</p>
            </div>
            <div
              className="product-card"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div className="product-icon">
                <i className="fas fa-sun"></i>
              </div>
              <p>Sunscreen</p>
            </div>
            <div
              className="product-card"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <div className="product-icon">
                <i className="fas fa-wine-bottle"></i>
              </div>
              <p>Coconut Oil</p>
            </div>
          </div>

          <div
            style={{ textAlign: "center" }}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <a href="" className="nav-button">
              View Full Collection
            </a>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="container">
          <div className="about-wrapper">
            <div className="about-text" data-aos="fade-right">
              <span className="subtitle">Our Story</span>
              <h1>The Heart of Sélène</h1>
              <p>
                At Sélène, we believe that radiant skin starts with the purest
                ingredients and the gentlest care. Our mission is simple: to
                craft skincare that’s as nourishing for your well-being as it is
                kind to the planet. Inspired by nature and guided by science,
                every Aureis product blends potent botanical extracts with
                proven active ingredients.
              </p>
            </div>
            <div className="about-img" data-aos="fade-left">
              <img src="/About.png" alt="About Us" />
            </div>
          </div>
        </div>
      </section>

      <div data-aos="fade-up">
        <Testimonials />
      </div>

      <section id="newsletter">
        <div className="container">
          <div className="newsletter-content" data-aos="zoom-in">
            <h1>Join Our Community</h1>
            <p>
              Subscribe to our newsletter and become part of a community that
              believes in radiant skin and a radiant planet.
            </p>
            <form className="form">
              <input
                type="email"
                placeholder="Enter your email address"
                required
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </section>

      <section id="footer">
        <footer>
          <div className="footer-container">
            <div className="footer-col" data-aos="fade-up" data-aos-delay="0">
              <h3>Sélène</h3>
              <div className="contact-info">
                <p>
                  <i className="fa-solid fa-phone"></i> +77 9885778643
                </p>
                <p>
                  <i className="fa-solid fa-envelope"></i> aurea@support.com
                </p>
              </div>
            </div>

            <div className="footer-col" data-aos="fade-up" data-aos-delay="100">
              <h3>Shop</h3>
              <ul>
                <li>
                  <a href="#">All Products</a>
                </li>
                <li>
                  <a href="#">Best Sellers</a>
                </li>
                <li>
                  <a href="#">New Arrivals</a>
                </li>
              </ul>
            </div>

            <div className="footer-col" data-aos="fade-up" data-aos-delay="200">
              <h3>Company</h3>
              <ul>
                <li>
                  <a href="#">Our Story</a>
                </li>
                <li>
                  <a href="#">Sustainability</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
              </ul>
            </div>

            <div className="footer-col" data-aos="fade-up" data-aos-delay="300">
              <h3>Follow Us</h3>
              <div className="social-icons">
                <a href="#">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-tiktok"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
}

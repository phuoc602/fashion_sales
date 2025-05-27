import React from "react";
import Header from '../Header/Header';  
import Footer from '../Footer/Footer';
import './Home.scss';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div className="app">
      <Header />

      <section className="hero">
        <div className="hero-content">
          <h2>Your Cozy Era</h2>
          <p>Get peak comfy-chic with new winter essentials.</p>
          <button>SHOP NOW</button>
        </div>
        <img
          src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
          alt="Hero Banner"
        />
      </section>

      <section className="new-products">
        <h3>Sản Phẩm Mới</h3>
      <div className="product-list">
  {[...Array(6)].map((_, i) => (
    <div className="product-card" key={i}>
      <Link to={`/product/${i + 1}`}>
        <img
          src={`https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80,${i}`}
          alt="New Product"
        />
      </Link>
      <p>Shirt</p>
      <p>Unisex</p>
    </div>
  ))}
</div>
      </section>

      <section className="featured-products">
        <h3>Sản Phẩm Nổi Bật</h3>
        <div className="product-list">
          {[...Array(6)].map((_, i) => (
            <div className="product-card" key={i}>
              <img
                src={`https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80,${i + 10}`}
                alt="Featured Product"
              />
              <p>Shirt</p>
              <p>Unisex</p>
            </div>
          ))}
        </div>
      </section>

      <section className="sustainability">
        {[...Array(3)].map((_, i) => (
          <div className="sustain-item" key={i}>
            <img
              src={`https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80,${i + 20}`}
              alt="Sustainability"
            />
            <p>Cleaner Fashion</p>
            <p>Lorem ipsum dolar sit amet consectetur</p>
            <a href="#">Learn More</a>
          </div>
        ))}
      </section>

      <section className="faq">
        <div className="faq-content">
          <img
            src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
            alt="FAQ"
          />
          <div className="faq-box">
            <h3>Frequently asked questions</h3>
            <ul>
              <li>See the sustainability efforts behind each of our products.</li>
              <li>See the sustainability efforts behind each of our products.</li>
              <li>See the sustainability efforts behind each of our products.</li>
              <li>See the sustainability efforts behind each of our products.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="blog">
        <h3>Latest blog</h3>
        <div className="blog-list">
          {[...Array(3)].map((_, i) => (
            <div className="blog-card" key={i}>
              <img
                src={`https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80,${i + 30}`}
                alt="Blog"
              />
              <h4>Humans are much more smarter than AI</h4>
              <p>Lorem ipsum dolar sit amet consectetur. Lorem ipsum dolar sit amet consectetur.</p>
              <a href="#">Learn more</a>
            </div>
          ))}
        </div>
      </section>

      <section className="clients">
        <h3>Our happy clients</h3>
        <div className="testimonials">
          {[...Array(2)].map((_, i) => (
            <div className="testimonial" key={i}>
              <p>
                Lorem ipsum dolor sit amet consectetur. Condimentum eget vitae ligula sed urna sit sagittis
                interdum a. Blandit mattis mattis lobortis orci.
              </p>
              <strong>Jacqueline Wright</strong>
              <span>Customer</span>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

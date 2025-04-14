import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import About from './pages/About'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="app-container">
        <nav className="navigation">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
        </nav>

        <Routes>
          <Route path="/" element={
            <>
              {/* Introduction Section */}
              <section className="intro-section">
                <h1>Hello, I'm Rabin Regmi</h1>
                <p className="intro-text">
                  A data enthusiast with an MS in Business Analytics. I have experience working in financial, 
                  agriculture, and pharmaceutical companies as a data business analyst engineer. This platform 
                  serves as a space to share my knowledge and experiences in the field of data analytics.
                </p>
              </section>

              {/* Projects Section */}
              <section className="projects-section">
                <h2>Featured Projects</h2>
                <div className="projects-grid">
                  <div className="project-card">
                    <h3>Financial Risk Analysis Dashboard</h3>
                    <p>Developed a comprehensive dashboard for analyzing financial risks using Python and Tableau. The system processes real-time market data, calculates risk metrics, and provides interactive visualizations for decision-making.</p>
                    <div className="tech-tags">
                      <span>Python</span>
                      <span>Tableau</span>
                      <span>SQL</span>
                      <span>Data Analysis</span>
                    </div>
                  </div>
                  <div className="project-card">
                    <h3>Agricultural Yield Prediction Model</h3>
                    <p>Created a machine learning model to predict crop yields based on historical data and weather patterns. The model achieved 85% accuracy in predicting seasonal yields, helping farmers optimize their planting strategies.</p>
                    <div className="tech-tags">
                      <span>Machine Learning</span>
                      <span>Python</span>
                      <span>Data Analysis</span>
                      <span>TensorFlow</span>
                    </div>
                  </div>
                  <div className="project-card">
                    <h3>Pharmaceutical Sales Analytics</h3>
                    <p>Implemented an analytics system to track and predict pharmaceutical sales trends. The system integrates with multiple data sources and provides actionable insights for inventory management and sales forecasting.</p>
                    <div className="tech-tags">
                      <span>Power BI</span>
                      <span>SQL</span>
                      <span>Data Visualization</span>
                      <span>ETL</span>
                    </div>
                  </div>
                  <div className="project-card">
                    <h3>Customer Segmentation Analysis</h3>
                    <p>Developed a clustering model to segment customers based on purchasing behavior and demographics. The analysis helped optimize marketing strategies and improve customer retention by 25%.</p>
                    <div className="tech-tags">
                      <span>Python</span>
                      <span>Machine Learning</span>
                      <span>Data Mining</span>
                      <span>Tableau</span>
                    </div>
                  </div>
                  <div className="project-card">
                    <h3>Supply Chain Optimization</h3>
                    <p>Created an optimization model for supply chain management that reduced inventory costs by 30% while maintaining service levels. The system uses predictive analytics to forecast demand and optimize stock levels.</p>
                    <div className="tech-tags">
                      <span>Python</span>
                      <span>Optimization</span>
                      <span>SQL</span>
                      <span>Data Analysis</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Social Media Section */}
              <section className="social-section">
                <h2>Connect With Me</h2>
                <div className="social-links">
                  <a href="#" className="social-link">
                    <i className="fab fa-linkedin"></i> LinkedIn
                  </a>
                  <a href="#" className="social-link">
                    <i className="fab fa-github"></i> GitHub
                  </a>
                  <a href="#" className="social-link">
                    <i className="fab fa-twitter"></i> Twitter
                  </a>
                  <a href="#" className="social-link">
                    <i className="fab fa-medium"></i> Medium
                  </a>
                  <a href="#" className="social-link">
                    <i className="fab fa-kaggle"></i> Kaggle
                  </a>
                </div>
              </section>

              {/* Contact Section */}
              <section className="contact-section">
                <h2>Get In Touch</h2>
                <div className="contact-info">
                  <div className="contact-item">
                    <i className="fas fa-phone"></i>
                    <p><strong>Phone:</strong> +977 7014913273</p>
                  </div>
                  <div className="contact-item">
                    <i className="fas fa-envelope"></i>
                    <p><strong>Email:</strong> rabinreg@gmail.com</p>
                  </div>
                </div>
                <form className="contact-form">
                  <div className="form-group">
                    <input type="text" placeholder="Your Name" required />
                  </div>
                  <div className="form-group">
                    <input type="email" placeholder="Your Email" required />
                  </div>
                  <div className="form-group">
                    <textarea placeholder="Your Message" required></textarea>
                  </div>
                  <button type="submit" className="submit-button">Send Message</button>
                </form>
              </section>

              {/* Interactive Demo Section */}
              <div className="feature-section">
                <h2>Interactive Demo</h2>
                <div className="counter-card">
                  <h3>Try the Counter</h3>
                  <p className="counter-value">Current Count: {count}</p>
                  <div className="button-group">
                    <button 
                      className="counter-button"
                      onClick={() => setCount(count + 1)}
                    >
                      Increment
                    </button>
                    <button 
                      className="counter-button"
                      onClick={() => setCount(count - 1)}
                    >
                      Decrement
                    </button>
                    <button 
                      className="counter-button reset"
                      onClick={() => setCount(0)}
                    >
                      Reset
                    </button>
                  </div>
                </div>
              </div>
            </>
          } />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

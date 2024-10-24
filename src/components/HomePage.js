import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = (props) => {
  return (
    <div className={`container bg-${props.mode}`}>
      {/* Hero Section */}
      <section className="hero">
        <h2>Early Detection Saves Lives</h2>
        <p>Use our AI-powered tool to help in the early detection of breast cancer.</p>
        <button className="btn btn-primary"><Link to="/test" style={{color:'white',textDecoration:"None"}}><span>Start Test</span></Link></button>
      </section>

      {/* Introduction Section */}
      <section className="introduction mt-3">
        <h3>Why Early Detection is Important</h3>
        <p>Breast cancer is one of the most common cancers among women. Early detection can significantly improve the chances of successful treatment. Our app helps by analyzing medical data and providing insights.</p>
      </section>

      {/* Benefits Section */}
      <section className="benefits">
        <h3>Why Use Our App?</h3>
        <ul>
          <li>Quick AI-driven analysis</li>
          <li>Private and secure data handling</li>
          <li>Easy to use for everyone</li>
        </ul>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2024 Breast Cancer Test</p>
      </footer>
    </div>
  );
}

export default HomePage;

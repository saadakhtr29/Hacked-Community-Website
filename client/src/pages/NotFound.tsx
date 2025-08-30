import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from 'lucide-react';
import '../style/NotFound.css';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="notfound">
      <div className="notfound-card">
        {/* 404 Animation */}
        <div className="notfound-404 animate-pulse-glow">
          404
        </div>
        
        <h1 className="notfound-title">
          Page Not Found
        </h1>
        
        <p className="notfound-text">
          Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
        </p>

        {/* Action Buttons */}
        <div className="notfound-actions">
          <a href="/" className="btn-home">
            <Home size={18} />
            Go Home
          </a>
          
          <button onClick={() => window.history.back()} className="btn-back">
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>

        {/* Fun Error Message */}
        <div className="notfound-quote">
          <p>
            "In the world of code, every 404 is just a redirect waiting to happen." 
            <br />
            <span className="quote-highlight">- The Hacked Team</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

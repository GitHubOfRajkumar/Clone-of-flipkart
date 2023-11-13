import React, { useEffect, useState } from 'react';
import '../Css/PageNotFound.css'; // Import your CSS file
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
  const navigate = useNavigate();
  const [squarePosition, setSquarePosition] = useState({ x: 0, y: 0 });

  const handlePage = () => {
    navigate("/");
  }

  useEffect(() => {
    // Mouse movement event handler
    const handleMouseMove = (e) => {
      const x = -e.clientX / 90;
      const y = -e.clientY / 90;
      setSquarePosition({ x, y });
    };

    // Mobile gyroscope event handler
    const handleDeviceOrientation = (e) => {
      const gamma = e.gamma / 3;
      const beta = e.beta / 3;
      setSquarePosition({ x: gamma, y: beta });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('deviceorientation', handleDeviceOrientation);

    return () => {
      // Cleanup event listeners when the component unmounts
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('deviceorientation', handleDeviceOrientation);
    };
  }, []);

  return (
    <div className="page-not-found-container"> {/* Apply the unique class here */}
      <div className="Square404" id="Square">
        <div className="Square" style={{ right: squarePosition.x + 'px', bottom: squarePosition.y + 'px' }}>
          <h1>404</h1>
        </div>
      </div>
      <div className="texts">
        <h4>Oops! page not found</h4>
        <p>The page you are looking for does not exist. Go back to the main page or search.</p>
        <a onClick={handlePage} className="btn">Back to Home</a>
        <label htmlFor="search_box"></label>
        <input type="search" name="search" id="search_box" placeholder="Search" />
      </div>
    </div>
  );
};

export default PageNotFound;

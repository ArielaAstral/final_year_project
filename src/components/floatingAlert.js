import React, { useState, useEffect } from "react";
import "./FloatingAlert.css"; // For custom styles

const FloatingAlert = ({ message, type, duration }) => {
  const [visible, setVisible] = useState(true);

  // Automatically hide the alert after the specified duration
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration || 3000); // Default to 3 seconds if duration is not provided

    // Cleanup timer when the component is unmounted or time is up
    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) return null;

  return (
    <div className={`floating-alert ${type}`}>
      {message}
    </div>
  );
};

export default FloatingAlert;

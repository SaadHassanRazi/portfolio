import React, { useState, useEffect } from "react";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add a scroll event listener to track the user's scroll position
    window.addEventListener("scroll", handleScroll);
    return () => {
      // Clean up the event listener when the component is unmounted
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // Show the button when the user scrolls down a certain distance (e.g., 100 pixels)
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    // Scroll to the top of the page when the button is clicked
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Add smooth scrolling effect
    });
  };

  return (
    <div className={`scroll-to-top-button ${isVisible ? "visible" : ""}`}>
      <button onClick={scrollToTop}>Scroll to Top</button>
    </div>
  );
}

export default ScrollToTopButton;

import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import Slide from "./Slide";
import "./styles.css";

const slides = [
    {
        id: 1,
        title: "Welcome to Our App",
        description: "Discover new features to make your life easier.",
        image: "https://via.placeholder.com/400",
    },
    {
        id: 2,
        title: "Stay Connected",
        description: "Easily communicate with friends and family.",
        image: "https://via.placeholder.com/400",
    },
    {
        id: 3,
        title: "Get Started Today",
        description: "Sign up now and enjoy exclusive benefits!",
        image: "https://via.placeholder.com/400",
    },
];

const Onboarding = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slideInAnimation = useSpring({
        from: { opacity: 0, transform: "translateX(100%)" },
        to: { opacity: 1, transform: "translateX(0%)" },
        reset: true,
    });

    const handleNext = () => {
        if (currentIndex < slides.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div className="onboarding-container">
            <animated.div style={slideInAnimation}>
                <Slide slide={slides[currentIndex]} />
            </animated.div>
            <div className="navigation">
                <button onClick={handlePrev} disabled={currentIndex === 0}>
                    Previous
                </button>
                <button onClick={handleNext} disabled={currentIndex === slides.length - 1}>
                    Next
                </button>
            </div>
            <div className="progress-dots">
                {slides.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentIndex ? "active" : ""}`}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Onboarding;

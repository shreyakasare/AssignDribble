import React from "react";

const Slide = ({ slide }) => {
    return (
        <div className="slide">
            <img src={slide.image} alt={slide.title} />
            <h1>{slide.title}</h1>
            <p>{slide.description}</p>
        </div>
    );
};

export default Slide;

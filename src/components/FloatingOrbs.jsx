import React from 'react';

const FloatingOrbs = () => {
    const orbs = Array.from({ length: 15 }).map((_, i) => (
        <div className="orb" key={i}></div>
    ));

    return <div className="floating-orbs-container">{orbs}</div>;
};

export default FloatingOrbs;

import React from 'react';

const FloatingOrbs = () => {
    // Use only a mild red for all hearts
    const colors = [
        'rgba(200,80,80,0.35)'
    ];

    const random = (min, max) => Math.random() * (max - min) + min;

    // Reduced total orbs to 12 to make background calmer
    const orbs = Array.from({ length: 12 }).map((_, i) => {
        // Make the first orb centered and prominent
        if (i === 0) {
            const color = colors[0];
            const style = {
                left: '50%',
                top: '68%',
                transform: `translate(-50%, -50%) scale(1.3)`,
                animationDuration: `${Math.floor(random(4, 8))}s`,
                ['--orb-color']: color,
                zIndex: 2,
                pointerEvents: 'none'
            };
            return <div className="orb center" key={i} style={style} />;
        }

        const left = `${Math.floor(random(2, 95))}%`;
        const top = `${Math.floor(random(2, 92))}%`;
        const color = colors[0];
        const duration = `${Math.floor(random(8, 16))}s`;
        const scale = random(0.6, 1.05);

        const style = {
            left,
            top,
            transform: `scale(${scale})`,
            animationDuration: duration,
            ['--orb-color']: color
        };

        return <div className="orb" key={i} style={style} />;
    });

    return <div className="floating-orbs-container">{orbs}</div>;
};

export default FloatingOrbs;

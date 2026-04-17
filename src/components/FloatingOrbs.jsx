import React, { useEffect } from 'react';

const FloatingOrbs = () => {
    const colors = [
        'rgba(200,80,80,0.45)',
        'rgba(255,140,0,0.35)',
        'rgba(255,215,0,0.35)',
        'rgba(121,163,125,0.35)',
        'rgba(118,140,176,0.35)',
        'rgba(171,57,171,0.35)'
    ];

    const random = (min, max) => Math.random() * (max - min) + min;

    const orbs = Array.from({ length: 30 }).map((_, i) => {
        // Make the first orb centered and prominent
        if (i === 0) {
            const color = colors[0];
            const style = {
                left: '50%',
                top: '68%', // moved lower so it sits between the two cards
                transform: `translate(-50%, -50%) scale(1.6)`,
                animationDuration: `${Math.floor(random(6, 12))}s`,
                ['--orb-color']: color,
                zIndex: 2,
                pointerEvents: 'none'
            };
            return <div className="orb center" key={i} style={style} />;
        }

        const left = `${Math.floor(random(2, 95))}%`;
        const top = `${Math.floor(random(2, 92))}%`;
        const color = colors[i % colors.length];
        const duration = `${Math.floor(random(12, 28))}s`;
        const scale = random(0.6, 1.4);

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

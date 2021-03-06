import React from 'react';
// style
import './style.scss';

const RocketHeader = ({ id, name }) => {
    const imgStyle = {
        backgroundImage: 'url(../assets/' + id + '.jpg)',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        height: '100vh',
    };

    return (
        <div data-testid="header" className="d-flex flex-column justify-content-around w-100">
            <div style={imgStyle}>
                <div className="rocket__header__container h-50  d-flex flex-column align-items-center justify-content-center">
                    <h1 className="rocket__header__text">{name.toUpperCase()}</h1>
                </div>
            </div>
        </div>
    );
};

export default RocketHeader;

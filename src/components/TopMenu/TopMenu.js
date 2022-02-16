import React from 'react';

// components
import SpaceXSvgLogo from './../Logo';
import MenuLinks from './../MenuLinks';
import MenuButton from './../MenuButton';

const TopMenu = ({ rockets, isMenuOpen, toggleMenu }) => (
    <div className="col d-flex justify-content-between align-items-center position-absolute">
        <MenuButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        {<MenuLinks rockets={rockets} toggleMenu={toggleMenu} />}
        <SpaceXSvgLogo />
    </div>
);

export default TopMenu;

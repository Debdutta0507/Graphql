import React from 'react';
import { Link } from 'react-router-dom';
// components
import MenuLinks from '../MenuLinks';
// style
import './style.scss';

const SideMenu = ({ rockets, isMenuOpen, toggleMenu }) => (
    <div
        className={`nav__sidebar position-absolute d-flex align-items-center justify-content-center text-center ${isMenuOpen ? '' : 'nav--animate'
            } `}
    >
        <div className="d-flex flex-column">
            <div className="nav__link">
                <Link to="/launches" onClick={() => toggleMenu(!isMenuOpen)}>
                    PAST LAUNCHES
                </Link>
            </div>


        </div>
    </div>
);

export default SideMenu;

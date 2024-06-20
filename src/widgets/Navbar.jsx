import React from 'react';
import styles from '../styles/navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiamond } from '@fortawesome/free-solid-svg-icons/faDiamond';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faWallet } from '@fortawesome/free-solid-svg-icons/faWallet';
import { faChartSimple } from '@fortawesome/free-solid-svg-icons/faChartSimple';
import { NavLink } from 'react-router-dom';


function Navbar({ children }) {
    return (
        <div>
            {children}
            <div className={styles.navbar}>
                <NavLink to={'game'}>
                    <FontAwesomeIcon icon={faDiamond} color='white' />
                </NavLink>
                <NavLink to={'history'}>
                    <FontAwesomeIcon icon={faChartSimple} color='white' />
                </NavLink>
                <NavLink to={'wallet'}>
                    <FontAwesomeIcon icon={faWallet} color='white' />
                </NavLink>
                <NavLink to={'user'}>
                    <FontAwesomeIcon icon={faUser} color='white' />
                </NavLink>
            </div>
        </div>
    );
}

export default Navbar;
import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.container}>
            {/* Navigation */}
            <nav className={styles.navigation}>
                {/* List */}
                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        <NavLink
                            activeClassName={styles.active}
                            className={styles.link}
                            to="/quotes"
                        >
                            All Quotes
                        </NavLink>
                    </li>
                    <li className={styles.listItem}>
                        <NavLink 
                            activeClassName={styles.active}
                            className={styles.link}
                            to="/new-quote"
                        >
                            Add a quote
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;

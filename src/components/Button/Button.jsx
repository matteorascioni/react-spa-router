import React from 'react';
import { classNames } from '../../helpers/classes';

import styles from './Button.module.css';

const Button = ({
    onClick, 
    children,
    className,
    isFlat = false,
}) => {
    return (
        <button 
            onClick={onClick}
            className={classNames({
                [styles.container]: true,
                [styles.containerFlat]: !isFlat,
                [`${className}`]: true,
            })}
        >
            {children}            
        </button>
    )
}

export default Button;

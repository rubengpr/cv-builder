import './InputBox.css'
import PropTypes from 'prop-types';
import { useState } from 'react';

export function InputBox({ title, children }) {
    const [isExpanded, setIsExpanded] = useState(true);
    
    const icon = isExpanded ? "./public/nav-arrow-up.svg" : "./public/nav-arrow-down.svg";
    const cardClassName = isExpanded
    ? "card-expanded"
    : "card-collapsed"

    function handleClick() {
        setIsExpanded(!isExpanded);
    }
    
    return(
        <div className="card">
            <div
            className="card-header"
            onClick={handleClick} >
                <h2>{title}</h2>
                <img
                    src={icon}
                    alt="An icon" />
            </div>
            <div className={cardClassName}>
                {children}
            </div>
        </div>
    )
}

InputBox.propTypes = {
    children: PropTypes.node,
};
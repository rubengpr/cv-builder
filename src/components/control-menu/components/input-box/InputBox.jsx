import './InputBox.css'
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Button } from '../../../button/Button.jsx';

export function InputBox({ title, children, showButton, text }) {
    const [isExpanded, setIsExpanded] = useState(true);
    
    const icon = isExpanded ? "./nav-arrow-up.svg" : "./nav-arrow-down.svg";
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
            <div className="card-footer">
                {showButton &&
                    (<Button text={text} />)
                }
            </div>
        </div>
    )
}

InputBox.propTypes = {
    children: PropTypes.node,
};
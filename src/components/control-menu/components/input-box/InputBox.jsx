import './InputBox.css'
import PropTypes from 'prop-types';

export function InputBox({ title, children }) {
    return(
        <div className="input-box">
            <h2>{title}</h2>
            {children}
        </div>
    )
}

InputBox.propTypes = {
    children: PropTypes.node,
};
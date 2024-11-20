import './Input.css'
import PropTypes from 'prop-types';

export function Input({ label, id, handleChange }) {

    return(
        <div className="input">
            <label htmlFor={id} >{label}</label>
            <input
                id={id} 
                type="text"
                onChange={handleChange} />
        </div>
    )
}

Input.propTypes = {
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    handleChange: PropTypes.func,
};
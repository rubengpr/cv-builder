import './Input.css'
import PropTypes from 'prop-types';

export function Input({ label, id, handleNameChange }) {

    return(
        <div className="input">
            <label htmlFor={id} >{label}</label>
            <input
                id={id} 
                type="text"
                onChange={handleNameChange} />
        </div>
    )
}

Input.propTypes = {
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    handleNameChange: PropTypes.func.isRequired,
};
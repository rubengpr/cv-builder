import './Button.css'
import PropTypes from 'prop-types'

export function Button({ text, handleClickButton }) {
    return(
        <button onClick={handleClickButton} className='main-button'>{text}</button>
    )
}

Button.propTypes = {
    text: PropTypes.string,
    id: PropTypes.string,
    handleClickButton: PropTypes.func,
}
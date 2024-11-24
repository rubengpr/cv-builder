import './ColorCard.css'
import PropTypes from 'prop-types'

export function ColorCard({ handleColorChange, color }) {
    return(
        <div className='color-card'>
            <input className='colorpicker-button' type="color" onInput={handleColorChange} value={color} />
        </div>
    )
}

ColorCard.propTypes = {
    handleColorChange: PropTypes.func,
    color: PropTypes.string
}
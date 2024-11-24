import './ColorCard.css'
import PropTypes from 'prop-types'

export function ColorCard({ handleColorChange, color }) {
    return(
        <div className='color-card'>
            <p className='font-title b'>Choose a color</p>
            <input className='colorpicker-button' type="color" onInput={handleColorChange} value={color} />
        </div>
    )
}

ColorCard.propTypes = {
    handleColorChange: PropTypes.func,
    color: PropTypes.string
}
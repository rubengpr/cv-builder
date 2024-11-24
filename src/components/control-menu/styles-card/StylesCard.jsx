import './StylesCard.css'
import PropTypes from 'prop-types';

export function StylesCard({ handleFontChange }) {
    return(
        <div className='card-styles'>
            <p className='font-title'>Choose a font</p>
            <div className='button-wrapper'>
                <button className='button-font arial' onClick={handleFontChange}>Arial</button>
                <button className='button-font monospace' onClick={handleFontChange}>Monospace</button>
                <button className='button-font georgia' onClick={handleFontChange}>Georgia</button>
            </div>
        </div>
    )
}

StylesCard.propTypes = {
    handleFontChange: PropTypes.func,
}